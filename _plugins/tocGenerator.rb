require 'nokogiri'
# dafi/jekyll-toc-generator
module Jekyll
    module TOCGenerator
        PUNCTUATION_REGEXP = RUBY_VERSION > '1.9' ? /[^\p{Word}\- ]/u : /[^\w\- ]/
        TOGGLE_HTML = '<h1 class="heading">%1</h1>'.freeze
        TOC_CONTAINER_HTML = '<div data-js-toc class="toc">%1<ul class="contents">%2</ul></div>'.freeze
        HIDE_HTML = '<span class="toctoggle">[<a id="toctogglelink" class="internal" href="#">%1</a>]</span>'.freeze

        def toc_generate(html)
            return html if !@context.environments.first['page']['toc']

            config = @context.registers[:site].config

            min_items_to_show_toc = 3

            # better for traditional page seo, commonlly use h1 as title
            toc_top_tag = 'h2'
            toc_top_tag = toc_top_tag.delete('h').to_i
            toc_sec_tag = toc_top_tag + 1
            toc_top_tag = "h#{toc_top_tag}"
            toc_sec_tag = "h#{toc_sec_tag}"

            # Text labels
            contents_label =  'Contents'

            toc_html = ''
            toc_level = 1
            toc_section = 1
            item_number = 1
            level_html = ''

            doc = Nokogiri::HTML(html)

            # Find H1 tag and all its H2 siblings until next H1
            doc.css(toc_top_tag).each do |tag|
                # TODO: This XPATH expression can greatly improved
                ct = tag.xpath("count(following-sibling::#{toc_top_tag})")
                sects = tag.xpath("following-sibling::#{toc_sec_tag}[count(following-sibling::#{toc_top_tag})=#{ct}]")

                level_html    = ''
                inner_section = 0

                sects.each do |sect|
                    inner_section += 1
                    anchor_id = sect.text.downcase
                    anchor_id.gsub!(PUNCTUATION_REGEXP, '')
                    anchor_id.delete!(' ')

                    sect['id'] = anchor_id.to_s

                    level_html += create_level_html(anchor_id,
                                                    toc_level + 1,
                                                    toc_section + inner_section,
                                                    item_number.to_s + '.' + inner_section.to_s,
                                                    sect.text,
                                                    '')
                end

                level_html = '<ul>' + level_html + '</ul>' unless level_html.empty?

                anchor_id = tag.text.downcase
                anchor_id.gsub!(PUNCTUATION_REGEXP, '')
                anchor_id.delete!(' ')
                tag['id'] = anchor_id.to_s

                toc_html += create_level_html(anchor_id,
                                              toc_level,
                                              toc_section,
                                              item_number,
                                              tag.text,
                                              level_html)

                toc_section += 1 + inner_section
                item_number += 1
            end

            # for convenience item_number starts from 1
            # so we decrement it to obtain the index count
            toc_index_count = item_number - 1

            return html if toc_html.empty?

            if min_items_to_show_toc <= toc_index_count
                replaced_toggle_html = TOGGLE_HTML
                                       .gsub('%1', contents_label)

                toc_table = TOC_CONTAINER_HTML
                            .gsub('%1', replaced_toggle_html)
                            .gsub('%2', toc_html)

                doc.css('body').children.before(toc_table)
            end

            doc.css('body').children.to_xhtml
        end

        private

        def create_level_html(anchor_id, toc_level, toc_section, tocNumber, tocText, tocInner)
            link = '<a href="#%1"><span class="number">%2</span> <span class="text">%3</span></a>%4'
                   .gsub('%1', anchor_id.to_s)
                   .gsub('%2', tocNumber.to_s + '.')
                   .gsub('%3', tocText)
                   .gsub('%4', tocInner ? tocInner : '')
            '<li class="level-%1 section-%2">%3</li>'
                .gsub('%1', toc_level.to_s)
                .gsub('%2', toc_section.to_s)
                .gsub('%3', link)
        end
      end
end

Liquid::Template.register_filter(Jekyll::TOCGenerator)

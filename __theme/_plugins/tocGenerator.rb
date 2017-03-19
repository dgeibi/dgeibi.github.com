require 'nokogiri'
# dafi/jekyll-toc-generator
module Jekyll
    module TOCGenerator
        PUNCTUATION_REGEXP = RUBY_VERSION > '1.9' ? /[^\p{Word}\- ]/u : /[^\w\- ]/
        TOGGLE_HTML = '<h1 class="heading">Contents</h1>'.freeze
        TOC_CONTAINER_HTML = '<section data-js-toc class="toc">%1<ul class="contents">%2</ul></section>'.freeze
        TOC_TOP_TAG = 'h2'
        TOC_SEC_TAG = 'h3'
        MIN_ITEMS_TO_SHOW = 3

        def addID(html)
            return html unless @context.environments.first['page']['toc']
            doc = Nokogiri::HTML(html)
            doc.css(TOC_TOP_TAG).each do |tag|
                ct = tag.xpath("count(following-sibling::#{TOC_TOP_TAG})")
                sects = tag.xpath("following-sibling::#{TOC_SEC_TAG}[count(following-sibling::#{TOC_TOP_TAG})=#{ct}]")
                sects.each do |sect|
                    anchor_id = sect.text.downcase
                    anchor_id.gsub!(PUNCTUATION_REGEXP, '')
                    anchor_id.delete!(' ')
                    sect['id'] = anchor_id.to_s
                end
                anchor_id = tag.text.downcase
                anchor_id.gsub!(PUNCTUATION_REGEXP, '')
                anchor_id.delete!(' ')
                tag['id'] = anchor_id.to_s
            end
            doc.css('body').children.to_xhtml
        end

        def toc(html)
            return unless @context.environments.first['page']['toc']

            toc_html = ''
            toc_level = 1
            toc_section = 1
            item_number = 1
            level_html = ''

            doc = Nokogiri::HTML(html)

            doc.css(TOC_TOP_TAG).each do |tag|
                ct = tag.xpath("count(following-sibling::#{TOC_TOP_TAG})")
                sects = tag.xpath("following-sibling::#{TOC_SEC_TAG}[count(following-sibling::#{TOC_TOP_TAG})=#{ct}]")

                level_html    = ''
                inner_section = 0

                sects.each do |sect|
                    inner_section += 1
                    anchor_id = sect.text.downcase
                    anchor_id.gsub!(PUNCTUATION_REGEXP, '')
                    anchor_id.delete!(' ')
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
                toc_html += create_level_html(anchor_id,
                                              toc_level,
                                              toc_section,
                                              item_number,
                                              tag.text,
                                              level_html)

                toc_section += 1 + inner_section
                item_number += 1
            end
            toc_index_count = item_number - 1

            return if toc_html.empty?

            if MIN_ITEMS_TO_SHOW <= toc_index_count
                toc_table = TOC_CONTAINER_HTML
                            .gsub('%1', TOGGLE_HTML)
                            .gsub('%2', toc_html)
            end
            toc_table
        end

        private

        def create_level_html(anchor_id, toc_level, toc_section, tocNumber, tocText, tocInner)
            link = '<a href="#%1"><span class="number">%2</span> <span class="text">%3</span></a>%4'
                   .gsub('%1', anchor_id.to_s)
                   .gsub('%2', tocNumber.to_s + '.')
                   .gsub('%3', tocText)
                   .gsub('%4', tocInner)

            '<li class="level-%1 section-%2">%3</li>'
                .gsub('%1', toc_level.to_s)
                .gsub('%2', toc_section.to_s)
                .gsub('%3', link)
        end
      end
end

Liquid::Template.register_filter(Jekyll::TOCGenerator)

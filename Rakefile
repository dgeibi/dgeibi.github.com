require 'time'

desc "Push to github"
task :push do
  puts   "Pushing to `master' branch:"
  system "git add -A"
  system "git commit -m 'update at #{Time.now}'"
  system "git push origin master"
  puts   "`master' branch updated."
  puts
end

desc "commit"
task :commit do
  system "git add -A"
  system "git commit -m 'update at #{Time.now}'"
end

desc "Set up Jekyll Server"
task :serve do
  puts "Set up server (development)"
  system "bundle exec jekyll serve --incremental"
end
namespace :serve do
  task :p do
    begin
      puts "Set up server (production)"
      system "JEKYLL_ENV=production bundle exec jekyll serve --incremental"
    end
  end
end

desc "sw"
task :default do
    system "sed -i \"s/#.*'$/#$(printf %x $(date +%s))'/\" sw.js"
end

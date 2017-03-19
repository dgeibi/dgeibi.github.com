require 'time'

task :default => :serve

desc "generate _config.yml"
task :getconfig do
  puts   "Generating _config.yml"
  system "node __theme/_getConfig.js"
end

desc "build"
task :build do
  puts   "Start building"
  system "bundle exec rake getconfig"
  system "JEKYLL_ENV=production bundle exec jekyll build"
end

desc "Push to github"
task :push do
  puts   "Pushing to `master' branch:"
  system "bundle exec rake getconfig"
  system "bundle exec rake commit"
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
  system "bundle exec rake getconfig"
  system "bundle exec jekyll clean"
  system "bundle exec jekyll serve --incremental"
end

namespace :serve do
  task :p do
    begin
      puts "Set up server (production)"
      system "bundle exec rake getconfig"
      system "bundle exec jekyll clean"
      system "JEKYLL_ENV=production bundle exec jekyll serve --incremental"
    end
  end
end


guard 'shell' do
  watch(%r{^data/markdown/(.*)\.md}) do |m| 
    t = Time.now

    puts "#{m[1]}.html. #{t.hour}:#{t.min}:#{t.sec}"
    `cat data/html/templates/header.html > data/html/#{m[1]}.html`
    `bin/Markdown.pl #{m[0]} >> data/html/#{m[1]}.html` 
    `cat data/html/templates/footer.html >> data/html/#{m[1]}.html`
  end
end


guard 'shell' do
  watch(%r{^data/markdown/(.*)\.md}) do |m| 
    t = Time.now
    puts "#{m[1]}.html. #{t.hour}:#{t.min}:#{t.sec}"

    `cat data/html_src/templates/header.html > data/html_gen/#{m[1]}.html`
    `php bin/markdown_wrapper.php #{m[0]} >> data/html_gen/#{m[1]}.html` 
    `cat data/html_src/templates/footer.html >> data/html_gen/#{m[1]}.html`
  end
end

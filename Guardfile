
guard 'shell' do
  watch(%r{^data/markdown/(.*)\.md}) do |m| 
    t = Time.now
    puts "#{m[1]}.html. #{t.hour}:#{t.min}:#{t.sec}"

#    puts " m0: #{m[0]}\n m1: #{m[1]}\n"

    layered_dirs = count_directories(m[0]);
    layered_dirs -= 2    

#    puts "layered_dirs: #{layered_dirs}"


    `cat data/html_src/templates/header.html > data/html_gen/#{m[1]}.html`
    `php bin/markdown_wrapper.php #{m[0]} >> data/html_gen/#{m[1]}.html` 
    `cat data/html_src/templates/footer.html >> data/html_gen/#{m[1]}.html`
  end
end

def count_directories f
  return (f.split('/').length)
end

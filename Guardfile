# A sample Guardfile

# Add files and commands to this file, like the example:
#   watch('file/path') { `command(s)` }
#
guard 'shell' do
  watch(%r{^data/markdown/(.*)\.md}) do |m| 
    # `~/bin/Markdown.pl #{m[0]} > data/html/#{m[1]}.html` 

    puts "#{m[1]}.html. #{Time.now}"
    `cat data/html/header.html > data/html/#{m[1]}.html`
    `~/bin/Markdown.pl #{m[0]} >> data/html/#{m[1]}.html` 
    `cat data/html/footer.html >> data/html/#{m[1]}.html`
  end
end

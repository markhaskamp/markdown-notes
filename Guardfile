# A sample Guardfile
# More info at https://github.com/guard/guard#readme

# Add files and commands to this file, like the example:
#   watch('file/path') { `command(s)` }
#
guard 'shell' do
  watch('(.*).txt') {|m| `tail #{m[0]}` }

#  watch('(.*).md') {|m| `~/bin/Markdown.pl #{m[0]} > #{m[1]}.html` }
  watch(%r{^data/markdown/(.*)\.md}) {|m| `~/bin/Markdown.pl #{m[0]} > data/html/#{m[1]}.html` }
end

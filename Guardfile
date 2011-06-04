
guard 'shell' do
  watch(%r{^data/markdown/(.*)\.md}) do |m| 
    t = Time.now
    puts "#{m[1]}.html. #{t.hour}:#{t.min}:#{t.sec}"

    layered_dirs = count_directories(m[0]);
    parent_dirs = build_parent_dirs(layered_dirs)

    `echo "" > data/html_gen/#{m[1]}.html`
    get_header_text(parent_dirs).split("\n").each do |line|
        `echo \"#{line}\" >> data/html_gen/#{m[1]}.html`
        # `type #{line}`
   end

    `php bin/markdown_wrapper.php #{m[0]} >> data/html_gen/#{m[1]}.html` 
    `cat data/html_src/templates/footer.html >> data/html_gen/#{m[1]}.html`
  end
end

def count_directories f
  return (f.split('/').length)
end

def build_parent_dirs sub_dir_depth
  parent_dir = ''
  sub_dir_depth -= 2    
  sub_dir_depth.times { parent_dir += '../' }

  parent_dir
end

def get_header_text parent_dirs

header_text = <<EOF
<html>
<head>
<script type="text/javascript" src="#{parent_dirs}html_src/scripts/jquery-1.6.1.min.js"></script>
<script type="text/javascript" src="#{parent_dirs}html_src/scripts/jquery.headerlinks.min_.js"></script>
<script type="text/javascript" src="#{parent_dirs}html_src/scripts/md2html.js"></script>
<link rel="stylesheet" type="text/css" href="#{parent_dirs}html_src/styles/basic.css" />
</head>

<body id="body">
  <div id="toc">
    <p><a href="file:///users/mark/Documents/markdown_notes/data/html_gen">Home dir</a></p>
  </div>
EOF

  return header_text
end

$(document).ready( function() {
  $('div#toc').headerlinks({
                 minlen: 0
                ,headers: {use: true, depth: 4} 
              });


  var hold_html = $('.collapse').html();
  //  console.log(hold_html);
  hold_html = '<span class="collapse_toggle">+-</span>\n<div class="collapse_region">' + hold_html
  hold_html += '\n<div>'
  $('.collapse').html(hold_html);

  $('.collapse_region').toggle();
  $('.collapse_toggle').click( function() { $('.collapse_region').toggle(); });

});


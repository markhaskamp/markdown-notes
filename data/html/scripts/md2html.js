$(document).ready( function() {
  $('div#toc').headerlinks({
                 minlen: 0
                ,headers: {use: true, depth: 4} 
              });


  $('.collapse').each( function(ndx, ele) {
    var hold_html = $(ele).html();
    hold_html = '<span class="collapse_toggle">+-</span>\n<div class="collapse_region">' + hold_html;
    hold_html += '\n<div>';
    $(ele).html(hold_html);

  });
  $('.collapse_toggle').click( function() { $(this).next().toggle(); });

});


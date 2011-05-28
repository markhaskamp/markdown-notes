$(document).ready( function() {
  $('div#toc').headerlinks({
                 minlen: 0
                ,headers: {use: true, depth: 4} 
              });


  $('.collapse').each( function(ndx, ele) {
    var title = $(ele).attr('title');
    if (title === undefined) {
      title = ''
    }
    var hold_html = $(ele).html();
    hold_html = '<span class="collapse_toggle">+/- ' + title + '</span>\n<div class="collapse_region">' + hold_html;
    hold_html += '\n<div>';
    $(ele).html(hold_html);

  });
  $('.collapse_region').toggle();
  $('.collapse_toggle').click( function() { $(this).next().toggle(); });

$('.collapse_toggle').hover( function() { $(this).css('cursor', 'pointer'); },
                             function() { $(this).css('cursor', 'default'); });
  
});


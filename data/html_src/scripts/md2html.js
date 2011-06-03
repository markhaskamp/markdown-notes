
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
    hold_html = '<span class="collapse_toggle"><img class="toggle_ind" src="../html_src/img/right.gif" /> ' + title + '</span>\n<div class="collapse_region">' + hold_html;
    hold_html += '\n<div>';
    $(ele).html(hold_html);

  });
  hide_collapse_regions();
  $('.collapse_toggle').click( function() { 
          var cur_ele = $(this);
          toggle_collapse_region(cur_ele);
  });



$('.collapse_toggle').hover( function() { $(this).css('cursor', 'pointer'); },
                             function() { $(this).css('cursor', 'default'); });
  
});

function hide_collapse_regions() {
  $('.collapse_region').each( function() {
    ele = $(this);
    if ($(ele).parent().attr("collapse_state") !== "open") {
      $(ele).toggle();
    }
  });
}

function toggle_collapse_region(ele) {
  ele.next().toggle();

  var cur_img_ele = $(ele).children()[0];
  next_img_src = get_next_image_src(cur_img_ele)
  $(cur_img_ele).attr("src", next_img_src);
}

function get_next_image_src(cur_img_ele) {
  if ($(cur_img_ele).attr("src") === "../html_src/img/right.gif") {
    return ("../html_src/img/down.gif");
  }

  return ("../html_src/img/right.gif");
}

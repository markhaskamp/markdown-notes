
var img_src_switch = 2;
var img_src = ["img/arrow_05.gif", 
               "img/arrow_05_down.gif"];

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
    hold_html = '<span class="collapse_toggle"><img class="toggle_ind" src="img/arrow_05.gif" /> ' + title + '</span>\n<div class="collapse_region">' + hold_html;
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
  $('.collapse_region').toggle();
}

function toggle_collapse_region(ele) {
  ele.next().toggle();

  var cur_img = $(ele).children()[0];
  next_img_src = get_next_image_src()
  $(cur_img).attr("src", next_img_src);
}

function get_next_image_src() {
  img_src_switch += 1;
  return (img_src[img_src_switch%2]);
}

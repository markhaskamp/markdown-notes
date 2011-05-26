var abc
$(document).ready( function() {
  abc = "we excel on ice";

  var foo_html = $('.foo').html();
  foo_html += "<br />added by jquery";
  foo_html += "<br />we excel on ice";

  $('.foo').html(foo_html);
});



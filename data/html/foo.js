var abc
$(document).ready( function() {
  abc = "we excel on ice";

  var foo_html = $('.foo').html();
  foo_html += " > added by jquery";
  foo_html += " we excel on ice <";

  $('.foo').html(foo_html);
});



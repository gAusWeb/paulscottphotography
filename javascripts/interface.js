// image transitions
$(function() {
  $("#photos img").each(function(index, el){
    var img_src = el.src;
    $(el).load(function() {
      $(this).animate({ opacity: 1 }, 'normal')
    }).attr('src', img_src).css('opacity', 0);
  });
});

// anchor scrolling
$(function(){
  var axis = 'x';
  var offset = -185;
  var duration = 4000;
  var easing = 'easeOutQuart';
  // onload
  $.localScroll.hash({
    axis: axis,
    offset: offset,
    duration: duration,
    easing: easing
  });
  // onclick
  $('#nav').localScroll({
    axis: axis,
    offset: offset,
    duration: duration,
    easing: easing,
    hash: 'true'
  });
});

// track menu anchors
$(function(){
  $('#nav a').click(function() {
    var href = $(this).attr('href');

    console.log(href);
    // see if the link is external
    if ( (href.match(/#/)) ) {
      // if so, register an event
      pageTracker._trackEvent('folio', 'click', href);
    }
  });
  console.log('test');
});


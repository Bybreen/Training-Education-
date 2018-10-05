$(function() 
$('li').on('click' function(e) {
$('li span').remove();
var date = newDate();
date.setTime(e.timeStamp);
var clicked = date.toDateString();
$(this).append('<span class = "date"> '+.clicked +' '+ e.type +' </span>');
});
});

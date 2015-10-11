$(document).ready(function(){
	$("h1").fadeOut(2000);
	$("img").animate(
		{opacity:0.50,width:"30%"}, 4000);
	$("p").hide(10000);
	$("p").fadeIn(4000);
	$("h2").click(function(){
		alert("I've been clicked");
	})
})

// Cheatsheet
// Notes: class = ".", id = "#"

// $(document).ready(function() {
// 	$("name of tag").hide (time);
// 	$("name of tag").fadeIn (time);
// 	$("name of tag").fadeOut (time);
// 	$("name of tag").animate(
// 		{opacity:0.25, wdith:"50%"}, time));
// 	$("name of tag").click(function() {
// 		alert("text");
// 	$("name of tag").slideDown (time);
// 	$("name of tag").slideUp (time);

// 	})
// })
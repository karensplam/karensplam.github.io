$(document).ready(function(){

	
	
	// 2021 - temp fix
	
	
    $( window ).resize(function() {
	if ($(window).width() < 669) {
		$("nav").addClass('mobile-only');
	} else {
		$("nav").removeClass('mobile-only');
	}
    });


	// Global -  mobile button:
	$(".burger-button").click(function(e){
  	  e.preventDefault();
  	  $("nav.mobile-only ul").fadeIn('300');
    	  $(".burger-button").hide();
  	});

	$(".mobile-close-btn").click(function(e){
	  	e.preventDefault();
	  	$("nav.mobile-only ul").fadeOut('300');
	  	$(".burger-button").show();
	  });

	$("nav.mobile-only ul li").click(function(){
	 $("nav.mobile-only ul").fadeOut('300');
	 $(".burger-button").show();
	  });


	
	$('a[href="#video"]').click(function(e){
	  	e.preventDefault();
		$('html, body').animate({
		     scrollTop: $('#video').offset().top
		}, 'slow');
	 });



// Global - back to top button	
	$("a img.static").hide();

	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('a img.static').fadeIn();
			} else {
				$('a img.static').fadeOut();
			}
		});
	
	$('a img.static').on("click", function(e){
		e.preventDefault();
		$("img.static").attr ('src', 'images/back-to-top-animate.gif');
       	$("img.static").addClass("backToTop");
		
		setTimeout(function(){ 
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false; },800); 
		
		setTimeout(function(){ 
		$('.backToTop').removeClass('backToTop');
		$("img.static").attr ('src', 'images/back-to-top-static.png');},2000); 
		});      
	});

	
	// Home - Rotating Banner
	function slideSwitch() {
		$('#banners-holder li.active').next('li').addClass('next-active');
		setTimeout(function(){ $('.next-active').addClass('active');},2000);
		setTimeout(function(){ $('.active').addClass('last-active')},4000);
		setTimeout(function(){ $('.active').removeClass('next-active')},6000);
		setTimeout(function(){ $('.last-active').removeClass('active')},8000);
		setTimeout(function(){ $('.last-active').removeClass('last-active')},10000);
			
		if($('#banner4').hasClass('last-active')){
			$('#banner1').addClass('next-active');}			
	}

    setInterval( slideSwitch, 6000 );

    // Home - Video

     $('img.video-poster').on("click", function(e){
        e.preventDefault();
        $("#playing-video").attr("src","http://www.youtube.com/v/AmWZamQelxE?list=PLv2BgzG2DVGlkbkkd-NEnGeb6OdoAzIcO&autoplay=1" );
        $(this).hide();
       });


	$('header').on("scroll", function(e) {
	    var stickyNavTop = $('header').offset().top;
	    var scrollTop = $(window).scrollTop();

	  if (scrollTop > stickyNavTop) {
	    $('header').addClass("stick-top");
	  } else {
	    $('header').removeClass("stick-top");
	  }
	  
	});

	
	
	$(".read-more").click(function(e){
  	e.preventDefault();
  	$(this).next('div').slideDown();
  	$(".read-more").hide();
  });



	//cat-profile page
	$("a#show-all-profile").on("click", function(e){
        e.preventDefault();
        $(".active").removeClass("active");
		$(".cat-profile-single-wrapper").addClass("active");
		$("#hide-all-profile").fadeIn();
		$(this).hide();
	});
	
	$("a#hide-all-profile").on("click", function(e){
        e.preventDefault();
        $(".active").removeClass("active");
		$(".cat-profile-single-wrapper").removeClass("active");
		$("#show-all-profile").fadeIn();
		$(this).hide();
	});
	
	
	
	$(".cat-profile-pic-container div.profile-pic-overlay a").on("click", function(e){
        e.preventDefault();
		var mainWrap = $(this).parent().parent().parent();
		$(".active").removeClass("active");
		mainWrap.addClass("active");
		mainWrap.parent().prepend(mainWrap);
		if(	$(".cat-profile-single-wrapper").hasClass("active")){
			$("#hide-all-profile").show();
			$("a#show-all-profile").hide();
			}

	});
	
	

	$("#sort-all-profile").on("click", function(e){
        e.preventDefault();
		$(".active").removeClass("active");
		var unsortedArrayofIDs = $.map($(".cat-profile-single-wrapper"), function(n, i){
		  return n.id;
		});
		console.log("Unsorted..." + unsortedArrayofIDs);
		
		var sortedArrayIDlist = jQuery.makeArray(unsortedArrayofIDs).sort();
		console.log("Sorted A-Z! " + sortedArrayIDlist);
		
		if ($(this).hasClass("reverseOrderActive")){
			$(this).text("Sort A > Z");
				sortedArrayIDlist.forEach(function(entry) {
        console.log(entry);
		var thisID = '#' + entry;
		var thisClass = '.' + $(thisID).attr("class");
		var thisIDandClass = thisID + thisClass;
		$(thisIDandClass).addClass("active");
		$(thisIDandClass).parent().prepend($(thisIDandClass));
		$("#hide-all-profile").show();
		$("#show-all-profile").hide();
		});
		$(this).removeClass("reverseOrderActive");
			} else {
			var reversedArrayIDlist = sortedArrayIDlist.reverse();
			console.log("Sorted Z-A! " + reversedArrayIDlist);
			reversedArrayIDlist.forEach(function(entry) {
	        console.log(entry);
			var thisID = '#' + entry;
			var thisClass = '.' + $(thisID).attr("class");
			var thisIDandClass = thisID + thisClass;
			$(thisIDandClass).addClass("active");
			$(thisIDandClass).parent().prepend($(thisIDandClass));
				});
			$(this).addClass("reverseOrderActive");
			$(this).text("Sort Z > A");
			$("#hide-all-profile").show();
			$("#show-all-profile").hide();
				}

	});
	

});

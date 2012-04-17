jQuery(function() {

  // Init Backstretch
  var images = [
       "assets/img/mainback.jpg"
     , "assets/img/TPbackground.jpg"
     , "assets/img/Girldrip.jpg"
   ];

   // A little script for preloading all of the images
   // It"s not necessary, but generally a good idea
   $(images).each(function(){
     $("<img/>")[0].src = this;
   });

   // The index variable will keep track of which image is currently showing
   var index = 0;

   // Call backstretch for the first time,
   // In this case, I"m settings speed of 500ms for a fadeIn effect between images.
   $.backstretch(images[index], {speed: 1000});

   // Click events
   $("#worktop").click(function(e) {
     e.preventDefault();
     $.backstretch('assets/img/mainback.jpg');
     $(".content").removeClass('active');
   });
    $("#workbottom").click(function(e) {
      e.preventDefault();
      $.backstretch('assets/img/movinglips.gif');
      $(".content").removeClass('active');
      $(".content#work").addClass('active');
      $('.thumb_arrows').animate({
        top: 450
      });
      $('.thumb_container').animate({
        top: 450
      });
    });
   $("#words").click(function(e) {
    e.preventDefault();
    $.backstretch('assets/img/TPbackground.jpg');
    $(".content").removeClass('active');
    $(".content#words").addClass('active');
  });
  $("#contacttop").click(function(e) {
    e.preventDefault();
    $.backstretch('assets/img/Girldrip.jpg');
    $(".content").removeClass('active');
    $(".content#contact").addClass('active');
  });
  $("#linkstop").click(function(e) {
    e.preventDefault();
    $.backstretch('assets/img/memouthdrips.jpg');
    $(".content").removeClass('active');
    $(".content#links").addClass('active');
  });

  // Fancybox
  $("a.group").fancybox({
  		'transitionIn'	:	'elastic',
  		'transitionOut'	:	'elastic',
  		'speedIn'		:	600, 
  		'speedOut'		:	200, 
  		'overlayShow'	:	true
  	});
  
  // $.getJSON('https://api.instagram.com/v1/media/popular?client_id=8a76b9d707ed41ae85ea2677397fd496&callback=?', function(data){
  //     $.each(data.data, function(index, photo) {
  //       $li = $("<li><a href='"+photo.images.standard_resolution.url+"' class='group' rel='group'><img src='"+photo.images.standard_resolution.url+"'></a></li>").appendTo('ul.thumbs');
  //     });
  //     var totalThumbs = $('ul.thumbs li').length;
  //     $('ul.thumbs').css('width', (totalThumbs + 1) * 100);
  //     var $pane = $(".thumb_container");
  //     $pane.jScrollPane(
  //       {
  //        showArrows: false,
  //        animateScroll: true
  //       }
  //     );
  //     $('.jspPane').css('width', totalThumbs);
  //     var api = $pane.data('jsp');
  //     $(document).on('click', '.thumb_arrows', function(e){
  //       console.log(e.pageX);
  //       if(e.pageX < ($(window).width() / 2)){
  //         api.scrollByX(-1000);
  //       } else {
  //         api.scrollByX(1000);
  //       }
  //     });
  //   });
  
  // Layout and Positioning
  $(window).resize(function(){
    $('.nav').css({
      // top: ($(window).height() - $('.content').outerHeight()) / 2,
      left: ($(window).width() - $('.nav').outerWidth()) / 2
    });
  });
  $(window).resize();
   var totalThumbs = $('ul.thumbs li').length;
      $('ul.thumbs').css('width', (totalThumbs + 1) * 100);
        var $pane = $(".thumb_container");
        $pane.jScrollPane(
          {
           showArrows: false,
           animateScroll: true
          }
        );
        $('.jspPane').css('width', totalThumbs);
        var api = $pane.data('jsp');
        $(document).on('click', '.thumb_arrows', function(e){
          console.log(e.pageX);
          if(e.pageX < ($(window).width() / 2)){
            api.scrollByX(-1000);
          } else {
            api.scrollByX(1000);
          }
        });
});
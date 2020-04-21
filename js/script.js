$(document).ready(function(){  
  $('p.readmore a').on('click',function(event){
    event.preventDefault();
  }); 

  //Refer Link from Privilage to Concierge and Active
  var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;
    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
  };
  // var section = getUrlParameter('ref');
  // if(section === 'banking') {
  //   var offset = -100; //Offset of 20px
  //   $('.item').addClass('drop');
  //   $('.item.banking').removeClass('drop').addClass('active');
  //   $('html, body').animate({
  //       scrollTop: $('#'+section).offset().top + offset
  //   }, 2000);
  // }

  //Menu sidebar Click Handle
  $('.sidebar li a').on('click', function(){
    var offset = -100; //Offset of 20px
    var section = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(section).offset().top + offset
    }, 2000);

    if($(this).hasClass('ex-link')){
      var href = $(this).attr('href');
      window.location.href = href;
    }
    var thisClass = $(this).attr('class');
    if($(this).hasClass('active')){
      $(this).removeClass('active');
      $('.main-list .item').removeClass('active').removeClass('drop');
      return;
    } else {
      $('.sidebar li a').removeClass('active');
      $(this).addClass('active');
      $('.main-list .item').removeClass('active').addClass('drop');
      $('.main-list .item').has('a.'+thisClass).addClass('active').removeClass('drop');
      return;
    }
  });

  //Content item Click Handle
  $('.main-list .item').on('click', function(){
    var thisClass = $(this).find('a').attr('class');
    if($(this).hasClass('active')){
      $('.main-list .item').removeClass('drop').removeClass('active');
      $('.sidebar li a').removeClass('active');
    } else {
      $('.main-list .item').addClass('drop').removeClass('active');
      $(this).addClass('active').removeClass('drop');
      $('.sidebar li a').removeClass('active');
      $('.sidebar li a.'+thisClass).addClass('active');
    }
  });


  window.sr = ScrollReveal({ 
    duration: 750,
    scale: 1,
    origin: 'top',
    easing: 'linear'
  });
  sr.reveal('.fade-in', 50);

});
$(document).ready(function(){
  //navbar滑動效果
  $('.scroll_top').click(function(e){
    e.preventDefault()
    var target = $(this).attr('href')
    var targetPos = $(target).offset().top
    $('html').animate({scrollTop: targetPos},500)
  })
  $('.menu-text').on('click',function(e){
    e.preventDefault()
    $('body').toggleClass('showMenu')
  })
  var showSkill = false
  $(window).scroll(function(){
    var scrollTop = $(window).scrollTop()
    var windowHeight = $(window).height()
    var skillTop = $('#skills').position().top
    if( skillTop <= ( scrollTop + windowHeight / 8 ) && !showSkill ){
      showSkill = true
      $('.progress-bar').each(function(){
        let thisValue = $(this).data('progress')
        $(this).css('width',thisValue + '%')
      })
    }
    var scrollPos = $(window).scrollTop()
    $('.animated_fadeIn').each(function(){
      var thisPos = $(this).offset().top
      if(thisPos <= (windowHeight/1.5 + scrollPos)){
        $(this).addClass('fadeIn')
      }
    })
  })

})





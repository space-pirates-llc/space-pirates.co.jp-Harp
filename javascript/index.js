$(function(){
  $("ul > li > a").on("click", function(){
    scrollTo($("." + $(this)[0].className.split("-")[0] + "-container"));
  });
  
  $(".btn-select-ship").on("click", function(){
    scrollTo($(".submit-card"));
  });
  
  $(".minify-button").on("click", function(){
    $(this).toggleClass("open");
    $(".submit-card").toggleClass("open");
  });
  
  function scrollTo(locationElem){
    $("html,body").animate({scrollTop:locationElem.offset().top - 100});
  }
})
$(function(){
  $("ul > li > a").on("click", function(){
    scrollTo($("." + $(this)[0].className.split("-")[0] + "-container"));
  });
  
  $(".btn-select-ship").on("click", function(){
    scrollTo($(".submit-card"));
    $(".submit-card, .minify-button").addClass("open");
    $(".shipname").eq(0).find("input").attr("value", $(this).parent().find(".card-header > span").text());
  });
  
  $(".minify-button").on("click", function(){
    $(this).toggleClass("open");
    $(".submit-card").toggleClass("open");
  });
  
  function scrollTo(locationElem){
    $("html,body").animate({scrollTop:locationElem.offset().top - 100});
  }
})
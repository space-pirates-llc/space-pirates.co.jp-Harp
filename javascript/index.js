$(function(){
  
//  DOM Functions
  
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
  };
  
//  Form Functions
  
  $('#recruit').submit(function(){
    alert("ran");
    return checkRecruitItems();
  });
  
  function checkRecruitItems(){
    for(var i = 0; i < $("#recruit > .form-set > input").length; i ++){
      if($("#recruit > .form-set > input").eq(i).val().length = 0){
        return false;
      }
    }
  }
  
})
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

  $(".btn-submit-recruit").on("click", function(){
    universalItemsJudge( $("#recruit").find("[type='text'], [type='email']") );
  });

  $(".btn-submit-contact").on("click", function(){
    universalItemsJudge( $("#contact").find("[type='text'], [type='email']") );
  });

  function universalItemsJudge( itemsJqElmArray ){
    let errorStatus = {
      msg: null,
      targetJqElm: null
    };
    itemsJqElmArray.each(function (){
      errorStatus.targetJqElm = $(this);
      if( $(this).val().trim().length < 1 || $(this).val().trim().match(/^( |　|[0-9])$/) != null ){
        errorStatus.msg = "item is empty.";
        return false;
      }
      if( $(this).attr("type") == "email" && $(this).val().trim().match(/^[!#-9A-~]+@+[a-z0-9]+.+[^.]$/i) === null ){
        errorStatus.msg = "item is not email.";
        return false;
      }
    });
    return errorStatus;
  }

})
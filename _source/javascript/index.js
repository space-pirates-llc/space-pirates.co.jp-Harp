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
    if(universalItemsJudge( $("#recruit").find("[type='text'], [type='email']")).msg === null){
      $("#recruit").submit();
    }else{
      $(".form-set > input, .form-set > textarea").removeClass("highlight");
      var problemElem = universalItemsJudge( $("#recruit").find("[type='text'], [type='email']"));
      $(".error-message").remove();
      
      problemElem.targetJqElm.addClass("highlight");
      problemElem.targetJqElm.parent().find("span").after('<span class="error-message">' + problemElem.msg + '</span>')
    }
  });

  $(".btn-submit-contact").on("click", function(){
    if(universalItemsJudge( $("#contact").find("[type='text'], [type='email']")).msg === null){
      $("#contact").submit();
    }else{
      $(".form-set > input, .form-set > textarea").removeClass("highlight");
      var problemElem = universalItemsJudge( $("#contact").find("[type='text'], [type='email']"));
      $(".error-message").remove();
      
      problemElem.targetJqElm.addClass("highlight");
      problemElem.targetJqElm.parent().find("span").after('<span class="error-message">' + problemElem.msg + '</span>')
    }
  });

  function universalItemsJudge( itemsJqElmArray ){
    var errorStatus = {
      msg: null,
      targetJqElm: null
    };
    itemsJqElmArray.each(function (){
      errorStatus.targetJqElm = $(this);
      if( $(this).val().trim().length < 1 || $(this).val().trim().match(/^( |　|[0-9])$/) != null ){
        errorStatus.msg = "入力してください。";
        return false;
      }
      if( $(this).attr("type") == "email" && $(this).val().trim().match(/^[!#-9A-~]+@+[a-z0-9]+.+[^.]$/i) === null ){
        errorStatus.msg = "不正なメールアドレスです。";
        return false;
      }
    });
    return errorStatus;
  }

})
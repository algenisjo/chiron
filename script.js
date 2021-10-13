  $(document).ready(function(){
    $("button").hover(function(){
      $("div.textdropbanner").animate({
       top: '40px',
        // height: '50%',
        // width: '100%',  
        opacity: 1.0
      }, "slow");
    });
  });
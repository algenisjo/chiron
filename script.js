  // hover animations for drop down text --------------------------------------------
  
  $(document).ready(function(){
    $("div.drop1").hover(function(){
      $("div.fall1").animate({
       top: '40px',
        // height: '50%',
        // width: '100%',  
        opacity: 1.0
      }, "slow");
    });
  });

  $(document).ready(function(){
    $("div.drop2").hover(function(){
      $("div.fall2").animate({
       top: '20px',
        // height: '50%',
        // width: '100%',  
        opacity: 1.0
      }, "slow");
    });
  });

  $(document).ready(function(){
    $("div.drop3").hover(function(){
      $("div.fall3").animate({
       top: '20px',
        // height: '50%',
        // width: '100%',  
        opacity: 1.0
      }, "slow");
    });
  });

  $(document).ready(function(){
    $("div.drop4").hover(function(){
      $("div.fall4").animate({
       top: '40px',
        // height: '50%',
        // width: '100%',  
        opacity: 1.0
      }, "slow");
    });
  });

  $(document).ready(function(){
    $("div.drop5").hover(function(){
      $("div.fall5").animate({
       top: '50px',
        // height: '50%',
        // width: '100%',  
        opacity: 1.0
      }, "slow");
    });
  });

  $(document).ready(function(){
    $("div.drop6").hover(function(){
      $("div.fall6").animate({
       top: '50px',
        // height: '50%',
        // width: '100%',  
        opacity: 1.0
      }, "slow");
    });
  });

// end of hover animations for drop down text -----------------------------------------------------------------------

// HOVER ANIMATION FOR SLIDING IMAGES --------------------------- -------------------------- --------------------------

// $(document).ready(function(){
//   $("div.animateimg").hover(function(){
//     $("div.img1").animate({
//      right: '10%',
//      top: '10%', 
//       opacity: 1.0
//     }, "slow");
//   });
// });

$(document).ready(function(){
  $("div.slide1").hover(function(){
    $("div.slide1").animate({
      right: '5%', 
      opacity: 1.0
    }, "slow");
  });
});

$(document).ready(function(){
  $("div.slide2").hover(function(){
    $("div.slide2").animate({
      right: '5%',
      opacity: 1.0
    }, "slow");
  });
});

$(document).ready(function(){
  $("div.slide3").hover(function(){
    $("div.slide3").animate({
      left: '5%', 
      opacity: 1.0
    }, "slow");
  });
});

$(document).ready(function(){
  $("div.slide4").hover(function(){
    $("div.slide4").animate({
      left: '5%', 
      opacity: 1.0
    }, "slow");
  });
});
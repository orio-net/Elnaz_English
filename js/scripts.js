


//Hero Mouse Move Effect ---------------------------------------------------

var mover = document.getElementById('mover');
var bg = document.getElementById('heroBG');
var background = document.getElementById('heroBG');

document.addEventListener('mousemove', function (e) {

  //Get Page Size
  // var pageSize = background.getBoundingClientRect();
  var pageHeight = background.offsetHeight;
  var pageWidth = background.offsetWidth;


  //Get Mouse Position
  var x = e.clientX;
  var y = e.clientY;

  //Get FG Mover Size
  var moverSize = mover.getBoundingClientRect();
  var fghei = moverSize.height;
  var fgwid = moverSize.width;

  //Get BG Mover Size
  var bgmoverSize = mover.getBoundingClientRect();
  var bghei = bgmoverSize.height;
  var bgwid = bgmoverSize.width;


  //Adjust Movement Extent
  var hdif = (y * 2) - pageHeight;
  var wdif = (x * 2) - pageWidth;

  //Get FG Mover Position
  var fgtopp = pageHeight - (fghei);
  var fgleftt = pageWidth - (fgwid);

  //Get BG Mover Position
  var bgtopp = (pageHeight / 2) - (bghei / 2);
  var bgleftt = (pageWidth / 2) - (bgwid / 2);




  mover.style.left = fgleftt - (wdif / 80) + "px";
  mover.style.top = fgtopp - (hdif / 80) + "px";

  bg.style.backgroundPositionX = bgleftt - (wdif / 150) - 10 + "px";
  bg.style.backgroundPositionY = bgtopp - (hdif / 150) - 10 + "px";


  var footer1 = document.getElementById('footerPic1');
  var footer2 = document.getElementById('footerPic2');
  var footer3 = document.getElementById('footerPic3');
  var footer4 = document.getElementById('footerPic4');
  var footer5 = document.getElementById('footerPic5');
  var footer6 = document.getElementById('footerPic6');
  var footer7 = document.getElementById('footerPic7');
  var footer8 = document.getElementById('footerPic8');
  var footer9 = document.getElementById('footerPic9');
  var footer10 = document.getElementById('footerPic10');
  var footer11 = document.getElementById('footerPic11');
  var footer12 = document.getElementById('footerPic12');





  footer1.style.left = bgleftt - (wdif / 150) - 10 + "px";
  footer2.style.left = bgleftt - (wdif / 200) - 10 + "px";
  footer3.style.left = bgleftt - (wdif / 275) - 10 + "px";
  footer4.style.left = bgleftt - (wdif / 375) - 10 + "px";
  footer5.style.left = bgleftt - (wdif / 475) - 10 + "px";
  footer6.style.left = bgleftt - (wdif / 650) - 10 + "px";

  footer7.style.left = bgleftt - (wdif / 250) - 10 + "px";
  footer8.style.left = bgleftt - (wdif / 275) - 10 + "px";
  footer9.style.left = bgleftt - (wdif / 275) - 10 + "px";
  footer10.style.left = bgleftt - (wdif / 375) - 10 + "px";
  footer11.style.left = bgleftt - (wdif / 475) - 10 + "px";
  footer12.style.left = bgleftt - (wdif / 650) - 10 + "px";


});

// LocoScroll ------------------------------------------


// Navbar Toggle -----------------------------------------



const nav_icon = document.querySelector ('.navIcon');
const nav_bar = document.querySelector ('.navBar');

nav_icon.addEventListener ('click', function () {
  nav_bar.classList.toggle('navBar-active')
  nav_icon.classList.toggle('navIcon-active')
});



// Scroll Trigger Effects ---------------------------------------------


gsap.registerPlugin(ScrollTrigger);



gsap.to('.navIcon ', {
  top: 15,
  duration: 0.5,
  ease: "back.out(1.7)",
  scrollTrigger: {
    trigger: 'main',
    start: 'top 0%',
    toggleActions: 'play play play reverse',

    // scrub: 0.4,
    // markers:true
  }
})


gsap.to('.navBar ', {
  right: 20,
  duration: 0.5,
  ease: "back.out(1.7)",
  scrollTrigger: {
    trigger: 'main',
    start: 'top 0%',
    toggleActions: 'play play play reverse',

    // scrub: 0.4,
    // markers:true
  }
})



gsap.to('#mover ', {
  // y:-400,
  opacity: 0,

  duration: 0.1,
  scrollTrigger: {
    trigger: '.body',
    start: 'top 20%',
    end: 'top 10%',
    toggleActions: 'play play reverse reverse',
    // toggleClass:'disabled'
    // markers:true
  }
})


gsap.to('.heroMainBottons ', {
  x: -4000,
  opacity: 0,

  duration: 0.1,
  scrollTrigger: {
    trigger: '.body',
    start: 'top 20%',
    end: 'top 10%',
    toggleActions: 'play play reverse reverse',
    toggleClass: 'disabled'
    // markers:true
  }
})



gsap.to('.heroMain ', {
  scale: 0.9,
  opacity:0.5,
  scrollTrigger: {
    trigger: '.heroMain',
    start: 'center 50%',
    end: 'center -30%',
    scrub: 0.4,
    // markers:true
  }
})


gsap.from('.prodRow ', {
  x: -150,
  opacity: 0,
  delay: 0.2,
  ease: 'power2.out',
  stagger: 0.5,
  duration: 1,
  scrollTrigger: {
    trigger: '.prodGrid',
    start: 'top 70%',
    end: 'bottom 0%',

    toggleClass: 'noBlur',

    // scrub: 0.4,
    // markers:true
  }
})



const boxes = gsap.utils.toArray('.prodRow');
boxes.forEach(box => {


  gsap.from(box, {
    duration: 0.5,
    delay: 0.2,
    stagger: 0.5,
    scrollTrigger: {
      trigger: box,
      start: 'top 90%',
      end: 'center 0%',
      // markers:true,
      // toggleActions: 'play reverse play reverse',
      toggleClass: 'noBlur'

    }
  })
});









gsap.from('.methodItem ', {
  y: 150,
  opacity: 0,
  delay: 0.1,
  stagger: 0.3,
  duration: 1,
  scrollTrigger: {
    trigger: '.methodItem',
    start: 'top 80%',
    end: 'bottom 0%',

    // scrub: 0.4,
    // markers:true
  }
})


// gsap.from('.featureItems  ', {
//   // opacity:0,
//   bottom: '50%',
//   scrollTrigger: {
//     trigger: '.featureBox',
//     // pin:true,
//     // pinSpacing:false,
//     scrub: 3,
//     start: 'top 100%',
//     end: 'bottom 0%',
//     // toggleActions: 'play reverse play reverse',

//     // markers:true
//   }
// })




//Feature Titles

gsap.from('#featureTitle1 ', {
  opacity: 0,
  // x:-200,
  duration: 0.2,
  scrollTrigger: {
    trigger: '#feature1',
    // pin:true,
    // pinSpacing:false,
    // scrub:1,
    start: 'center 100%',
    end: 'center 0%',
    toggleActions: 'play reverse play reverse',

    // markers:true
  }
})






gsap.from('#featureTitle2 ', {
  opacity: 0,
  // x:-200,
  duration: 0.2,
  scrollTrigger: {
    trigger: '#feature2',
    // pin:true,
    // pinSpacing:false,
    // scrub:1,
    start: 'center 100%',
    end: 'center 0%',
    toggleActions: 'play reverse play reverse',

    // markers:true
  }
})


gsap.from('#featureTitle3 ', {
  opacity: 0,
  // x:-200,
  duration: 0.2,
  scrollTrigger: {
    trigger: '#feature3',
    // pin:true,
    // pinSpacing:false,
    // scrub:1,
    start: 'center 100%',
    end: 'center 0%',
    toggleActions: 'play reverse play reverse',

    // markers:true
  }
})



//Feature Descriptions
gsap.from('#featureItem1 ', {
  opacity: 0,
  x: -100,
  duration: 0.3,
  scrollTrigger: {
    trigger: '#feature1',
    // pin:true,
    // pinSpacing:false,
    // scrub:1,
    start: 'center 100%',
    end: 'center 0%',
    toggleActions: 'play reverse play reverse',

    // markers:true
  }
})

gsap.from('#featureItem2 ', {
  opacity: 0,
  x: -100,
  duration: 0.3,
  scrollTrigger: {
    trigger: '#feature2',
    // pin:true,
    // pinSpacing:false,
    // scrub:1,
    start: 'center 100%',
    end: 'center 0%',
    toggleActions: 'play reverse play reverse',

    // markers:true
  }
})


gsap.from('#featureItem3 ', {
  opacity: 0,
  x: -100,
  duration: 0.3,
  scrollTrigger: {
    trigger: '#feature3',
    // pin:true,
    // pinSpacing:false,
    // scrub:1,
    start: 'center 100%',
    end: 'center 0%',
    toggleActions: 'play reverse play reverse',

    // markers:true
  }
})






gsap.from('#slidePic1 ', {
  opacity: 0,

  duration: 0.4,
  scrollTrigger: {
    trigger: '#feature1',
    // pin:true,
    // pinSpacing:false,
    // scrub:1,
    start: 'center 100%',
    end: 'center 0%',
    toggleActions: 'play reverse play reverse',

    // markers:true
  }
})


gsap.from('#slidePic2 ', {
  opacity: 0,

  duration: 0.4,
  scrollTrigger: {
    trigger: '#feature2',
    // pin:true,
    // pinSpacing:false,
    // scrub:1,
    start: 'center 100%',
    end: 'center 0%',
    toggleActions: 'play reverse play reverse',

    // markers:true
  }
})


gsap.from('#slidePic3 ', {
  opacity: 0,

  duration: 0.4,
  scrollTrigger: {
    trigger: '#feature3',
    // pin:true,
    // pinSpacing:false,
    // scrub:1,
    start: 'center 100%',
    end: 'center 0%',
    toggleActions: 'play reverse play reverse',

    // markers:true
  }
})



gsap.from('#slidePic1 ', {
  y: 100,
  duration: 0.4,
  scrollTrigger: {
    trigger: '#feature1',
    // pin:true,
    // pinSpacing:false,
    scrub: 0.5,
    start: 'center 100%',
    end: 'center 0%',
    toggleActions: 'play reverse play reverse',

    // markers:true
  }
})


gsap.from('#slidePic2 ', {
  y: 100,
  duration: 0.4,
  scrollTrigger: {
    trigger: '#feature2',
    // pin:true,
    // pinSpacing:false,
    scrub: 0.5,
    start: 'center 100%',
    end: 'center 0%',
    toggleActions: 'play reverse play reverse',

    // markers:true
  }
})


gsap.from('#slidePic3 ', {
  y: 100,
  duration: 0.4,
  scrollTrigger: {
    trigger: '#feature3',
    // pin:true,
    // pinSpacing:false,
    scrub: 0.5,
    start: 'center 100%',
    end: 'center 0%',
    toggleActions: 'play reverse play reverse',

    // markers:true
  }
})








gsap.from('.middleText ', {
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: '.middleText',
    // pin:true,
    // pinSpacing:false,
    // scrub:2,
    start: 'top 90%',
    end: 'top 0%',
    toggleActions: 'play reverse play reverse',

    // markers:true
  }
})



gsap.from('.aboutTitle ', {
  x: -90,
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: '.middleText',
    // pin:true,
    // pinSpacing:false,
    // scrub:1,
    start: 'top 80%',
    end: 'top 0%',
    // toggleActions: 'play reverse play reverse',

    // markers:true
  }
})


gsap.from('.aboutPhoto ', {
  x: 80,
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: '.middleText',
    // pin:true,
    // pinSpacing:false,
    // scrub:1,
    start: 'top 80%',
    end: 'top 0%',
    // toggleActions: 'play reverse play reverse',

    // markers:true
  }
})

gsap.from('.aboutDesc ', {
  x: -50,
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: '.middleText',
    // pin:true,
    // pinSpacing:false,
    // scrub:1,
    start: 'top 80%',
    end: 'top 0%',
    // toggleActions: 'play reverse play reverse',

    // markers:true
  }
})




gsap.from('.methods ', {


  opacity: 0,
  duration: 0.2,
  scrollTrigger: {
    trigger: '#feature1',
    // scrub:0.5,
    start: 'top 100%',
    end: 'top 45%',
    toggleActions: 'play reverse play reverse',

    // markers: true
  }
})


gsap.to('.methods ', {
  y: -250,
  // scale:1.3,
  scrollTrigger: {
    trigger: '#feature1',

    scrub: true,
    start: 'top 100%',
    end: 'top 0%',
    toggleActions: 'play reverse play reverse',

    // markers: true
  }
})



//footer Pics Ground

gsap.from('#footerPic1 ', {
  y: 1150,
  scrollTrigger: {
    trigger: '.footer',
    scrub: 4,
    start: 'center 150%',
    end: 'top 0%',
    toggleActions: 'play reverse play reverse',

    // markers: true
  }
})

gsap.from('#footerPic2 ', {
  y: 950,
  scrollTrigger: {
    trigger: '.footer',
    scrub: 4,
    start: 'center 150%',
    end: 'top 0%',
    toggleActions: 'play reverse play reverse',

    // markers: true
  }
})

gsap.from('#footerPic3 ', {
  y: 750,
  scrollTrigger: {
    trigger: '.footer',
    scrub: 4,
    start: 'center 150%',
    end: 'top 0%',
    toggleActions: 'play reverse play reverse',

    // markers: true
  }
})

gsap.from('#footerPic4 ', {
  y: 550,
  scrollTrigger: {
    trigger: '.footer',
    scrub: 4,
    start: 'center 150%',
    end: 'top 0%',
    toggleActions: 'play reverse play reverse',

    // markers: true
  }
})

gsap.from('#footerPic5 ', {
  y: 350,
  scrollTrigger: {
    trigger: '.footer',
    scrub: 4,
    start: 'center 150%',
    end: 'top 0%',
    toggleActions: 'play reverse play reverse',

    // markers: true
  }
})

gsap.from('#footerPic6 ', {
  y: 150,
  scrollTrigger: {
    trigger: '.footer',
    scrub: 4,
    start: 'center 150%',
    end: 'top 0%',
    toggleActions: 'play reverse play reverse',

    // markers: true
  }
})

//Footer Pics Sky




gsap.from('#footerPic7 ', {
  y: 1150,
  scrollTrigger: {
    trigger: '.footer',
    scrub: 6,
    ease: 'power4.out',
    start: 'center 150%',
    end: 'top 0%',
    toggleActions: 'play reverse play reverse',

    // markers: true
  }
})

gsap.from('#footerPic8 ', {
  y: 950,
  scrollTrigger: {
    trigger: '.footer',
    scrub: 6,
    ease: 'power4.out',
    start: 'center 150%',
    end: 'top 0%',
    toggleActions: 'play reverse play reverse',

    // markers: true
  }
})

gsap.from('#footerPic9 ', {
  y: 750,
  scrollTrigger: {
    trigger: '.footer',
    scrub: 6,
    ease: 'power4.out',
    start: 'center 150%',
    end: 'top 0%',
    toggleActions: 'play reverse play reverse',

    // markers: true
  }
})

gsap.from('#footerPic10 ', {
  y: 550,
  scrollTrigger: {
    trigger: '.footer',
    scrub: 6,
    ease: 'power4.out',
    start: 'center 150%',
    end: 'top 0%',
    toggleActions: 'play reverse play reverse',

    // markers: true
  }
})

gsap.from('#footerPic11 ', {
  y: 350,
  scrollTrigger: {
    trigger: '.footer',
    scrub: 6,
    ease: 'power4.out',
    start: 'center 150%',
    end: 'top 0%',
    toggleActions: 'play reverse play reverse',

    // markers: true
  }
})

gsap.from('#footerPic12 ', {
  y: 250,
  scrollTrigger: {
    trigger: '.footer',
    scrub: 6,
    ease: 'power4.out',
    start: 'center 150%',
    end: 'top 0%',
    toggleActions: 'play reverse play reverse',

    // markers: true
  }
})






gsap.from('.contactInfo ', {
  y: 400,
  stagger: true,
  scrollTrigger: {
    trigger: '.footer',
    start: 'center 101%',
    end: 'top 0%',
    scrub: 5,
    toggleActions: 'play reverse play reverse',

    // markers: true
  }
})








gsap.from('.footerBG ', {
  opacity: 0,
  scrollTrigger: {
    trigger: '.footer',
    // scrub: 2,
    start: 'top 90%',
    // end: 'top 0%',
    toggleActions: 'play reverse play reverse',

    // markers: true
  }
})


gsap.from('.dof-near ', {
  y: '100%',
  duration:0.1,
  scrollTrigger: {
    trigger: '.footer',
    // scrub: 2,
    start: 'center 90%',
    // end: 'top 0%',
    toggleActions: 'play reverse play reverse',

    // markers: true
  }
})



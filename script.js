

Shery.mouseFollower();

Shery.makeMagnet(".magnet"); 
Shery.textAnimate(".hpage1 span");
Shery.hoverWithMediaCircle(".hvr", {videos: ["./0.mp4","./1.mp4"] });

var tl = gsap.timeline();
tl.from(" .nav ,.nav img, .lnav a, i",{
    y: "-5vh",
    opacity: 0.3,
    duration: 1.2,
    
})

tl.from(".hpage1 h1, .imageText h1",{
    y: "20%",
    opacity: 0,
    duration: 1,
    stagger: 1,
});
tl.from(".imageText img",{
    x: "-20vh",
    opacity : 0,
    scale: .8,
});

tl.from(".hpage2 p",{
    x: -100,
    opacity: 0,
    duration: 2,
    ease: Power1,
    // duration: 1,
    scrollTrigger:{
        trigger: ".hpage1",
        start: "top 10%",
        end: "bottom 60%",
        scrub : 1
    }
});

tl.from(".ftopic h1",{
    x: -150,
    opacity: 0,
    
    scrollTrigger:{
        trigger: "#featured",
        start: "top 80%",
        end: "bottom 100%",
        scrub : 1
    }
});

gsap.to(".ltext, .rimages img",{
    y: "-300%",
    ease: Power1,
    scrollTrigger: {
        trigger:".fproject",
        pin: true,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        endTrigger: ".last"
    }    
});

var sections = document.querySelectorAll(".ltext");

// Shery.imageEffect(".rimages", {
//     style: 3,
    
//     config: { onMouse: { value: 1 } },
//     slideStyle: (setScroll) => {
//       sections.forEach(function (section, index) {
//         ScrollTrigger.create({
//           trigger: section,
//           start: "top top",
//           scrub: 1,
//           onUpdate: function (prog) {
//             setScroll(prog.progress + index);
//           },
//         });
//       });
//     },
//   });

tl.from("#develop h1, p",{
    x: -150,
    opacity: 0,
    // duration: 1,
    stagger: 1,
    scrollTrigger:{
        trigger: "#develop",
        // pin: true,
        
        start: "top 80%",
        end: "bottom 100%",
        scrub : 2,
    }
});

gsap.to(".imgslide",{
    x: "-260%",
    scrollTrigger:{
        trigger: "#slides",
        pin: true,
        start: "top 25%",
        scrub: 5,
        end: "bottom 0%",
        endTrigger: ".end"
    }
});
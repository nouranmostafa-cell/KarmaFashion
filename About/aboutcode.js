window.onload = ()=>{
    aboutAnim.restart();
}

const aboutAnim = gsap.timeline({paused: true ,repeat:-1,repeatDelay: 0.1,yoyo: true}); 
aboutAnim.to("#leaf", 1.2, { rotation:10, transformOrigin:"center bottom", ease: Power4.linear},0); /* https://greensock.com/forums/topic/7949-how-to-set-rotate-an-object-with-origin/ */  /*https://greensock.com/docs/v3/GSAP/gsap.fromTo()*/
aboutAnim.to("#leaf2", 1.2, { rotation:-15, transformOrigin:"center bottom", ease: Power4.linear},0); 
aboutAnim.to("#effect", 1, { opacity:0, transformOrigin:"center bottom", ease: Power4.linear},0); 
aboutAnim.to("#womanHand", 1.3, {rotation:-15, transformOrigin:"right bottom", ease: Power4.linear},0); 
aboutAnim.to("#womanFace", 1, {rotation:-10, transformOrigin:"center bottom", ease: Power4.linear},0); 
aboutAnim.to("#man2Face", 1, {rotation:15, transformOrigin:"center bottom", ease: Power4.linear},0); 
aboutAnim.to("#man1Face", 1, {rotation:15, transformOrigin:"center bottom", ease: Power4.linear},0); 

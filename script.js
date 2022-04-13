window.addEventListener('load',() =>{
  let tl= gsap.timeline();
  tl.from('.name',{duration:1.75, x: '-120%', stagger: 0.5, ease: 'sine'});
  tl.from('#image',{duration: 2, scale: 0 , ease: 'sine'},'<0.25');
  tl.fromTo('#header-right',{opacity: 0},{opacity:1, duration: 2},'<0.25')
  tl.from('#description', {
      duration: 2,
      yPercent: 100,
      ease: "power4",
      stagger: 0.1
    },'<0.25');
})


  



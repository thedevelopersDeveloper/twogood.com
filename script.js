function locomotiveAnimation (){
	gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locomotiveAnimation();
gsap.to("#logo-sec svg",{
	transform:"translateY(-130%)",
	scrollTrigger:{
		trigger:"#page1",
		scroller:"#main",
		start:"top 0",
		end:"top -35%",
		scrub:true
	}
})
gsap.to("#links li",{
	transform:"translateY(-150%)",
	opacity:0,
	scrollTrigger:{
		trigger:"#page1",
		scroller:"#main",
		start:"top 0",
		end:"top -35%",
		scrub:true
	}
})
function playbtnanim() {
	let videoCont = document.getElementById("video-cont");
let play = document.getElementById("play");
videoCont.addEventListener("mousemove",(dets)=>{
	gsap.to("#play",{
		top:dets.y,
		left:dets.x
	})

})
videoCont.addEventListener("mouseenter",(dets)=>{
	gsap.to("#play",{
		opacity:1,
		scale:1.2
	})
	play.style.display = "flex";
})
videoCont.addEventListener("mouseleave",(dets)=>{
	gsap.to("#play",{
		scale:0,
		opacity:0
	})
	
})
}
function loadinganim(){
	gsap.from("#nav",{
		y:-1000,
		opacity:0,
		delay:0.1,
		duration:0.5
	})
	gsap.from("#page1 h1",{
	y:100,
	opacity:0,
	duration:0.2,
	delay:1,
	stagger:0.4
})
	gsap.from("#page1 #video-cont",{
	y:100,
	opacity:0,
	duration:0.2,
	delay:1.5,
})
}
loadinganim();
playbtnanim();

let cursor = document.querySelector(".hover-effect");
document.addEventListener("mousemove",(dets)=>{
	gsap.to(".hover-effect",{
		top:dets.y,
		left:dets.x,
	})
})
document.querySelector("#child1").addEventListener("mouseenter",(dets)=>{
	gsap.to(".hover-effect",{
		transform:"translate(-50%,-50%) scale(1)"
	})
})
document.querySelector("#child1").addEventListener("mouseleave",(dets)=>{
	gsap.to(".hover-effect",{
		transform:"translate(-50%,-50%) scale(0)"
	})
})


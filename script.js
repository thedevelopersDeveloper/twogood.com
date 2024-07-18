const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


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
	gsap.from("#page1 h1",{
	y:100,
	opacity:0,
	duration:0.2,
	delay:0.5,
	stagger:0.4
})
	gsap.from("#page1 #video-cont",{
	y:100,
	opacity:0,
	duration:0.2,
	delay:1,
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

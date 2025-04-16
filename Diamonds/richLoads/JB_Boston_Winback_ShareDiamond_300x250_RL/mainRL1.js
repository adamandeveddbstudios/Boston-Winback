var tl;
var tl2;
var container = myFT.$("#main_container");
var default_exit = myFT.$("#default_exit");

// var myVid=myFT.$("#video1");
var clickTag1_url="";
// var vid_time_triggered=false;

//
default_exit.on('click',function(){
  myFT.clickTag(1,clickTag1_url)
})
// wait for instantads to load before initializing creative animation
myFT.on('instantads',function(){

  clickTag1_url=myFT.instantAds.clickTag1_url;

})

init()
function animate() {
  tl.set(["#main_content"], { autoAlpha: 1, force3D: true });

  tl.set(['#h1, #h2'], {y:"20px"})

  tl.set("#Layer_2", { transformOrigin: "50% 50%", force3D: false});

  tl.addLabel('frame1', 0)
  .to('#h1', 0.5, { autoAlpha: 1, y: "0", ease: Power1.easeOut}, 'frame1+=0.5')
  
  .staggerTo('.cls-6',0, {fill: '#00e1ff', ease: "bounce.in" }, 0.01, 'frame1')
  .staggerTo([".cls-1, .cls-2"],0, {fill: '#00a', ease: "bounce.in" }, 0.009, '<')
  
  .to('#Layer_2', 3, {scale: 0.96, x: 72, y: -94, rotation: 0.1, force3D: false, ease: "power1.in"}, 'frame1+=2.5')


  .addLabel('frame2', 'frame1+=5')
  .to('#h1', 0.5, { autoAlpha: 0, y: "20px", ease: Power1.easeOut }, "frame2")
  .to('#h2', 0.5, { autoAlpha: 1, y: "0", ease: Power1.easeOut }, "frame2+=0.5")
  .to('#h3', 0.5, { autoAlpha: 1, ease: Power1.easeOut }, "frame2+=2")

}

function setRollover() {
  document.getElementById('default_exit').addEventListener('mouseover', defaultOver, false);
  document.getElementById('default_exit').addEventListener('mouseout', defaultOut, false);
}

function defaultOver() {
  TweenMax.to('#cta', 0.15, { scale: 1.1, ease: Power1.easeInOut })
}

function defaultOut() {
  TweenMax.to('#cta', 0.15, { scale: 1, ease: Power1.easeInOut })
}

function init() {

  tl = new TimelineMax();

  animate();
  setRollover();
		
}

const d = new Date();
let year = d.getFullYear();
document.getElementById("year").innerHTML = year;
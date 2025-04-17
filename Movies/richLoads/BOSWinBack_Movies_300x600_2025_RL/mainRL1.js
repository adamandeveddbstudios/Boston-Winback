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
  tl.set(['#movie1, #screen1'], {x:"300px"})
  tl.set(['#screen2'], {x:"140px"})

  tl.addLabel('frame1', 0)
  .to('#h1', 0.5, { autoAlpha: 1, y: "0", ease: Power1.easeOut}, 'frame1+=0.5')
  .to('#movie1', 0.5, { autoAlpha: 1, x: "0", ease: Power1.easeOut}, 'frame1+=0.5')
  .to('#screen1', 0.5, { autoAlpha: 1, x: "0", ease: Power1.easeOut}, '<')
  .addLabel('frame2', '5')
  .to('#h1', 0.5, { autoAlpha: 0, y:"20px", ease: Power1.easeOut }, "frame2")
  .to('#screen2', 0.5, { autoAlpha: 1, x: "0", ease: Power1.easeOut}, '>')
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


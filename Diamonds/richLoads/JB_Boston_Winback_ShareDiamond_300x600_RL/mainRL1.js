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

  tl.addLabel('frame1', 0)
    .to('#h1', 0.5, { autoAlpha: 1, y: "0", ease: Power1.easeOut}, 'frame1+=0.5')

    .staggerTo([".cls-1, .cls-3"],0, {opacity:0.2,fill: '#c9c9c9', ease: "bounce.in" }, 0.015,'frame1')
    .staggerTo('.cls-6',0, {fill: '#00e1ff', ease: "bounce.in" }, 0.009, 'frame1')

  .to('#Layer_2', 3, {scale:1.25, transform: "translate3d(1px, 199px, 0)", rotationZ:0.1, force3D: true,  ease: "power1.in" }, 1, 'frame1+=4')


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
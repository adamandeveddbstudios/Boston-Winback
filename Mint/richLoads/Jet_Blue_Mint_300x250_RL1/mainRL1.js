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
  tl.set(['#copy1, #copy2'], {y:"20px"})
  tl.addLabel('frame1', 0)
    .to('#copy1',0.5,{opacity:1, y:"0", ease: Power1.easeOut}, "frame1+=0.5")
    .to('#manSleeping',1.5,{x:-290, opacity:1,ease: Power1.easeOut}, "frame1+=1")

  tl.addLabel('frame2', 3)
    .to('#copy1,#manSleeping',0.5,{opacity:0, ease: Power1.easeOut}, "frame2")
    .to('#blueSkyF2',0.2,{opacity:1,ease: Power1.easeOut}, "frame2+=0.5")
    .to('#copy2',0.5,{opacity:1, y:"0", ease: Power1.easeOut}, "frame2+=1")
    .to('#copy3',1,{opacity:1,ease: Power1.easeOut}, "frame2+=1.5")
    .to('#cloudSK1',1,{opacity:1,x:-50,ease: Power1.easeOut}, "frame2+=2")
    .to('#cloudSK2',1,{opacity:1,x:60,ease: Power1.easeOut}, "frame2+=2")
    .to('#plane',1.5,{opacity:1,x:210,y:-40,ease: Power1.easeOut}, "frame2+=2")

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
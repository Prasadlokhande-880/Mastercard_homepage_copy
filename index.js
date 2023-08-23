let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


function currentSlidemy(n){

    let k=document.getElementsByClassName("myslider1")[0];
    let k1=document.getElementsByClassName("myslider2")[0];

    if(n==2){
        k1.style.zIndex = "1";
        k.style.zIndex = "-1";
    }
    else if(n==1){
        k1.style.zIndex = "-1";
        k.style.zIndex = "1";

    }
}

function input(count){

    let n=count;

setInterval(()=>{

    // console.log("this");

    let k=document.getElementsByClassName("myslider1")[0];
    let k1=document.getElementsByClassName("myslider2")[0];
    let k3=document.getElementById("one12");
    let k4=document.getElementById("one1");

    // console.log(k3);
    k3.style.opacity='1';
    k4.style.opacity='1';

    if(n==1){
      setTimeout(()=>{
        k3.style.opacity='1';
        n=2},2000)
      k3.style.transition='all 9s';
      k3.style.opacity='0';
        k1.style.zIndex = "1";
        k.style.zIndex = "-1";

    }
    else if(n==2){
      setTimeout(()=>{
     k4.style.opacity='1s';
     n=1;},2000)
     k4.style.transition='all 9s';
     k4.style.opacity='0';
        k1.style.zIndex = "-1";
        k.style.zIndex = "1";

    }

},3000);
}


input(1);

document.getElementById("qaz").addEventListener(onclick,()=>{
  let i=getElementById("imgone");
  i.src = "./icons8-mute-50.png";
});


function currentSlidemy12(){
  let image=document.getElementById("imgone");

  if (image.src.match("./icons8-sound-50.png")) {
    image.src = "./icons8-mute-50.png";
  }
  else{
    image.src = "./icons8-sound-50.png";
  }
}


function currentSlidemy123(){
  let r=document.getElementById("qwd");
  let image=document.getElementById("imgtwo");
  let vid=document.getElementById("background-video");

  if (image.src.match("./icons8-play-30.png")) {
    vid.pause();
    r.style.backgroundColor="#333030"
    image.src = "./icons8-pause-30.png";
  }
  else{
    vid.play();
    r.style.backgroundColor="#a6a3a3"
    image.src = "./icons8-play-30.png";
  }
}
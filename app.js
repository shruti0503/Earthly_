gsap.registerPlugin(Flip)
gsap.registerPlugin()

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

//type writing animation
  let i = 0;
let txt = " Welcome to the new age products!"
let speed = 50;


function typeWriter() {
  if (i < txt.length) {
    document.querySelector('.text').innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    
  }
}

// let j=0;
// let head="Our Products"
// let s=10;
// function typeWriter2() {
//     if (j< head.length) {
//       document.querySelector('.headmid').innerHTML += head.charAt(j);
//       j++;
//       setTimeout(typeWriter, s);
      
//     }
//   }


//scroll animations
const panda=document.querySelector('#panda')
const earth=document.querySelector('#earth')
const bird=document.querySelector('#bird')


function move(){
    const inc=window.scrollY
    console.log(inc);
    panda.style.left=10+inc*-0.24+'%';
}
window.addEventListener('scroll',move)
// window.addEventListener('scroll',typeWriter2())
//movement of bird
const flightPath={
    curviness:1.25,
    autoRotate: true,
    values:[{x:100,y:-20},
    {x:300,y:10},
    {x:500,y:100},
    {x:750,y:-100},
    {x:350,y:-50},
    {x:600,y:100},
    {x:800,y:100},
    {x:window.innerWidth,y:-150}
   
    
   
]
}
const tween=new TimelineLite();
tween.add(
    TweenLite.to("#bird",1,{
        bezier:flightPath,
        ease:Power1.easeInOut
    })
)
// 
const controller=new ScrollMagic.Controller()
const scene=new ScrollMagic.Scene({
    triggerElement:".midCont",
    duration:100,
    triggerHook:0
})

.setTween(tween)
.addIndicators()
// .setPin(".midCont")
.addTo(controller);


// const timeline = gsap.timeline({ defaults: { duration: 1 }})
// timeline
//   .from('.header', { y: '-100%', ease: 'bounce' })
//   .from('.link', { opacity: 0, stagger: .5 })
//   .from('.right', { x: '-100vw', ease: 'power2.in' }, 1)
//   .from('.left', { x: '-100%' }, '<.5')
//   .to('.footer', {  y: 0, ease: 'elastic' })
//   .fromTo('.button', { opacity: 0, scale: 0, rotation: 720 }, { opacity: 1, scale: 1, rotation: 0 })

// const button = document.querySelector('.button')

// button.addEventListener('click', () => {
//   timeline.timeScale(3)
//   timeline.reverse()
// })
gsap.from('.topnav',{duration:1,delay:1.5,x:'-100%'})
// gsap.from('.section',{duration:1,delay:.5,x:'-100%'})

 

//mid cont animation
// const card=document.querySelectorAll(".card");
// card.forEach((card,index)=>{
    
// card.addEventListener("click",()=>{
//     const state=Flip.getState(card);
   
//     //add the active class to the clicked one and add inactive to the other
//     const isCardActive=card.ClassList.contains("active");
//     card.forEach((otherCard,otherIdx) => {
//         otherCard.ClassList.remove("active");
//         otherCard.ClassList.remove("is-inactive");
//         if(!isCardActive && index !==otherIdx){
//             otherCard.ClassList.add("is-inactive");
//         }
//         if(!isCardActive) card.ClassList.add("active")
//         Flip.from(state,{
//             duration:1,
//             ease:"expo.out",
//             absolute:true,

//         })
        
//     });

// })
// })

const sec=document.querySelector(".section")
const midCont=document.querySelector(".midCont")
const t=new TimelineMax();


midCont.addEventListener('DOMContentLoaded',function() {
    const botani= function abc(){
        t.fromTo(sec,1,{left:"0%"},{left:"37%"})
        }
 }, false);
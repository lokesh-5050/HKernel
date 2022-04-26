gsap.to("#pop",{
    scrollTrigger:{
        start:"top 80%",
        trigger:"#pop",
        // markers:true,
    },
    x:"-70%",
    opacity:1,
    duration:1,
})
gsap.to("#pic1 img",{
    scrollTrigger:{
        start:"top top",
        trigger:"#page1",
        scrub:2,
        // markers:true,
    },
    scale:1.5,
    duration:1,
})

gsap.from("#create1",{
    
    width:0,
    
    duration:1,
})
gsap.from(".slide",{
    x:'-400px',
    duration:1,
})

gsap.from("#heading img",{
    scrollTrigger:{
        start:"top top",
        trigger:"#page2",
        scrub:2,
        end:"bottom 50%",
    },
    x:-100,
    duration:1,
})


var img = document.querySelectorAll("#des h1 img")
var texta = document.querySelectorAll("#des h1")
let i=0
while(i<texta.length){
    let b=i
    texta[b].addEventListener("mouseover",function(){
           img[b].style.transform=`scale(1)`;
           img[b].style.transition=`all cubic-bezier(0.19, 1, 0.22, 1) 1s`;

           img[b].style.zIndex =`10`;
       })
       texta[b].addEventListener("mouseout",function(){
            img[b].style.transition=`all cubic-bezier(0.19, 1, 0.22, 1) 1s`;
           
           img[b].style.transform=`scale(0)`;
           img[b].style.zIndex =`0`;
       })
       i++
}


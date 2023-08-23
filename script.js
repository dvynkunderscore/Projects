var crs=document.querySelector("#cursor")
document.addEventListener("mousemove",function(dets){
    crs.style.left=dets.x+"px"
    crs.style.top=dets.y+"px"
})

gsap.to("#nav",{
    backgroundColor:"#000",
    height:"100px",
    duration:0.25,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",    
        end:"top -10%",
        scrub:1
    }
})
// gsap.to("#main",{
//     backgroundColor:"#000",
    
//     scrollTrigger:{
//         trigger:"#main",
//         scroller:"#body",
//         start:"top -25%",
//         end:"top -70%",
//         scrub:2
//     }
// })
gasp.to("#aboutus img, aboutusdes",{
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#aboutus",
        scroller:"body",
        start:"top 60%",
        end:"top 58%",
        scrub:3
    }
})

gsap.to("#c1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#c1",
        scroller:"body",
        start:"top 60%",
        end:"top 47%",
        scrub:1
    }
})
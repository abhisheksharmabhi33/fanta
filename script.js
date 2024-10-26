
var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")
var cursor2 = document.querySelector("#cursor2")
var cursor2 = document.querySelector("#cursor3")
main.addEventListener("mousemove", function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:0.4,
        ease:"back.Out",

    })
})
main.addEventListener("mousemove", function(dets){
    gsap.to(cursor2,{
        x:dets.x,
        y:dets.y,
        duration:0.7,

    })
})
main.addEventListener("mousemove", function(dets){
    gsap.to(cursor3,{
        x:dets.x,
        y:dets.y,
        duration:0.9,

    })
// one


})
var tl = gsap.timeline({scrollTrigger:{
    trigger:"two",
    // markers:true,
    start:"45% 30%",
    end:"165% 50%",
    scrub:1,

}})
var tla = gsap.timeline({scrollTrigger:{
    trigger:"two",
    // markers:true,
    start:"45% 30%",
    end:"165% 50%",
    scrub:1,

}})
var tlb = gsap.timeline({scrollTrigger:{
    trigger:"two",
    // markers:true,
    start:"45% 30%",
    end:"165% 50%",
    scrub:1,

}})
tl.to("#fanta",{
    top:"170%",
    left:"5%",
})
tla.to("#cut-orange",{
    top:"170%",
    left:"5%",
})
tlb.to("#fullorange",{
    top:"170%",
    left:"5%",
})

var tl2 = gsap.timeline({scrollTrigger:{
    trigger:"three",
    // markers:true,
    start:"190% 30%",
    end:"255% 50%",
    scrub:1,

}})
tl2.to("#fanta",{
        x:"550",
        y:"515",
 })
 tl2.from("#blue-fanta",{
    x:"-922",
    
 })
 tl2.from("#cpepsi",{
    x:"622",
    
 })

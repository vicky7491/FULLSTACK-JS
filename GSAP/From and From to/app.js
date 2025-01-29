//  from: in from method you dont have to specify initial state, (it will figure out it self)


gsap.from(".box1", {
    y: -200,
    duration: 2,
    ease: "linear",
    repeat: -1,
    yoyo: true  
})

// fromTo: In fromTo method you have to specify initial state and final state

gsap.fromTo(".box2", {
y: 200, 
opacity:0
},
{
opacity: 1,
y: -200,
duration : 3,
ease: "linear",
borderRadius: 0,
repeat: -1,
yoyo: true
})
    
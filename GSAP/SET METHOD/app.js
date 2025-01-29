gsap.set(".box", {
    opacity: 0,
    background: "yellow",
});

gsap.to(".box",{
    opacity:1,
    background: "crimson",
    duration: 2,
    y: 100,
    repeat: -1,
    yoyo: true,
})
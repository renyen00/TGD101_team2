
gsap.registerPlugin(ScrollTrigger);

// 雲
gsap.fromTo(".index_cloud_1",{y: 10, z:-500, duration: 1} , {           
    z: 2000,
    duration:20 ,
    ease: "none",
    scrollTrigger: {
        trigger: ".index_cloud_top",     
        start: "top top",    
        scrub:1,
        toggleActions: "play none none none",       
        // markers: true,
        pin: ".index_cloud_top",
    }       
})

gsap.fromTo(".index_cloud_2",{y: 10, z:-800, duration: 1} , {              
    z: 4500,
    duration:20 ,
    ease: "none",
    scrollTrigger: {
        trigger: ".index_cloud_top",     
        start: "top top",    
        scrub:1,
        toggleActions: "play none none none",       
        // markers: true,
        pin: ".index_cloud_top",
    }       
})

gsap.fromTo(".index_cloud_3",{y: 10, z:-700, duration: 1} , {              
    z: 4000,
    duration:20 ,
    ease: "none",
    scrollTrigger: {
        trigger: ".index_cloud_top",     
        start: "top top",    
        scrub:1,
        toggleActions: "play none none none",       
        // markers: true,
        pin: ".index_cloud_top",
    }       
})

gsap.fromTo(".index_cloud_4",{y: 10, z:-600, duration: 1} , {              
    z: 3000,
    duration:10 ,
    ease: "none",
    scrollTrigger: {
        trigger: ".index_cloud_top",     
        start: "top top",    
        scrub:1,
        toggleActions: "play none none none",       
        // markers: true,
        pin: ".index_cloud_top",
    }       
})
gsap.fromTo(".index_cloud_5",{y: 10, z:-400, duration: 1} , {              
    z: 2000,
    duration:10 ,
    ease: "none",
    scrollTrigger: {
        trigger: ".index_cloud_top",     
        start: "top top",    
        scrub:1,
        toggleActions: "play none none none",       
        // markers: true,
        pin: ".index_cloud_top",
    }       
})

gsap.fromTo(".index_cloud_6",{y: 10, z:-300, duration: 1} , {              
    z: 3000,
    duration:10 ,
    ease: "none",
    scrollTrigger: {
        trigger: ".index_cloud_top",     
        start: "top top",    
        scrub:1,
        toggleActions: "play none none none",       
        // markers: true,
        pin: ".index_cloud_top",
    }       
})
gsap.fromTo(".index_cloud_loop",{y: 10, z:-100, duration: 1} , {              
    z: 1000,
    duration:10 ,
    ease: "none",
    scrollTrigger: {
        trigger: ".index_cloud_top",     
        start: "top top",    
        scrub:1,
        toggleActions: "play none none none",       
        // markers: true,
        pin: ".index_cloud_top",
    }       
})

gsap.fromTo(".index_cloud_loop2",{y: 10, z:-200, duration: 1} , {              
    z: 3000,
    duration:10 ,
    ease: "none",
    scrollTrigger: {
        trigger: ".index_cloud_top",     
        start: "top top",    
        scrub:1,
        toggleActions: "play none none none",       
        // markers: true,
        pin: ".index_cloud_top",
    }       
})




gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".index_cloud_1",{y: 10, z:-500, duration: 1} , {           
    z: 5000,
    X: 4000,
    duration:8 ,
    ease: "none",
    scrollTrigger: {
        trigger: ".index_top_cloud",     
        start: "top top",    
        scrub:1,
        toggleActions: "play none none none",       
        // markers: true,
        pin: ".index_top_cloud",
    }
       
})

// gsap.fromTo(".index_h3_1",{y: 10, z:-500, duration: 1} , {           
//     z: 5000,
//     x：2000,
//     duration:8 ,
//     ease: "none",
//     scrollTrigger: {
//         trigger: ".index_top_cloud",     
//         start: "top top",    
//         scrub:1,
//         toggleActions: "play none none none",       
//         // markers: true,
//         pin: ".index_top_cloud",
//     }
       
// })

gsap.fromTo(".index_cloud_2",{y: 10, z:-1000, duration: 1} , {              
    z: 4000,
    duration:8 ,
    ease: "none",
    scrollTrigger: {
        trigger: ".index_top_cloud",     
        start: "top top",    
        scrub:1,
        toggleActions: "play none none none",       
        // markers: true,
        pin: ".index_top_cloud",
    }       
})

gsap.fromTo(".index_cloud_3",{y: 10, z:-2000, duration: 1} , {              
    z: 3000,
    duration:8 ,
    ease: "none",
    scrollTrigger: {
        trigger: ".index_top_cloud",     
        start: "top top",    
        scrub:1,
        toggleActions: "play none none none",       
        // markers: true,
        pin: ".index_top_cloud",
    }       
})

gsap.fromTo(".index_cloud_4",{y: 10, z:-3000, duration: 1} , {              
    z: 2000,
    duration:8 ,
    ease: "none",
    scrollTrigger: {
        trigger: ".index_top_cloud",     
        start: "top top",    
        scrub:1,
        toggleActions: "play none none none",       
        // markers: true,
        pin: ".index_top_cloud",
    }       
})

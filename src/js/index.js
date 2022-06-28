gsap.registerPlugin(ScrollTrigger);

// 雲
gsap.to(".index_cloud_1", {           
    x:-1000,
    duration: 5,
    ease: "none",
    scrollTrigger: {
        trigger: ".island",     
        start: "top top", 
        end:"+=1500",   
        scrub: !0,    
        // markers: true,
        pin: ".island",
    }       
})

gsap.to(".index_cloud_2" , {           
    x:-1000,
    duration: 5,
    ease: "none",
    scrollTrigger: {
        trigger: ".island",     
        start: "top top", 
        end:"+=1500",   
        scrub: !0,    
        // markers: true,
        pin: ".island",
    }       
})
gsap.to(".index_cloud_3" , {           
    x:1000,
    duration: 5,
    ease: "none",
    scrollTrigger: {
        trigger: ".island",     
        start: "top top", 
        end:"+=1500",   
        scrub: !0,    
        // markers: true,
        pin: ".island",
    }       
})
gsap.to(".index_cloud_4" , {           
    x:1000,
    duration: 5,
    ease: "none",
    scrollTrigger: {
        trigger: ".island",     
        start: "top top", 
        end:"+=1500",   
        scrub: !0,    
        // markers: true,
        pin: ".island",
    }       
})
gsap.to(".index_cloud_5" , {           
    x:1000,
    duration: 5,
    ease: "none",
    scrollTrigger: {
        trigger: ".island",     
        start: "top top", 
        end:"+=1500",   
        scrub: !0 ,    
        // markers: true,
        pin: ".island",
    }       
})
gsap.to(".index_cloud_6" , {           
    x:1000,
    duration: 5,
    ease: "none",
    scrollTrigger: {
        trigger: ".island",     
        start: "top top", 
        end:"+=1500",   
        scrub: !0,    
        // markers: true,
        pin: ".island",
    }       
})

gsap.to(".index_cloud_7" , {           
    x:-1000,
    duration: 5,
    ease: "none",
    scrollTrigger: {
        trigger: ".island",     
        start: "top top", 
        end:"+=1500",   
        scrub: !0,    
        // markers: true,
        pin: ".island",
    }       
})

//鳥
gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

gsap.to(".index_bird",{          
    duration:8,
    scrollTrigger: {
        trigger:"#motionPath",
        start:"top top",
        // end: "+=6000",
        scrub: true,           
        markers: true,
        pin: "#motionPath",        
    },
    motionPath: {
    path: "#motionPath",
    align: "#motionPath",
    ease: "none",
    alignOrigin: [0.5, 0.5],
    autoRotate: true, 
    start: 0,
    end: 1,
  }
});


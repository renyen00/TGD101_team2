gsap.registerPlugin(MotionPathPlugin,ScrollTrigger);
const d = gsap.timeline({
    defaults: {
        duration: 3,
        ease: "none",
        scrollTrigger: {
            trigger: ".triggerIsland",     
            start: "top bottom", 
            end: "1000",   
            scrub: true,  
            // markers: true,  
            pin: "#islandWrapper",
        }       
    }
    }
  );

// 雲
// d.to(".index_cloud_1", {x: -1200});
// d.to(".index_cloud_2", {x: -1200});
// d.to(".index_cloud_3", {x: -1200});
// d.to(".index_cloud_4", {x: -1200});
// d.to(".index_cloud_5", {x: -1200});
// d.to(".index_cloud_6", {x: -1200});
// d.to(".index_cloud_7", {x: -1200});



//鳥
gsap.to(".index_bird",{          
    duration:8,
    scrollTrigger: {
        trigger:"#motionPath",
        start:"top top",
        // end: "+=6000",
        scrub: true,           
        // markers: true,
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

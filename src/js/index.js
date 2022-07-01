gsap.registerPlugin(ScrollTrigger);
const d = gsap.timeline({
    defaults: {
        duration: 3,
        ease: "none",
        scrollTrigger: {
            trigger: ".triggerIsland",     
            start: "top bottom", 
            end: "1000",   
            scrub: true,  
            markers: true,  
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

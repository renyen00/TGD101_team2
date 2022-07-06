gsap.registerPlugin(ScrollTrigger);
var d = gsap.timeline({
    defaults: {
        ease: "none",
        scrollTrigger: {
            trigger: ".triggerIsland",     
            start: "top center", 
            end: "+= 4000",
            scrub:"true",  
            markers: true,  
            // pin: "#islandWrapper",
        }       
    }
    }
  );
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

var controller = new ScrollMagic.Controller();
var stickyMap = new TimelineMax();
    stickyMap
        // .to('.footer_info', 2, {opacity: '0'})
        // 馬丘比丘
        .to('.atagHoverMachuPicchu, .leadFont', 2, {opacity: '1'})
        .to('.islandItself', 5, { scale: '3', top: '74%', left: '26%' })
        .to('.islandItself', 5, { scale: '3', top: '74%', left: '26%' })
        .to('.atagHoverMachuPicchu, .leadFont', 4, {opacity: '0'})
        // 動物園
        .to('.elephant, .giraffe, .panda, .zooFont', 2, {opacity: '1'})
        .to('.islandItself', 5, { top: '-40%', left: '38%' })
        .to('.islandItself', 5, { top: '-40%', left: '38%' })
        .to('.elephant, .giraffe, .panda, .zooFont', 4, {opacity: '0'})
        // 瀑布
        .to(' .atagHoverWaterfall, .leadFont', 2, {opacity: '1'})
        .to('.islandItself', 5, { top: '-4%', left: '15%' })
        .to('.islandItself', 5, { top: '-4%', left: '15%' })
        .to(' .atagHoverWaterfall, .leadFont', 4, {opacity: '0'})
        // 商店
        .to('.atagHoverStore, .leadFont', 2, {opacity: '1'})
        .to('.islandItself', 5, { top: '-60%', left: '10%' })
        .to('.islandItself', 5, { top: '-60%', left: '10%' })
        .to('.atagHoverStore, .leadFont', 4, {opacity: '0'})
        // 叢林
        .to('.atagHoverJungle, .leadFont', 2, {opacity: '1'})
        .to('.islandItself', 5, { top: '27%', left: '42%' })
        .to('.islandItself', 5, { top: '27%', left: '42%' })
        .to('.atagHoverJungle, .leadFont', 4, {opacity: '0'})
        // 山
        .to('.atagHoverSnowMoutain, .leadFont', 2, {opacity: '1'})
        .to('.islandItself', 5, { top: '27%', left: '8%' })
        .to('.islandItself', 5, { top: '27%', left: '8%' })
        .to('.atagHoverSnowMoutain, .leadFont', 4, {opacity: '0'})
        // 鬼屋
        .to('.atagHoverGhostHouse, .leadFont', 2, {opacity: '1'})
        .to('.islandItself', 5, { top: '34%', left: '53%' })
        .to('.islandItself', 5, { top: '34%', left: '53%' })
        .to('.atagHoverGhostHouse, .leadFont', 4, {opacity: '0'})
        // 遊樂園
        .to(' .ferryWheel, .rollerCoaster, .carousel, .parkFont', 2, {opacity: '1'})
        .to('.islandItself', 5, { top: '-7%', left: '-41%' })
        .to('.islandItself', 5, { top: '-7%', left: '-41%' })
        .to(' .ferryWheel, .rollerCoaster, .carousel, .parkFont', 4, {opacity: '0'})
        // .to('.footer_info', 2, {opacity: '1'})
        // 回到原本畫面
        .to('.islandItself', 5, { scale: '1', top: '0%', left: '0%' })
        .to('.islandItself', 5, { scale: '1', top: '0%', left: '0%' })

    new ScrollMagic.Scene({
        triggerElement: '.triggerIsland',
        triggerHook: 0,
        duration: '1000%',
    }).setPin('#islandWrapper').setTween(stickyMap).addTo(controller);
    // .addIndicators() 

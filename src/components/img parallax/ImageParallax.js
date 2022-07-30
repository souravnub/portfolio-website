import gsap from "gsap";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

// strength -> 1 to 100
const ImageParallax = ({ img, strength = 10, setHasImgLoaded }) => {
    let [imgDimensions, setImgDimensions] = useState({ height: 0, width: 0 });

    let parallaxImgLoad = ({ target: img }) => {
        setHasImgLoaded(true);
        let setDimensions = () => {
            let { offsetHeight, offsetWidth } = img;
            setImgDimensions({ width: offsetWidth, height: offsetHeight });
        };

        setDimensions();
        window.addEventListener("resize", setDimensions);
    };

    useEffect(() => {
        let img = document.querySelector(".parallax-img");
        let tween = gsap.to(img, {
            // container height was 90% => img should be moved up only by 10%
            y: `-${strength}%`,
            scrollTrigger: {
                trigger: ".img-parallax-container",
                start: "-20% 30%",
                end: "bottom 10%",
                scrub: 1.4,
            },
        });
        return () => {
            tween.kill();
        };
    }, [imgDimensions]);

    return (
        <div
            className="img-parallax-container"
            style={{
                // 90% of the total height if the strength is 10
                height: (imgDimensions.height * (100 - strength)) / 100,
                overflow: "hidden",
            }}>
            <img
                src={img}
                alt=""
                onLoad={parallaxImgLoad}
                className="parallax-img"
            />
        </div>
    );
};

export default ImageParallax;

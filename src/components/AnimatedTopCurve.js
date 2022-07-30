import gsap from "gsap";
import React, { useEffect } from "react";
import "../sass/_components.scss";

// remember to give the parent container position of relative
const AnimatedTopCurve = ({ hasSingleWorkPageBrandImgLoaded }) => {
    useEffect(() => {
        // scroll trigger for the rounded-div-container's height(as when its height will vary the borderradius of the curve will seem to change)

        let transition = gsap.to(".rounded-div-container .rounded-div", {
            height: "80px",
            scrollTrigger: {
                trigger: ".rounded-div-container",
                start: "-70% 70%",
                end: "40% 50%",
                scrub: 1,
            },
        });

        return () => transition.kill();
    }, [hasSingleWorkPageBrandImgLoaded]);

    return (
        <div className="rounded-div-container">
            <div className="rounded-div"></div>
        </div>
    );
};

export default AnimatedTopCurve;

import gsap from "gsap";
import React, { useEffect } from "react";
import "../sass/_components.scss";

// remember to give the parent container position of relative
const AnimatedTopCurve = ({ nextWorkIndex }) => {
    useEffect(() => {
        // reason to set timeout is given in the SingleWorkSectionFooter.js...
        let timeout;
        let transition;
        // scroll trigger for the rounded-div-container's height(as when its height will vary the borderradius of the curve will seem to change)
        setTimeout(() => {
            transition = gsap.fromTo(
                ".rounded-div-container .rounded-div",
                { height: "720%" },
                {
                    height: "80px",
                    scrollTrigger: {
                        trigger: ".rounded-div-container",
                        start: "-70% 70%",
                        end: "40% 50%",
                        scrub: 1,
                    },
                }
            );
        }, [1500]);

        return () => {
            transition?.kill();
            clearTimeout(timeout);
        };
    }, [nextWorkIndex]);

    return (
        <div className="rounded-div-container">
            <div className="rounded-div"></div>
        </div>
    );
};

export default AnimatedTopCurve;

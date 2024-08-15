import gsap from "gsap";
import React, { useEffect } from "react";
import "../sass/_components.scss";

const AnimatedTopCurve = ({ nextProjectId }) => {
    useEffect(() => {
        // scroll trigger for the rounded-div-container's height(as when its height will vary the borderradius of the curve will seem to change)
        let transition = gsap.fromTo(
            ".rounded-div-container .rounded-div",
            { height: "200px" },
            {
                height: "70px",
                borderRadius: 0,
                scrollTrigger: {
                    trigger: ".rounded-div-container",
                    start: "top 70%",
                    end: "0 0%",
                    scrub: 1,
                },
            }
        );

        return () => {
            transition.revert();
        };
    }, [nextProjectId]);

    return (
        <div className="rounded-div-container">
            <div className="rounded-div"></div>
        </div>
    );
};

export default AnimatedTopCurve;

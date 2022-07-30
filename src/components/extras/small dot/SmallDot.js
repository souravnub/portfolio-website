import React from "react";
const SmallDot = ({ size = "1rem", fill }) => {
    return (
        <div
            className="small-dot"
            style={{
                width: size,
                aspectRatio: 1,
                backgroundColor: fill ? fill : "black",
                borderRadius: "50%",
                display: "block",
            }}></div>
    );
};

export default SmallDot;

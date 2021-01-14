import React from "react";

function imageMed(props) {
    const style = {
        height: "150px",
        width: "100px",
    };
    return <img style={style} src={props.url} alt={`a ${props.altText}`} />;
}

export default imageMed;

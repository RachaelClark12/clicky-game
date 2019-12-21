


import React from "react";


export default function Score(props) {
    const styles = {
        width: '200px'
    };

    return (
<div>
Score: {props.score}| Top Score:{props.topScore} 
</div>
    );
}



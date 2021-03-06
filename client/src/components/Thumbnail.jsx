


import React from "react";


export default function Thumbnail(props) {
    const styles = {
        width: 'auto',
        height: '150px'
    };

    return (
        <img
            src={props.src}
            onClick={props.onClick}
            className="img-thumbnail rounded" 
            style={styles}
            />
    );
}




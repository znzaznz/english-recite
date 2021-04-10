import React from 'react';
import "./index.scss"

export default function SvgIcon(props) {
    return (
        <svg className={`icon ${props.className}`} aria-hidden={"true"}>
            <use xlinkHref={`#icon-${props.name}`}/>
        </svg>
    )
}
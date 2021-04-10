import React from 'react';
import "./index.scss"

export default function SvgIcon(props) {
    console.log(props.isBack);
    return (
        <svg className={`icon ${props.className}`} aria-hidden={"true"}>
            {props.isBack ? <use xlinkHref={`#icon-${props.name}`}/> : <use xlinkHref={""}/>}
        </svg>
    )
}
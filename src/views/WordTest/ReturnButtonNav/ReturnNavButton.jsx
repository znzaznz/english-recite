import React from 'react';
import Icon from "../../../component/SvgIcon/SvgIcon";
import "./index.scss"

export default function ReturnNavButton(props) {
    return (
        <div className={"ReturnNavButton"}>
            <Icon name={`left`} className={"returnButton"} isBack={props.isBack}/>
            <h4>{props.title}</h4>
            <Icon className={"returnButton"}/>
        </div>
    )
}
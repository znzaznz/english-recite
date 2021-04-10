import React from 'react';
import Icon from "../../component/SvgIcon/SvgIcon";
import "./index.scss"

export default function ReturnNavButton() {
    return (
        <div className={"ReturnNavButton"}>
            <Icon name={"left"} className={"returnButton"}/>
            <h4>词汇量测试</h4>
            <Icon className={"returnButton"}/>
        </div>
    )
}
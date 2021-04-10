import React from 'react';
import "./index.scss"
import ReturnNavButton from "../../views/WordTest/ReturnButtonNav/ReturnNavButton";
import NoReciteAccount from "../../views/WordTest/NoReciteAccount/NoReciteAccount";
import IsKnow from "../../views/WordTest/IsKnow/IsKnow";

export default function Layout(props) {
    //这个组件用来做页面布局
    return (
        <div className={"Layout"}>
            <ReturnNavButton title={props.title}/>
            <main>
                {props.children}
            </main>
        </div>
    )
}
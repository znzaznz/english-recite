import React from 'react';
import "./index.scss"
import ReturnNavButton from "../../views/WordTest/ReturnButtonNav/ReturnNavButton";

export default function Layout(props) {
    //这个组件用来做页面布局
    return (
        <div className={"Layout"}>
            <ReturnNavButton title={props.title} isBack={props.isBack}/>
            <main>
                {props.children}
            </main>
        </div>
    )
}
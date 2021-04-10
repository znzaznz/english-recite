import React from 'react';
import "./index.scss"
import IsKnow from "./IsKnow/IsKnow";
import NoReciteAccount from "./NoReciteAccount/NoReciteAccount";
import ReturnNavButton from "./ReturnButtonNav/ReturnNavButton";

export default function WordTest() {
    return (
        <div className={"WordTest"}>
            <ReturnNavButton/>
            <main>
                <NoReciteAccount/>
                <div className="showWord">
                    <h1>Word</h1>
                </div>
                <IsKnow/>
            </main>
        </div>
    )
}
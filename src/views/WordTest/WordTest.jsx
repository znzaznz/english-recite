import React from 'react';
import "./index.scss"
import IsKnow from "./IsKnow/IsKnow";
import NoReciteAccount from "./NoReciteAccount/NoReciteAccount";
import Layout from "../../component/Layout/Layout";

export default function WordTest() {
    return (
        <div className={"WordTest"}>
            <Layout title={"英语词汇测试"} isBack={true}>
                <NoReciteAccount/>
                <div className="showWord">
                    <h1>Word</h1>
                </div>
                <IsKnow/>
            </Layout>
        </div>
    )
}
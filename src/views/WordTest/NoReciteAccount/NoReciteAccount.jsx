import React from 'react';
import { Progress } from 'antd';
import "./index.scss"

export default function NoReciteAccount() {
    return (
        <div className="noReciteAccount">
            <span>当前您还有n个单词未复习</span>
            <Progress percent={30} />
        </div>
    )
}
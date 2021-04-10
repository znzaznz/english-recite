import React from 'react';
import {useHistory} from "react-router-dom"
import { Result, Button } from 'antd';

export default function NoPage() {
    //编写返回功能
    const history = useHistory()
    const goBack = ()=>{
        history.push("/")
    }

    return (
        <Result
            status="404"
            title="404"
            subTitle="您怎么到这个页面来了，url输入错误哦"
            extra={<Button type="primary" onClick={goBack}>返回主页</Button>}
        />
    )
}
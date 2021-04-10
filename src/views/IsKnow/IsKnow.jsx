import React from 'react';
import { Button } from 'antd';
import "./index.scss"

export default function IsKnow() {
    return (
        <section className={"isKnow"}>
            <Button>认识</Button>
            <Button>不认识</Button>
        </section>
    )
}
import React from 'react';
import "./index.scss"

export default function WordTest() {
    return (
        <div>
            <header>
                <img src="" alt="return"/>
                <h2>词汇量测试</h2>
            </header>
            <main>
                <div className="noReciteAccount">
                    <span>当前您还有n个单词未复习</span>
                    <div class="progress"></div>
                </div>
                <div className="showWord">word</div>
                <section className={"isKnow"}>
                    <button>认识</button>
                    <button>不认识</button>
                </section>
            </main>
        </div>
    )
}
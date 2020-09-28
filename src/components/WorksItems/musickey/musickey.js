import React from 'react'

import'./musickey.css'

function musickey () {

    function playkey (e) {
        console.log(e)
        const playkey = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        if(!playkey) return;
        playkey.currentTime = 0; // currentTime 當讓音效檔的時間點回到一開始 如果設為0 就不用等到全部播放完才能案播放 , play()則是開始撥放
        playkey.classList.add('playing'); // classList class 屬性新增或刪除
        setTimeout(() => {
            playkey.classList.remove('playing')
        }, 200);
    }

    let remove = function (e) {
        this.classList.remove('playing')
    }

    let removetransitionend = function () {
        const keys = document.querySelectorAll('.key');
        keys.forEach((key) => {
          key.addEventListener('transitionend' , remove)  //CSS 動畫結束事件 --- transitionEnd
        })
    }
    removetransitionend();
    window.addEventListener('keydown' , playkey) //keydown 鍵盤事件



    return (
        <>
            <div className="keys">
                <div data-key="65" className="key">
                    <kbd>A</kbd>
                    <span className="sound">clap</span>
                </div>
                <div data-key="83" className="key">
                    <kbd>S</kbd>
                    <span className="sound">clap</span>
                </div>
                <div data-key="68" className="key">
                    <kbd>D</kbd>
                    <span className="sound">clap</span>
                </div>
                <div data-key="70" className="key">
                    <kbd>F</kbd>
                    <span className="sound">clap</span>
                </div>
                <div data-key="71" className="key">
                    <kbd>G</kbd>
                    <span className="sound">clap</span>
                </div>
                <div data-key="72" className="key">
                    <kbd>H</kbd>
                    <span className="sound">clap</span>
                </div>
                <div data-key="74" className="key">
                    <kbd>J</kbd>
                    <span className="sound">clap</span>
                </div>
                <div data-key="75" className="key">
                    <kbd>K</kbd>
                    <span className="sound">clap</span>
                </div>
                <div data-key="76" className="key">
                    <kbd>L</kbd>
                    <span className="sound">clap</span>
                </div>
            </div>
        <audio data-key="65"></audio>
        <audio data-key="83"></audio>
        <audio data-key="68"></audio>
        <audio data-key="70"></audio>
        <audio data-key="71"></audio>
        <audio data-key="72"></audio>
        <audio data-key="74"></audio>
        <audio data-key="75"></audio>
        <audio data-key="76"></audio>
        </>
    )
}

export default musickey;
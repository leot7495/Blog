import React from 'react'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'

function JSArticle() {

    function cik() {
        const Cssbtn = document.getElementsByName('readMoreButton');
        Cssbtn.forEach((btn) => {
            btn.addEventListener('click', butn)
        })
    }

    function butn() {
        const CssContent = document.querySelectorAll('.CSScontent');
        CssContent.forEach((content) => {
            if (content.dataset.key === this.dataset.key) {
                if (content.className === 'CSScontent contenthide') {
                    content.classList.add('contentopen')
                    content.classList.remove('contenthide')
                    this.value = 'close'
                } else {
                    content.classList.remove('contentopen')
                    content.classList.add('contenthide')
                    this.value = 'Read more'
                }
            }
        })
    }

    return (
        <>
            {/* 第一篇文章 */}
            <div className="Css" data-aos="fade-up">
                <h2 className="CssTitle">JavaScript-Promise</h2>
                <div> <FaRegCalendarAlt />2020/07/22 <FaCss3Alt />JavaScript</div>
                <div className="content mt-3">
                    <p>是Callback以外的另一種處理非同步事件，且可讀性及可維護姓都比Callback好很多。Promise是一個物件，代表一個尚未完成，但最終會完成的一個動作，在一個非同步處理流程中，它只是一個暫存的值。</p>

                    <p className='CSScontent contenthide' data-key="1">Promise 透過 new Promise((resolve , reject) 箭頭函式 大括號<br />
                        .then()方法，當成功時從resolve()獲取結果。<br />
                        .catch()方法，當失敗時從reject()獲取失敗訊息。<br />
                        ES7 推出了 Aysnc / Await 是一種新語法，用來處理非同步，讓非同步的程式讀起來更像同步程式碼，是用來簡化及清楚化 Promise 相對複雜的結構，
                        回傳的一樣是 Promise 物件，只是針對promise-based寫法進行包裝。
                    </p>

                    <div className="cssbtn">
                        <input className="readMoreButton" name="readMoreButton" type="button" value="Read more" data-key="1" onClick={cik} />
                    </div>
                </div>
            </div>

            {/* 第二篇文章 */}
            <div className="Css" data-aos="fade-up">
                <h2 className="CssTitle">JavaScript-ES6</h2>
                <div> <FaRegCalendarAlt />2020/07/22 <FaCss3Alt />JavaScript</div>
                <div className="content mt-3">
                    <p>這是 JS 語言的標準規範，提出了許多新語法及特性，甚至擴充更多的 API 更容易使用。</p>

                    <p className='CSScontent contenthide' data-key="2">
                        ＊宣告及作用域<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;1. let 及 const<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;2. 塊級作用域<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;3. 箭頭函式<br />
                        ＊變數設定<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;1. 變數解構重設<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;2. 字串模版及引號``<br />
                        ＊非同步處理<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;1. Promise<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;2. Aysnc / Await<br />
                        ＊其他<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;1. 預設值<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;2. Module<br />
                    </p>

                    <div className="cssbtn">
                        <input className="readMoreButton" name="readMoreButton" type="button" value="Read more" data-key="2" onClick={cik} />
                    </div>
                </div>
            </div>

            {/* 第三篇文章 */}
            <div className="Css" data-aos="fade-up">
                <h2 className="CssTitle">JavaScript-IIFE</h2>
                <div> <FaRegCalendarAlt />2020/07/22 <FaCss3Alt />JavaScript</div>
                <div className="content mt-3">
                    <p>IIFE全名為 Immediately Invoked Functions Expressions 指的是可以立即執行的Functions Expressions函式表示式，中文多譯為立即(執行)函式。</p>

                    <p className='CSScontent contenthide' data-key="3">
                    ES5版本的JS有全域執行環境(作用域)、函式執行環境(作用域)兩種，直到ES6版才出現塊級作用域，
                    在ES6出來前，為了避免設定太多的全域變數，開發者往往會將變數設定在函式中，使其成為區域變數，
                    尤其是設定在IIFE中，確保不會汙染到全域環境的變數。 <br/>
                    使用立即函式的好處，除了可以立即執行程式碼，省略多餘的呼叫，還可以用來避免汙染全域執行環境的東西，減少開發時因相同命名相衝的BUG。
                    </p>

                    <div className="cssbtn">
                        <input className="readMoreButton" name="readMoreButton" type="button" value="Read more" data-key="3" onClick={cik} />
                    </div>
                </div>
            </div>

            {/* 第四篇文章 */}
            <div className="Css" data-aos="fade-up">
                <h2 className="CssTitle">JavaScript-跨域</h2>
                <div> <FaRegCalendarAlt />2020/07/22 <FaCss3Alt />JavaScript</div>
                <div className="content mt-3">
                    <p>在前端領域中，跨域是指瀏覽器允許向服務器發送跨域請求，從克服 AJAX 只能同源使用的限制。</p>

                    <p className='CSScontent contenthide' data-key="4">
                    何謂同源政策 ?? <br/>
                    同源政策是一種約定，它是瀏覽器最核心也最基本的安全功能，如果缺少了同源政策，瀏覽器很容易受到 XSS 及 CSFR 攻擊。所謂同源是指
                    協議 + 域名 + 端口 三者相同，即便兩個不同的域名指向同一個 IP 地址，也非同源。<br/><br/>
                    跨域資源共享 ( CORS )<br/>
                    CORS 是一個 W3C 標準，全名是 Cross-origin resource sharing。它允許瀏覽器向跨原服務器，發出 XMLHttpRequest 請求，從而克服了 AJAX 只能同源使用的限制。<br/>
                    CORS 需要瀏覽器和服務器同時支持，目前所有瀏覽器都支持該功能，IE 瀏覽器不能低於 IE10。<br/><br/>
                    非簡單請求 <br/>
                    非簡單請求是那種對服務器有特殊要求的請求，比如請求方法是 PUT 或 DELETE，或者Content-Type字段的類型是application/json。非簡單請求的CORS請求，會在正式通信之前，增加一次HTTP查詢請求，稱為 預檢請求（preflight）。

                    </p>

                    <div className="cssbtn">
                        <input className="readMoreButton" name="readMoreButton" type="button" value="Read more" data-key="4" onClick={cik} />
                    </div>
                </div>
            </div>
        </>
    )

}
export default JSArticle;
import React from 'react'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'

import lifecycle from '../Image/lifecycle.png'
import './ReactArticle.css'

function ReactArticle () {

    function cik() {
        const Cssbtn = document.getElementsByName('readMoreButton');
        Cssbtn.forEach((btn) => {
            btn.addEventListener('click', butn)
        })
    }

    function butn() {
        const CssContent = document.querySelectorAll('.CSScontent');
        CssContent.forEach((content)=>{
            if (content.dataset.key === this.dataset.key){
                if(content.className === 'CSScontent contenthide'){
                    content.classList.add('contentopen')
                    content.classList.remove('contenthide')
                    this.value = 'close'
                }else{
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
                <h2 className="CssTitle">關於React</h2>
                <div> <FaRegCalendarAlt />2020/07/23 <FaCss3Alt />React</div>
                <div className="content mt-3">
                    <p>React 是一個陳述式、高效且具有彈性的 JavaScript 函式庫，用以建立使用者介面。它讓你使用小巧而獨立的「component」，來建立複雜的 UI。</p>

                    <p className='CSScontent contenthide' data-key="1">
                        ＊五大重要特性<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;1. Virtual DOM (虛擬 DOM ) React 創造在程式碼中的 DOM 元素與結構語法。<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;2. JSX - 搭配虛擬 DOM，可以在程式碼中嵌入類似 HTML 碼的標記。<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;3. 元件化 - 開發採用元件分離與結合的方式。<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;4. 單向資料流 - 資料流動方向一致，父母元件到子女元件 (由外到內)。<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;5. 宣告式設計 - 如何更動與呈現交由React演算進行。<br /> 
                        ＊為什麼不讓 React 管理 DOM ??<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;React 不會比直接 DOM 處理更快，它只是協助開發者建立可維護的應用程式，而且足夠快速的進行 DOM 處理。(ex : FB 往下滑會一直產生節點)<br />
                        ＊單向資料流<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;props - 擁有者元件對被擁有者元件的溝通方式(傳遞資料)。<br /> 
                        ＊宣告式設計<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;重點在於目標，電腦了解目標後採取各種措施完成，減少程式的副作用。                 
                    </p>

                    <div className="cssbtn">
                        <input className="readMoreButton" name="readMoreButton" type="button" value="Read more" data-key="1" onClick={cik} />
                    </div>
                </div>
            </div>

            {/* 第二篇文章 */}
            <div className="Css" data-aos="fade-up">
                <h2 className="CssTitle">JSX</h2>
                <div> <FaRegCalendarAlt />2020/07/23 <FaCss3Alt />React</div>
                <div className="content mt-3">
                    <p>React 把 HTML 及 JS 代碼全部寫在一起，提高了前端開發的效率，
                        而用的是一種 JSX 的延伸語法，JSX 結合了 JavaScript 和 XML，執行 JSX 會產生 React『element』。<br/>
                    </p>

                    <p className='CSScontent contenthide' data-key="2">
                    ＊ React 自創在 JS 程式碼中建立 DOM 元素與使用自訂元件標記的語法。<br />
                    ＊ JSX 使用花括號(｛｝)嵌入 JS 表達式，具有求值運算作用。<br />
                    ＊ 是 React.createElement方法的簡寫法。<br />
                    ＊ 需透過 Babel 編譯才能執行。<br />                      
                    </p>

                    <div className="cssbtn">
                        <input className="readMoreButton" name="readMoreButton" type="button" value="Read more" data-key="2" onClick={cik} />
                    </div>
                </div>
            </div>

            {/* 第三篇文章 */}
            <div className="Css" data-aos="fade-up">
                <h2 className="CssTitle">state 及 props</h2>
                <div> <FaRegCalendarAlt />2020/07/23 <FaCss3Alt />React</div>
                <div className="content mt-3">
                    <p>＊state 是讓元件控制自己的狀態。<br/>
                       ＊props 是讓外部對元件自己的配置。
                    </p>

                    <p className='CSScontent contenthide' data-key="3">
                    1. props - 是 React 父元件與子元件溝通的橋樑，是靜態唯獨的，和 state 主要差別在於 props 是不可改變的。<br />
                    2. state - 主要是元件保存，控制及修改自己可變的狀態， state 在元件內部初始化， state 狀態可以透過 this.setstate 方法進行更新
                    ， setstate 會使元件重新渲染。<br />                   
                    </p>

                    <div className="cssbtn">
                        <input className="readMoreButton" name="readMoreButton" type="button" value="Read more" data-key="3" onClick={cik} />
                    </div>
                </div>
            </div>

            {/* 第四篇文章 */}
            <div className="Css" data-aos="fade-up">
                <h2 className="CssTitle">Hook勾子</h2>
                <div> <FaRegCalendarAlt />2020/07/23 <FaCss3Alt />React</div>
                <div className="content mt-3">
                    <p> Hook 可以在不更動元件階層的情況下重複利用狀態，可以拆分一個元件功能到小的函式中，好去維護及拆分。Hook 解決了 React 中我們過去五年在編寫與維護數萬個 component 時所遇到的各種看似不相關的問題。無論你是在學習 React、每天使用它、還是更喜歡有著相似 component 模型的不同函式庫，你可能都會發現其中一些問題。
                    </p>

                    <p className='CSScontent contenthide' data-key="4">
                        使用 Hook 的基本準則 -<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;1. 只能在函式型元件 (function) 使用。<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;2. 只能在最上層呼叫，迴圈也不能。<br />
                        Hook 基本三種類型 - <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;1. useState 可在函式型元件使用 state 狀態。<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;2. useEffect 可在函式型元件使用生命週期方法。<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;3. useContext 可在函式型元件使用Context API。<br />
                    </p>

                    <div className="cssbtn">
                        <input className="readMoreButton" name="readMoreButton" type="button" value="Read more" data-key="4" onClick={cik} />
                    </div>
                </div>
            </div>

            {/* 第五篇文章 */}
            <div className="Css" data-aos="fade-up">
                <h2 className="CssTitle">生命週期</h2>
                <div> <FaRegCalendarAlt />2020/07/23 <FaCss3Alt />React</div>
                <div className="content mt-3">
                    <p> 每一個 component 都有數個 「生命週期方法」。
                    </p>
                    <img src={lifecycle} alt="life-cycle" className="life-cycle"/>

                    <p className='CSScontent contenthide' data-key="5">
                    ＊Mounting<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;當一個 component 的 instance 被建立且加入 DOM 中時，其生命週期將會依照下列的順序呼叫這些方法：<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;constructor()<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;static getDerivedStateFromProps()<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;render()<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;componentDidMount()<br/>
                        
                    ＊更新<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;當 prop 或 state 有變化時，就會產生更新。當一個 component 被重新 render 時，其生命週期將會依照下列的順序呼叫這些方法：<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;static getDerivedStateFromProps()<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;shouldComponentUpdate()<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;render()<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;getSnapshotBeforeUpdate()<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;componentDidUpdate()<br/>

                    ＊Unmounting<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;當一個 component 被從 DOM 中移除時，這個方法將會被呼叫：<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;componentWillUnmount()<br/>

                    </p>

                    <div className="cssbtn">
                        <input className="readMoreButton" name="readMoreButton" type="button" value="Read more" data-key="5" onClick={cik} />
                    </div>
                </div>
            </div>

            {/* 第六篇文章 */}
            <div className="Css" data-aos="fade-up">
                <h2 className="CssTitle">react-router-dom</h2>
                <div> <FaRegCalendarAlt />2020/07/23 <FaCss3Alt />React</div>
                <div className="content mt-3">
                    <p>如果要用 React 做一個 SPA，第一個想到的第三方套件就是react-router 了，什麼是 SPA ??
                        就是將網頁以動態寫入，而非以傳統重新整理的方式呈現一個新的網頁，這樣可以提升我們的使用者體驗。<br/>
                        其實 react 很適合拿來做 SPA 這種網站，只要我們告訴他什麼時候要 render 什麼就能呈現我們要的，那麼要實現這樣的效果，就得藉由 react-router 的幫忙。
                    </p>

                    <p className='CSScontent contenthide' data-key="6">
                    ＊ react-router-dom 基本包含了四個元件<br />
                    &nbsp;&nbsp;&nbsp;&nbsp; 1. BrowserRouter : 是起手是元件，會包裹在 SPA 元件的外層，它使用 HTML5 History API 讓 UI 與 URL 能夠同步 。<br />
                    &nbsp;&nbsp;&nbsp;&nbsp; 2. Switch : 是讓第一個符合 URL 的元件會被渲染，反之，如果沒有 Switch 則所有符合 URL 的元件都會被渲染。<br />
                    &nbsp;&nbsp;&nbsp;&nbsp; 3. Route : 是定義元件相對應的 path，當 path 符合目前的 URL 時將會被渲染。<br />
                    &nbsp;&nbsp;&nbsp;&nbsp; 4. Link : 像是 HTML 的 ＜ａ＞，能夠在點擊後轉變目前的 Location。       
                    </p>

                    <div className="cssbtn">
                        <input className="readMoreButton" name="readMoreButton" type="button" value="Read more" data-key="6" onClick={cik} />
                    </div>
                </div>
            </div>

            {/* 第七篇文章 */}
            <div className="Css" data-aos="fade-up">
                <h2 className="CssTitle">export default 與 export 的區別</h2>
                <div> <FaRegCalendarAlt />2020/08/23 <FaCss3Alt />React</div>
                <div className="content mt-3">
                    <p>export 與 export default均可用於導出常數、函数、文件、模塊</p>

                    <p className='CSScontent contenthide' data-key="7">
                        &nbsp;&nbsp;&nbsp;&nbsp;＊ 你可以在其他文件或模塊中透過 import 導入，其方便使用。<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;＊ 在任何文件模塊中，export 及 import 可以是多個，但 export default 只能只有一個。<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;＊ export 導入時，必須加上｛｝，export default 則不用。<br />                 
                    </p>

                    <div className="cssbtn">
                        <input className="readMoreButton" name="readMoreButton" type="button" value="Read more" data-key="7" onClick={cik} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReactArticle;
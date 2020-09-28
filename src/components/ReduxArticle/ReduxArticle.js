import React from 'react'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import './ReduxArticle.css'

import ReduxStore from '../Image/ReduxStore.png'
import ReduxFlow from '../Image/ReduxFlow.png'
import ReduxProvider from '../Image/reduxProvider.jpg'

function ReduxArticle () {

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
                <h2 className="CssTitle">關於Redux</h2>
                <div> <FaRegCalendarAlt />2020/07/23 <FaCss3Alt />Redux</div>
                <div className="content mt-3">
                    <p>Redux 是一個用於管理狀態的 library，它解決了當 React app 龐大時，狀態難以管理及維護的問題。</p>
                    <img className="ReduxStoreImg" src={ReduxStore} alt="ReduxStore"/>

                    <p className='CSScontent contenthide' data-key="1">
                        ＊在沒有使用 Redux 的情況下(如左圖)，綠色子 component 要和父層 component 通訊就得一層一層調用上去，如果我們的 component 一多，這些數據
                        的傳遞將會非常難管理與維護。<br />
                        ＊用了 Redux 後()如右圖，我們就可以把數據都放在公共儲存區(Store)，而綠色子 component 要改變數據，只要去改 Store 對應的數據即可，並且其他 component 也會自動感知到 Store 的變化，自動更新。<br />
                        ＊針對 JS 應用的可預測狀態容器。<br />
                        ＊Redux = Flux + Elm<br />
                        ＊是為了 React 而設計的資料流框架，簡化與增加強 Flux 的架構。<br />
                    </p>

                    <div className="cssbtn">
                        <input className="readMoreButton" name="readMoreButton" type="button" value="Read more" data-key="1" onClick={cik} />
                    </div>
                </div>
            </div>

            {/* 第二篇文章 */}
        <div className="Css" data-aos="fade-up">
                <h2 className="CssTitle">Redux的運作流程</h2>
                <div> <FaRegCalendarAlt />2020/07/23 <FaCss3Alt />Redux</div>
                <div className="content mt-3">
                    <p>Action : 一個物件，描述要對資料做什麼事。<br/>
                    Action Creator : 封裝action，方便管理。<br/>
                    Store : 負責所有數據的儲存，每個專案只會有一個 Sotre。<br/>
                    Reducer : 處理邏輯，接收 action 和 state，並回傳新的 state 給 store。<br/>

                    </p>
                    <img className="ReduxFlowImg" src={ReduxFlow} alt="ReduxStore"/>

                    <p className='CSScontent contenthide' data-key="2">
                        ＊改變 State 流程 :<br />
                        &nbsp;&nbsp;&nbsp;&nbsp; 1. React Component 的某件被觸發，發起 action，並透過 dispatch (調度) 方法傳 action 給 Store。<br />
                        &nbsp;&nbsp;&nbsp;&nbsp; 2. Store 再把之前的 state 和傳來的 action 給 Reducer。<br />
                        &nbsp;&nbsp;&nbsp;&nbsp; 3. Reducer 接收到後會回傳新的 state 給 Store。<br />
                        &nbsp;&nbsp;&nbsp;&nbsp; 4. Store 用新的 state 替換掉舊的 state。<br />
                        &nbsp;&nbsp;&nbsp;&nbsp; 5. React Component 感知到 state 發生改變，從 Store 重新取數據，更新畫面。<br />
                        ＊用生活化的方式比喻：<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;借書的人（React Components）提出借書要求（Action）給 圖書館管理員（Store）<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;圖書館管理員（Store）查看他的紀錄本（Reducers）查詢狀況<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;找到後再給借書的人（React Components）<br />
                    </p>

                    <div className="cssbtn">
                        <input className="readMoreButton" name="readMoreButton" type="button" value="Read more" data-key="2" onClick={cik} />
                    </div>
                </div>
            </div>

            {/* 第三篇文章 */}
        <div className="Css" data-aos="fade-up">
                <h2 className="CssTitle">Redux的三大原則</h2>
                <div> <FaRegCalendarAlt />2020/07/23 <FaCss3Alt />Redux</div>
                <div className="content mt-3">
                <p>
                ＊Store 是唯一的<br />
                ＊Store 是唯讀的<br />
                ＊Reducer 必須是 pure function<br />
                </p>

                    <p className='CSScontent contenthide' data-key="3">
                        1. 單一真相來源 :<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;你的整個應用中的 state 狀態，會儲存在單一個 store 之中的一個物件樹狀結構裡。<br />
                        2.狀態是唯讀的：<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;唯一能更動狀態是發送一個 action，action 是一個描述發生了什麼事的純物件。<br />
                        3.更動只能用純函式進行：<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;要指示狀態樹要如何依 action 來做改變，你需要撰寫純粹的歸納函式(reducers)<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;(previousState , action)＝＞newState<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;(前一個 / 物前狀態 , 動作)＝＞新狀態。<br />
                        純函式必須滿足下列條件 :<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;＊給定相同的輸入值(例如 1 , 2)，一定會回傳相同輸出值結果(輸出 3 )。<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;＊不會改變原始輸入參數，或是外部環境，所以不會產生副作用。(如果 return 了 console 或 alert 等等 就不是個純函式了)<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;＊不依賴任何外部的狀態(變數之類的)。<br />
                        純函式的優點 : <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;＊程式碼可以簡單化，閱讀性提高。<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;＊較為封閉與固定，可重複利用性高。<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;＊易於單元測試(Unit Test)與除錯。<br />
                    </p>

                    <div className="cssbtn">
                        <input className="readMoreButton" name="readMoreButton" type="button" value="Read more" data-key="3" onClick={cik} />
                    </div>
                </div>
            </div>

             {/* 第四篇文章 */}
        <div className="Css" data-aos="fade-up">
                <h2 className="CssTitle">Redux套用七步驟</h2>
                <div> <FaRegCalendarAlt />2020/07/23 <FaCss3Alt />Redux</div>
                <div className="content mt-3">
                <p>
                1. 從 redux 模組中匯入 create store 函式。<br />
                2. 撰寫一個 reducer (歸納)函式。<br />
                3. 由寫好的 reducer 建立出 store。<br />
                4. 撰寫一個 render (渲染)函式，在狀態有更動的時候，做重新呈現。<br />
                5. 第一次調用 render，做初始呈現。<br />
                6. 訂閱 render 函式到 store 中。<br />
                7. 觸發事件時要呼叫 store.dispatch(action)。<br />
                </p>
                </div>
            </div>

            {/* 第五篇文章 */}
        <div className="Css" data-aos="fade-up">
                <h2 className="CssTitle">Provider 元件說明</h2>
                <div> <FaRegCalendarAlt />2020/07/23 <FaCss3Alt />Redux</div>
                <div className="content mt-3">
                <p>
                import ｛Provider｝ from "react-redux"<br />
                ＊react-redux 套件提供了 Provider 組件的 store 屬性來傳遞上面用建立的 store 的資料。<br />
                
                </p>
                    <img className="ReduxFlowImg" src={ReduxProvider} alt="ReduxStore"/>

                    <p className='CSScontent contenthide' data-key="5">
                        ＊ 必定是整個應用的最上層 (外層 index.js) 的元件。<br />
                        ＊ 主要是為了之後使用 connect 方法來綁定 React 和 Redux 的 store。<br />
                        ＊ 使用了 React 中的 context (上下文)特性，可以穿透元件樹結構層級組件的傳遞資料，props 不需要一層層的傳遞。<br />
                    </p>

                    <div className="cssbtn">
                        <input className="readMoreButton" name="readMoreButton" type="button" value="Read more" data-key="5" onClick={cik} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReduxArticle;
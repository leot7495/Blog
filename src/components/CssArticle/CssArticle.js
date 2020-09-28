import React from "react";
import { FaRegCalendarAlt } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import './CssArticle.css'

function CssArticle({ cssContent }) {

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
            {cssContent.map((cssContent, index) => {
                return (
                    <div className="Css" key={index}>
                        <h2 className="CssTitle">{cssContent.CssTitle}</h2>
                        <div> <FaRegCalendarAlt />{cssContent.CreateDate.substring(0, 10)} <FaCss3Alt />{cssContent.Category}</div>
                        <div className="content mt-3">
                            {cssContent.Description}
                            <div className="cssbtn">
                                <input className="readMoreButton" type="button" value="Read more" />
                            </div>
                        </div>
                    </div>
                )
            })}
            {/* 第一篇文章 */}
            <div className="Css" data-aos="fade-up">
                <h2 className="CssTitle">CSS-flex</h2>
                <div> <FaRegCalendarAlt />2020/07/21 <FaCss3Alt />CSS</div>
                <div className="content mt-3">
                    <p>flex 是 CSS 常見的排版方式之一，相較於其他傳統方式簡易許多，想要使用 flex 只要將外容器的 display 設定為 flex 或 inline-flex ，差別在於flex容器不會隨著內容變化。</p>

                    <p className='CSScontent contenthide' data-key="1">
                        ＊flex-direction<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;flex-direction 可以決定主軸的方向，主軸的方向將會影響容器元素的排序順序及方向，其中 row 為預設值。<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;1. row : 主軸從左至右<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;2. row-reverse : 主軸從右至左<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;3. column : 主軸由上至下<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;4. column-reverse : 主軸由下至上<br />
                        ＊flex-wrap <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;flex-wrap可以設定當元素超出容器時該怎麼顯示，預設為nowrap也就是超出空間時不換行，而wrap當容器空間不夠顯示時會換行。<br />
                        ＊justify-content<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;justify-content可以讓我們設置容器內的箱子如何依據主軸對齊。<br />
                        ＊align-items<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;align-items可以讓我們設置容器內的箱子如何根據副軸對齊，justify-content是主軸對齊，align-items則是副軸對齊。</p>

                    <div className="cssbtn">
                        <input className="readMoreButton" name="readMoreButton" type="button" value="Read more" data-key="1" onClick={cik} />
                    </div>
                </div>
            </div>
            {/* 第二篇文章 */}
            <div className="Css" data-aos="fade-up">
                <h2 className="CssTitle">CSS-position</h2>
                <div> <FaRegCalendarAlt />2020/07/22 <FaCss3Alt />CSS</div>
                <div className="content mt-3">
                    <p>Flex 的盒子模型具有水平的起點與終點 ( main start、main end )，垂直的起點與終點 ( cross start、cross end )，水平軸與垂直軸 ( main axis、cross axis )，然後元素具有水平尺寸與垂直尺寸 ( main size、cross size )，這些都是相當重要的布局規畫。</p>

                    <p className='CSScontent contenthide' data-key="2">
                        relative<br />
                        該關鍵字下，元素先放置在未添加定位時的位置，再在不改變頁面佈局的前提下調整元素位置（因此會在此元素未添加定位時所在位置留下空白）。position:relative 對table-*-group, table-row, table-column, table-cell, table-caption 元素無效。<br />
                        absolute<br />
                        元素會被移出正常文檔流，並不為元素預留空間，通過指定元素相對於最近的非static 定位祖先元素的偏移，來確定元素位置。絕對定位的元素可以設置外邊距（margins），且不會與其他邊距合併。<br />
                        fixed<br />
                        元素會被移出正常文檔流，並不為元素預留空間，而是通過指定元素相對於屏幕視口（viewport）的位置來指定元素位置。元素的位置在屏幕滾動時不會改變。打印時，元素會出現在的每頁的固定位置。fixed屬性會創建新的層疊上下文。當元素祖先的  transform, perspective 或  filter 屬性非none時，容器由視口改為該祖先。</p>

                    <div className="cssbtn">
                        <input className="readMoreButton" name="readMoreButton" type="button" data-key="2" value="Read more" onClick={cik}/>
                    </div>
                </div>
            </div>
            {/* 第三篇文章 */}
            <div className="Css" data-aos="fade-up">
                <h2 className="CssTitle">CSS-background</h2>
                <div> <FaRegCalendarAlt />2020/07/22 <FaCss3Alt />CSS</div>
                <div className="content mt-3">
                    <p>CSS background 背景屬性是網頁設計相當重要的一環，也是網頁整體風格呈現的基礎，在 CSS background 背景設計系列中，包含許多重要屬性，例如用來設計網頁背景顏色的 background-color、顯示背景圖片的 background-image、設定背景位置的 background-position 等，都是許多設計師常用到的屬性，熟悉這些屬性後，就能夠很輕鬆的設計出單純色彩的網頁背景風格，也可以搭配高質感網頁背景圖片來呈現整體網頁視覺效果。</p>

                    <p className='CSScontent contenthide' data-key="3">relative<br />
                        ＊background-color 背景顏色 <br />
                        ＊background-image 背景圖片<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;background-image:url(' 背景圖片網址 ');。<br />
                        ＊background-position 背景位置<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;能為元素設定背景圖顯示位置。
                        ＊background-attachment 背景圖片固定<br />
                        ＊background-repeat 能為元素設定背景圖重複方式<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;no-repeat 不重複顯示、repeat-x 沿 X 軸重複顯示、repeat-y 沿 Y 軸重複顯示。<br />
                    </p>
                    <div className="cssbtn">
                        <input className="readMoreButton" name="readMoreButton" type="button" data-key="3" value="Read more" onClick={cik}/>
                    </div>
                </div>
            </div>
            {/* 第四篇文章 */}
            <div className="Css" data-aos="fade-up">
                <h2 className="CssTitle">CSS-transform</h2>
                <div> <FaRegCalendarAlt />2020/07/22 <FaCss3Alt />CSS</div>
                <div className="content mt-3">
                    <p>CSS3 transform 屬性的功能提供了網頁設計中對於網頁元素（element）變形特效的突破，透過 CSS3 transform 屬性，網頁設計師可以很輕易的讓網頁元素（element）呈現出旋轉（rotate）、縮放（scale）、移動（move）以及傾斜（skew）的特殊效果，讓傳統網頁設計中，需要透過繪圖軟體才能達到的效果，透過 CSS3 transform 屬性快速達成。</p>

                    <p className='CSScontent contenthide' data-key="4">
                        ＊移動 <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;translate()、translateX()、translateY() 預設元素的中央為基準，X Y 軸上移動，單位為 px。<br />
                        ＊縮放<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;scale()、scaleX()、scaleY() 預設元素的中央為基準，X Y軸上縮放倍數。<br />
                        ＊旋轉<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;rotate() 預設元素的中央為準，順時鐘旋轉，單位為 deg 角度。<br />
                        ＊傾斜<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;skew()、skewX()、skewY() 預設元素的中央為基準，順時鐘，X Y 為在二軸上的傾斜角度。<br />
                        ＊改變基準點<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;transform-origin : 水平位置 0% 垂直位置 0%。
                        </p>

                    <div className="cssbtn">
                        <input className="readMoreButton" name="readMoreButton" type="button" data-key="4" value="Read more" onClick={cik}/>
                    </div>
                </div>
            </div>
            {/* 第五篇文章 */}
            <div className="Css" data-aos="fade-up">
                <h2 className="CssTitle">CSS-transition</h2>
                <div> <FaRegCalendarAlt />2020/07/22 <FaCss3Alt />CSS</div>
                <div className="content mt-3">
                    <p>CSS3 transition 屬性是一種 CSS3 的轉場效果，網頁設計師可以透過 CSS3 transition 屬性的效果來調整網頁元素變化的特效，例如 DIV 區塊尺寸改變的效果、網頁文字變色的緩慢效果，只要利用 CSS3 transition 屬性值的秒數設定，就可以輕易的創造出慢動作（Slow Motion）的感覺。不過 CSS3 的 transition 屬性在較舊版的瀏覽器並不支援，。</p>

                    <p className='CSScontent contenthide' data-key="5">
                        ＊transition-duration : 播放時間 (s)<br />
                        ＊transition-property : 轉換屬性 ex : width background-color<br />
                        ＊transition-timing-function : 轉換方法<br />
                        ＊transition-delay : 延遲時間<br />
                        ＊transition : 播放時間 轉換屬性 轉換方法 延遲時間  (綜合)<br />    
                    </p>

                    <div className="cssbtn">
                        <input className="readMoreButton" name="readMoreButton" type="button" data-key="5" value="Read more" onClick={cik}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CssArticle;
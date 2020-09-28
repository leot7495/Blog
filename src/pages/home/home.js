import React , {useEffect} from 'react'
import $ from 'jquery'
import { IoMdTime } from 'react-icons/io'
import { AiFillBell } from 'react-icons/ai'
import { AiTwotoneBug } from 'react-icons/ai'


import headerimg from './header.jpg'
import contentimg from './contentimg.jpg'
import './home.css'

function Home() {

    //向上滾動
    function scrollYTop () {
        if (window.pageYOffset > 0) {
            $([document.documentElement, document.body]).animate({ //animate JQuery 動畫較果
                scrollTop: 0 
              }, 600); //0.6滾動時間0.6秒
        }
    }

    useEffect(()=>{
        scrollYTop()
    },[])

    return (
        <>
            <div className="header">
                <img src={headerimg} alt="headerimg" width="100%" />
            </div>


            {/* 兩段文圖 */}
            <div className="container">
                <div className="row">
                    <div className="col contenttext" data-aos="fade-up">
                    沒有工作不委屈，不工作你就會更委屈。

                    如果沒有工作，生活會是空虛的。

                    一份有意義的工作

                    能讓人獲得成就感與滿足感，

                    即使是辛苦的工作，

                    只要我們覺得樂在其中，

                    也能「累得好愉快」。

                    但如果認為上班有如勞役，

                    工作時也充滿負面情緒，

                    當然就會「累得不滿足」。
                    </div>
                    <div className="col contentimg" data-aos="fade-up">
                        <img src={contentimg} alt="headerimg" width="100%" />
                    </div>
                </div>
            </div>


            {/* 中間長扁圖 */}
            <div className="longImg"></div>


            {/* 文章 */}
            <div class="threeContent">
                <div className="oneContent1"><IoMdTime className="homeIcons"/>
                    <p>不斷的練習 是你最好的答案</p>
                    <h4>
                    在學習的過程中，就不是單靠有熱情有動機可以撐得過去，不斷的練習、不斷地找尋答案才能不斷的進步，這段時間是過程中相對痛苦的一段時間，因此前一點提到有同好一起互相扶持，在此時就顯得更重要。
                    </h4>
                </div>
                <div className="oneContent2"><AiFillBell className="homeIcons"/>
                    <p>先問「為什麼」</p>
                    <h4>
                    常常不知道自己真正要的是什麼，都只想到「怎麼做」和「做什麼」，看了這本書之後提醒自己，只有找到「為什麼」，事情才做的長久。
                    </h4>
                </div>
                <div className="oneContent3"><AiTwotoneBug className="homeIcons"/>
                    <p>能留人的企業是因為創造歸屬感</p>
                    <h4>如果員工沒有歸屬感，只要別人多給他一點錢，馬上就跳槽了，畢竟他只認為是一份工作而已。
                        而有歸屬感的人認為這是個使命，甚至可能婉拒更好的機會，堅守這份他認為有意義的工作。
                    </h4>
                </div>
            </div>
        </>
    )
}
export default Home
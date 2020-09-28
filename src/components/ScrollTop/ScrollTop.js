import React , {useState, useEffect} from 'react'
import $ from 'jquery'
import { FaArrowUp }from 'react-icons/fa'
import './ScrollTop.css'


function ScrollTop () {
    const [windowScrollY, setWindowScrollY] = useState(0) ;

    function Scrolladd () {
        window.addEventListener('scroll' , Scroll)
    }

    function Scroll () {
        setWindowScrollY(window.scrollY)
    }

    // 點擊 icon 向上滾動
    function scrollYTop () {
        if (window.pageYOffset > 0) {
            $([document.documentElement, document.body]).animate({ //animate JQuery 動畫較果
                scrollTop: 0 
              }, 600); //0.6滾動時間0.6秒
        }
    }

        useEffect(()=>{
            Scrolladd()
        },[])
    return (
        <>
            <div className="ScrollTopComponent" style={{display:(windowScrollY > 1200) ? 'block' : 'none'}}>
                <FaArrowUp className="scrollTopIcon" onClick={scrollYTop}/>
            </div>
        </>
    )
}

export default ScrollTop;
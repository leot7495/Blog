import React , {useEffect} from 'react'
import $ from 'jquery'
import headerimg from '../../components/Image/BlogImage.jfif'
import Sidebar from '../../components/sidebar/Sidebar'
import JsContent from '../../components/JSArticle/JSArticle'

import '../BlogCSS/Blog.css'

function BlogJS () {

    //向上滾動
    function scrollYTop () {
        if (window.pageYOffset > 0) {
            $([document.documentElement, document.body]).animate({ //animate JQuery 動畫較果
                scrollTop: 955 
              }, 600); //0.6滾動時間0.6秒
        }
    }

    useEffect(()=>{
        scrollYTop()
    },[])

    return (
        <>
            <div className="blogbackground">
            <div className="header">
                <img src={headerimg} alt="headerimg" width="100%" />
                <h1 className="Blogtext">Blog JavaScript</h1>
            </div>

            <div className="containerDiv">
                <div className="navMedai">
                    <div className="mediaSidebar">
                        <Sidebar />
                    </div>
                    <div className="mediaCSScontent">
                        <JsContent />
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default BlogJS;
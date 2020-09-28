import React , {useEffect} from 'react'
import $ from 'jquery'
import headerimg from '../../components/Image/BlogImage.jfif'
import Sidebar from '../../components/sidebar/Sidebar'

import ReduxContent from '../../components/ReduxArticle/ReduxArticle'
import '../BlogCSS/Blog.css'


function BlogRedux (){
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
                <h1 className="Blogtext">Blog Redux</h1>
            </div>

            <div className="containerDiv">
                <div className="navMedai">
                    <div className="mediaSidebar">
                        <Sidebar />
                    </div>
                    <div className="mediaCSScontent">
                        <ReduxContent />
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default BlogRedux;
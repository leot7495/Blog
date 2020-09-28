import React, { useState, useEffect } from "react";
import $ from 'jquery'
import headerimg from '../../components/Image/BlogImage.jfif'
import CssArticle from '../../components/CssArticle/CssArticle'
import Sidebar from '../../components/sidebar/Sidebar'

import './Blog.css'

function BlogCSS() {

    //向上滾動
    function scrollYTop () {
        if (window.pageYOffset > 0) {
            $([document.documentElement, document.body]).animate({ //animate JQuery 動畫較果
                scrollTop: 0 
              }, 600); //0.6滾動時間0.6秒
        }
    }

    const [cssContent, setCssContent] = useState([]);
    async function getcssContent() {
        // 連接的伺服器資料網址
        const url = "http://localhost:3001/csscontent";

        // 注意header資料格式要設定，伺服器才知道是json格式
        const request = new Request(url, {
            method: "GET",
            headers: new Headers({
                Accept: "application/json",
                "Content-Type": "appliaction/json",
            }),
        });
        const response = await fetch(request);
        const data = await response.json();
        // 設定資料
        setCssContent(data);
    }

    useEffect(() => {
        getcssContent();
    }, [])

    useEffect(()=>{
        scrollYTop()
    },[])
    
    return (
        <>
            <div className="blogbackground">
            <div className="header">
                <img src={headerimg} alt="headerimg" width="100%" />
                <h1 className="Blogtext">Blog CSS</h1>
            </div>

            <div className="containerDiv">
                <div className="navMedai">
                    <div className="mediaSidebar">
                        <Sidebar />
                    </div>
                    <div className="mediaCSScontent">
                        {cssContent ? <CssArticle cssContent={cssContent} /> : ''}
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default BlogCSS
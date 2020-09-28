import React , { useEffect } from 'react'
import $ from 'jquery'
import WorksHeaderImg from './WorksHeaderImg.jpg'

import Clock from '../../components/WorksItems/clock/clock'
import Abacus from '../../components/WorksItems/abacus/abacus'
import ClickandDragtoScroll from '../../components/WorksItems/Click and Drag to Scroll/Click_and_Drag_to_Scroll'
import TodoList from '../../components/WorksItems/todoList/todoList'
import Musickey from '../../components/WorksItems/musickey/musickey'
import OOXX from '../../components/WorksItems/OOXX/ooxx'

import './WorksList.css'

function WorksList () {

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
        <div className="">
            <img src={WorksHeaderImg} alt="WorksHeaderImg" width="100%" className="WorksHeaderImg"/>
        </div>
        <div className="WorksSlice">
            <div className="WorksItems"><Clock /></div>
            <div className="WorksItems"><Abacus /></div>
            <div className="WorksItems"><ClickandDragtoScroll /></div>
            <div className="WorksItems"><TodoList /></div>
            <div className="WorksItems"><Musickey /></div>
            <div className="WorksItems"><OOXX /></div>
        </div>
        </>
    )
}

export default WorksList;
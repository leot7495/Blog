/* eslint-disable react-hooks/rules-of-hooks */
import React , {useEffect} from 'react'
import './ooxx.css'

function ooxx () {

    function ck () {
        const cells = document.querySelectorAll('.cell');
        let clickNumber = 0;

        cells.forEach(element => {

            element.addEventListener('mouseenter' , ()=>{
                if (clickNumber === 0 || clickNumber % 2 === 0) {
                    element.classList.add('X')
                }else{
                    element.classList.add('O')
                }
            })

            element.addEventListener('click' , ()=>{
                // 判斷className 屬性 是否有 oko okx 沒有的話再往下跑
                if (element.className.search('OkX') !== -1 || element.className.search('OkO') !== -1) return
                // CSS 有個如果沒有那個屬性 , 就可以加上那個屬性 用在mouseleave mouseenter
                if (clickNumber === 0 || clickNumber % 2 === 0) {
                    element.classList.add('OkX')
                    clickNumber++
                }else{
                    element.classList.add('OkO')
                    clickNumber++
                }
            })
            element.addEventListener('mouseleave' , ()=>{

                if (clickNumber === 0 || clickNumber % 2 === 0) {
                    element.classList.remove('X')
                }else{
                    element.classList.remove('O')
                }
            })
            
        });
    }

    useEffect(()=>{
        ck()
    },[])

    return (
        <>
        <div className="ooxx">
            <div className="cell" data-key="1"></div>
            <div className="cell" data-key="2"></div>
            <div className="cell" data-key="3"></div>
            <div className="cell" data-key="4"></div>
            <div className="cell" data-key="5"></div>
            <div className="cell" data-key="6"></div>
            <div className="cell" data-key="7"></div>
            <div className="cell" data-key="8"></div>
            <div className="cell" data-key="9"></div>
        </div>
        </>
    )
}

export default ooxx;
import React , { useEffect } from 'react';

import './ClickandDragtoScroll.css'

function Click_and_Drag_to_Scroll () {

    function scrollX () {
        const items = document.querySelector('.items')
        let isDown = false;
    let startX;
    let scrollLeft;

    items.addEventListener('mousedown' , (e) => {
        items.classList.add('active');
        isDown = true;
        // offset：以該滑鼠游標所在的容器的左上角為原點（0,0），每間瀏覽器實做不同。
        // page：以 HTML Document 文件左上角為原點（0,0）。
        // Element.scrollLeft 属性可以读取或设置元素滚动条到元素左边的距离。如果沒有滾動條那值會是0
        startX = e.pageX - items.offsetLeft    // 滑鼠點的 X軸 - 元件的X軸
        scrollLeft = items.scrollLeft
    })
    items.addEventListener('mouseleave', () => {
        items.classList.remove('active');
        isDown = false;
    });
    items.addEventListener('mouseup' , () => {
        items.classList.remove('active');
        isDown = false;
    })
    items.addEventListener('mousemove' , (e) => {
        if (!isDown) return;
        // e.preventDefault;
        const x = e.pageX - items.offsetLeft;
        const offset = x - startX;
        items.scrollLeft = scrollLeft - offset
        
    })
    }

    useEffect(()=>{
        scrollX()
    },[])

    return (
        <>
            <div class="items">
                <div class="item item1">01</div>
                <div class="item item2">02</div>
                <div class="item item3">03</div>
                <div class="item item4">04</div>
                <div class="item item5">05</div>
                <div class="item item6">06</div>
                <div class="item item7">07</div>
                <div class="item item8">08</div>
                <div class="item item9">09</div>
                <div class="item item10">10</div>
                <div class="item item11">11</div>
                <div class="item item12">12</div>
                <div class="item item13">13</div>
                <div class="item item14">14</div>
                <div class="item item15">15</div>
                <div class="item item16">16</div>
                <div class="item item17">17</div>
                <div class="item item18">18</div>
                <div class="item item19">19</div>
                <div class="item item20">20</div>
                <div class="item item21">21</div>
                <div class="item item22">22</div>
                <div class="item item23">23</div>
                <div class="item item24">24</div>
                <div class="item item25">25</div>
            </div>
        </>
    )
}

export default Click_and_Drag_to_Scroll;
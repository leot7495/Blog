/* eslint-disable react-hooks/rules-of-hooks */
import React , { useEffect } from 'react'
import './clock.css'

function clock () {

    function clockplay () {
        const clock = new Date;
        const Hour = clock.getHours()
        const Minute = clock.getMinutes()
        const Second = clock.getSeconds()

        const Secondhand = document.querySelector('.Secondhand');

        if (Secondhand === null) return;
        Secondhand.style.transform = `rotate(${(Second / 60) * 360 }deg)`;

        const Minutehand = document.querySelector('.Minutehand');
        Minutehand.style.transform = `rotate(${(Minute / 60) * 360 }deg)`;
        
        const Hourhand = document.querySelector('.Hourhand');
        Hourhand.style.transform = `rotate(${(Hour / 60) * 360 }deg)`;
        
    }
    
    useEffect(()=>{
        setInterval(()=>{
            clockplay()
        },1000)    
    },[])

    return (
        <>
        <div className="clockPosition">
            <div className="clock">
                <div className="Hourhand"></div>
                <div className="Minutehand"></div>
                <div className="Secondhand"></div>

                <div className="number number1">1</div>
                <div className="number number2">2</div>
                <div className="number number3">3</div>
                <div className="number number4">4</div>
                <div className="number number5">5</div>
                <div className="number number6">6</div>
                <div className="number number7">7</div>
                <div className="number number8">8</div>
                <div className="number number9">9</div>
                <div className="number number10">10</div>
                <div className="number number11">11</div>
                <div className="number number12">12</div>
            </div>
        </div>
        
        </>
    )
}
export default clock;
import React from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery';

import './Navbar.css'
import "aos/dist/aos.css";
import AOS from "aos/dist/aos.js";


window.jQuery = $;
window.$ = $;
global.jQuery = $;

$(function () {
  AOS.init({
    offset: 100,
    duration: 1400,
  });
  $(".nav-link").on('click',function() {
    $('.navbar-toggler').removeClass('collapsed');
  })
});
function navbar() {

    function windowheight () {
        const scrol = document.querySelector('.navbar');
        if (this.scrollY > 0) {
            scrol.classList.add('navbarscroll')
        } else{
            scrol.classList.remove('navbarscroll')
        }
    }
    window.addEventListener('scroll' , windowheight)

    return (
        <>
        <div className="navheight">
            <nav className="navbar navbar-expand-lg nav fixed-top" >
                <Link className="navbar-brand" to="/">我的部落格</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <Link className="nav-link" to="/">
                            首頁
                        </Link>
                        <Link className="nav-link"  to="/BlogCSS">
                            部落格
                        </Link>
                        <Link className="nav-link"  to="/Works">
                            小作品
                        </Link>
                    </ul>
                </div>
            </nav>
        </div>
        </>
    )
}

export default navbar
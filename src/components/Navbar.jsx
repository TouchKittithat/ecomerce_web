import React from 'react';
import "../style.css/NavStyle.css"
import logo from "../assets/logo-css.png"

function Navbar(){
    return (
    <section id="nav">
        <div className="-brand">
            <div className="-logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="-name-logo">
                <p>Ecommerce</p>
            </div>
        </div>


        <div className="-search">
            <div className="-search-box">
                <input type='text' className='-search-input' placeholder='สินค้าลดราคา จ่ายง่าย ขนส่งไว'></input>
            </div>
        </div>
        <div className="-cart">
            <div className="-logo-cart">
                <img src="https://via.placeholder.com/30x50" alt="" />
            </div>
        </div>
    </section>
    
    );
}
export default Navbar;
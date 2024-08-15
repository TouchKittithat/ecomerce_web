import React from 'react';
import "../style.css/NavStyle.css"
import logo from "../assets/logo-css.png"

function Navbar(){
    return (
    <section id="nav">
        <section id="topbar">
            <div className="bar">
                <div className='box-1'>
                    <a href="#" >Saller Center</a>|
                    <a href="#" >Start Selling</a>|
                    <a href="#" >Download</a>|
                    <a href="#" >Follow us on</a>
                </div>
                <div className='box-2'>
                    <a href="#" >Nontifications</a>|
                    <a href="#" >Help</a>|
                    <a href="#" >About</a>|
                    <a href="#" >Sign Up</a>|
                    <a href="#" >Login</a>
                </div>
            </div>
        </section>
        <section id="navbar">
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
                    <img src="https://via.placeholder.com/50x50" alt="" />
                </div>
            </div>
        </section>
    </section>
    
    );
}
export default Navbar;
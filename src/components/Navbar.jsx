import React from 'react';
import "../style.css/NavStyle.css"

function Navbar(){
    return (
    <section id="nav">
        <div className="-brand">
            <div className="-logo">
                <img src="https://via.placeholder.com/97x50" alt="" />
            </div>
        </div>
        <div className="-search">
            <div className="-search-box">
                <input type='text' className='-search-input' placeholder='ลดราคา'></input>
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
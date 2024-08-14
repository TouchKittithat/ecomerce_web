import React from 'react';
import "../style.css/ContentStyle.css"

function Contents(){
    return (
    <section id="content">
        <section id="cards">
            <div className="card">
                <div className="-thumb1">
                    <img src="https://via.placeholder.com/780x270" alt="banner" />
                </div>
                <div className="-thumb2">
                    <img src="https://via.placeholder.com/400x132" alt="banner" />
                </div>
                <div className="-thumb3">
                    <img src="https://via.placeholder.com/400x132" alt="banner" />
                </div>
            </div>
        </section>
    </section>
    )
}

export default Contents;
import React, { Fragment } from 'react'
import style from './Navbar.module.css'

function Navbar(props) {
    return (
        <Fragment >
            <nav className={`navbar sticky-top ${style.navBg}`}>
                <h5><span style={{ color: "coral", fontSize: "45px", fontFamily: "'Arizonia', cursive" }}>U</span>
                    <span style={{ color: "#a4a4a4", fontSize: "40px", fontFamily: "'Amita', cursive" }}>Com</span></h5>
            </nav>

        </Fragment>
    )
}

export default Navbar

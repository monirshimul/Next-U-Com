import React, { Fragment, useState, useEffect } from 'react'
import style from './Navbar.module.css'
import Switch from '@material-ui/core/Switch';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { langChange } from '../../../Actions/LangAction'

function Navbar(props) {


    const [lang, setLang] = useState(true)

    const dispatch = useDispatch();
    //const stateVal = useSelector(state => state)




    // useEffect(() => {
    //     console.log(stateVal.lang.lang)
    // })

    const handleChange = (e) => {
        // console.log("Lang", e.target.checked)

        if (e.target.checked === true) {
            dispatch(langChange("English"))
        } else {
            dispatch(langChange("Bangla"))
        }
        setLang(e.target.checked)


    }
    return (
        <Fragment >
            <nav className={`navbar sticky-top ${style.navBg}`}>
                <h5><span style={{ color: "coral", fontSize: "45px", fontFamily: "'Arizonia', cursive" }}>U</span>
                    <span style={{ color: "#a4a4a4", fontSize: "40px", fontFamily: "'Amita', cursive" }}>Com</span></h5>


                <div className="d-flex justify-content-center align-items-center">
                    <div>
                        <h5 className="" style={{ color: "green", fontSize: "14px", marginTop: "3px" }}>B</h5>
                    </div>
                    <div>
                        <Switch
                            checked={lang}
                            onChange={handleChange}
                            color="primary"
                            name="lang"

                        />
                    </div>
                    <div>
                        <h5 className="" style={{ color: "green", fontSize: "14px", marginTop: "3px" }}>E</h5>
                    </div>

                </div>
            </nav>

        </Fragment>
    )
}

export default Navbar

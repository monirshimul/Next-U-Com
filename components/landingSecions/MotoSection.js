import React, { Fragment, useState, useEffect } from 'react'
import style from './MotoSection.module.css';
import Image from 'next/image'
import zIndex from '@material-ui/core/styles/zIndex';
import VideoBg from './VideoBg';
import { useSelector } from "react-redux";
function MotoSection() {
    const [changeLang, setChangeLang] = useState("")
    const stateVal = useSelector(state => state)
    console.log("stateVal", stateVal.lang.lang)
    useEffect(() => {
        setChangeLang(stateVal.lang.lang)
    })
    //setChangeLang(stateVal.lang.lang)
    return (
        <Fragment>
            <section className="container-fluid">

                <div className="row d-flex justify-content-center" style={{ height: "200px" }}>
                    <img
                        src="/left.svg"
                        alt="Picture of the author"

                        className="img-fluid"
                        style={{ transform: "scaleY(-1)", position: "relative", top: "-80px" }}
                    />
                </div>

                <div className="row d-flex justify-content-around" style={{ position: "relative", top: "-180px" }}>
                    {/* <img
                        src="/cenTwo.svg"
                        className="img-fluid"
                        width="450"
                        height="350"
                        alt="Picture"
                        

                    /> */}
                    <img

                        src="/sideImg.svg"
                        className="img-fluid"
                        width="450"
                        height="350"
                        alt="Picture"


                    />
                </div>



                <div className={`row d-flex justify-content-center py-5 ${style.motoBg}`} style={{}}>
                    <div className="col-sm-10 text-center" style={{ paddingTop: "150px" }}>
                        <hr />
                        {
                            changeLang === "Bangla" ? (
                                <h5 className={`${style.motoLineBangla}`} style={{}}>
                                    আপনার ব্যবসাকে আজই দ্রুততর করুন
                                </h5>
                            ) : (
                                <h5 className={`${style.motoLine}`} style={{}}>
                                    Stimulate Your <span style={{ color: "coral" }}>Business</span> Today
                                </h5>
                            )
                        }

                        <hr />
                        <div className="d-flex justify-content-center">
                            <img

                                src="/moto.svg"
                                className={`img-fluid ${style.anImg}`}
                                width="250"
                                height="250"
                                alt="Picture"


                            />
                        </div>
                        <div className="d-flex justify-content-center">
                            <p className={`${style.motoDes}`}>Now you can control your customer.Your customer will order your product<br />
                                through your order management portal.Accelerate your business by combining facebook and
                                <br /> our Store Management.
                            </p>
                        </div>
                        <div className="d-flex justify-content-center mt-2">
                            <div className={`${style.joinBtn} text-center`}>
                                <h5>Learn How</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section></section>
        </Fragment>
    );
}

export default MotoSection

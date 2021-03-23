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

                <div className="row d-flex justify-content-center align-items-center">
                    {/* <img
                        src="/cenTwo.svg"
                        className="img-fluid"
                        width="450"
                        height="350"
                        alt="Picture"
                        

                    /> */}
                    <div className="col-sm-6 text-center">
                        <img

                            src="/sideImg.svg"
                            className="img-fluid"
                            width="450"
                            height="350"
                            alt="Picture"


                        />
                    </div>


                    <div className="col-sm-4 text-center">
                        {
                            changeLang === "English" ? (
                                <p className={`${style.motoDes}`}>" Now you can control your customer.Your customer will order your product<br />
                                through your <span style={{ color: "#bed82b" }}>Order Management</span> portal.Accelerate your business by combining facebook and
                                <br /> our <span style={{ color: "#db6841" }}>Store Management</span>. "
                        </p>
                            ) : (
                                    <p className={`${style.motoDes}`}>" আপনার ক্রেতা কে আপনি নিজেই এখন নিয়ন্ত্রণ করুন। আপনার ক্রেতা আপনার <span style={{ color: "#bed82b" }}>অর্ডার ম্যানেজমেন্ট</span> পোর্টাল এর মাধ্যমে আপনাকে অর্ডার করবে।<br />
                                ফেসবুক এবং আমাদের <span style={{ color: "#db6841" }}>স্টোর ম্যানেজমেন্ট</span> এর কম্বিনেশন,<br/> আপনার ব্যবসাকে এবার আরও এগিয়ে নিয়ে যাবে। "
                        </p>
                            )
                        }
                        

                    </div>

                </div>



                <div className={`row d-flex justify-content-center py-5 ${style.motoBg}`}>
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
                            {
                                changeLang === "English" ? (
                                    <p className={`${style.motoDesTwo}`}>Now you can control your customer.Your customer will order your product<br />
                                through your order management portal.Accelerate your business by combining facebook and
                                        <br /> our Store Management.
                                    </p>
                                ) : (
                                        <p className={`${style.motoDesTwo}`}>আপনার ক্রেতা কে আপনি নিজেই এখন নিয়ন্ত্রণ করুন। <br />আপনার ক্রেতা আপনার অর্ডার ম্যানেজমেন্ট পোর্টাল এর মাধ্যমে আপনাকে অর্ডার করবে।<br />
                                ফেসবুক এবং আমাদের স্টোর ম্যানেজমেন্ট এর কম্বিনেশন,<br /> আপনার ব্যবসাকে এবার আরও এগিয়ে নিয়ে যাবে।
                                        </p>
                                )
                            }
                            
                            
                        </div>
                        <div className="d-flex justify-content-center mt-2">
                            <div className={`${style.joinBtn} text-center`}>
                                {
                                    changeLang === "English" ? (
                                        <h5>Learn How</h5>
                                    ) : (
                                        <h5>বিস্তারিত দেখুন</h5>
                                    )
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-sm-6 text-center">
                        <h5>Hello</h5>
                    </div>
                    <div className="col-sm-6 text-center">
                        <h5>World</h5>
                    </div>
                </div>
            </section>
            <section></section>
        </Fragment>
    );
}

export default MotoSection

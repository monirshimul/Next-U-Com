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
                            className={`img-fluid ${style.anImg}`}
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
                                    Stimulate Your <span style={{ color: "#fc8621" }}>Business</span> Today
                                </h5>
                            )
                        }

                        <hr />
                        <div className="d-flex justify-content-center">
                            <img

                                src="/moto.svg"
                                className={`img-fluid ${style.anImg}`}
                                style={{animationDelay:"1s"}}
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
                <div className={`row ${style.cardSec}`}>
                    <div className={`col-sm-12 ${style.cardContainer}`}>
                        <div className={`${style.cardHolder}`}>
                            <div className={`${style.content}`}>
                                <h2>ORDER -</h2>
                                
                                <h3>MANAGE</h3>
                                
                                <div className="d-flex justify-content-center" style={{}}>
                                    <img

                                        src="/order.svg"
                                        className={`img-fluid ${style.anImg}`}
                                        style={{animationDelay:"1s"}}
                                        width="150"
                                        height="150"
                                        alt="Picture"


                                    />
                                </div>
                                
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis quis atque odit quos blanditiis
                    dolores dicta tempora commodi ullam voluptatum, quod earum? </p>
                    <div className={`${style.joinBtn}`}><h5>Read More</h5></div>
                            </div>
                        </div>
                        <div className={`${style.cardHolder}`}>
                            <div className={`${style.content}`}>
                                <h2>STORE -</h2>
                                <h3>MANAGE</h3>
                                <div className="d-flex justify-content-center" style={{}}>
                                    <img

                                        src="/store.svg"
                                        className={`img-fluid ${style.anImg}`}
                                        style={{animationDelay:"1.5s"}}
                                        width="150"
                                        height="150"
                                        alt="Picture"


                                    />
                                </div>
                                
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis quis atque odit quos blanditiis
                    dolores dicta tempora commodi ullam voluptatum, quod earum? </p>
                    <div className={`${style.joinBtn} text-center`}><h5>Read More</h5></div>
                            </div>
                        </div>
                        <div className={`${style.cardHolder}`}>
                            <div className={`${style.content}`}>
                                <h2>PRICE -</h2>

                                <h3>PRODUCT</h3>
                                <div className="d-flex justify-content-center" style={{}}>
                                    <img

                                        src="/price.svg"
                                        className={`img-fluid ${style.anImg}`}
                                        style={{animationDelay:"2s"}}
                                        width="150"
                                        height="150"
                                        alt="Picture"


                                    />
                                </div>
                                
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis quis atque odit quos blanditiis
                    dolores dicta tempora commodi ullam voluptatum, quod earum? </p>
                                <div className={`${style.joinBtn} text-center`}><h5>Read More</h5></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`row d-flex justify-content-center align-items-center ${style.orderSec} mt-5`}>
                                <div className="col-sm-4 text-center" >
                                    <h1>Know About Order</h1>
                                    <p>Join us on February 24 at 9AM PT for #TheAndroidShow, where we'll give you a behind the scenes look at Jetpack Compose, Android's modern toolkit for building native UI. Tweet us your questions on Jetpack Compose using #TheAndroidShow.</p>
                                    <div className={`${style.orderSecBtn}`}>
                                        LEARN MORE
                                    </div>
                                </div>
                                <div className="col-sm-4 text-center">
                                <img

                                        src="/orderSec3.svg"
                                        className={`img-fluid ${style.anImg}`}
                                        style={{animationDelay:"1s"}}
                                        width="350"
                                        height="100"
                                        alt="Picture"


                                    />
                                    
                                </div>
                </div>

                <div className={`row d-flex justify-content-center align-items-center ${style.orderSecTwo} mt-2`}>
                    <div className="col-sm-5">
                        <div className="row d-flex justify-content-around align-items-center" 
                        style={{padding:"20px", borderRight:"20px solid #fff", background:"#f7f9fc", boxShadow:"0px 5px 10px rgba(77, 78, 78, 0.1)"}}>
                            <div className="col-sm-5" >
                                <h1 style={{fontSize:"18px"}}>How to Apply</h1>
                                <hr/>
                                <p >Join us on February 24 at 9AM PT for #TheAndroidShow, where we'll give you a behind the scenes look at Jetpack Compose</p>
                                <hr/>
                                <div className="">
                                    <a>LEARN MORE</a>
                                    </div>
                            </div>
                            <div className="col-sm-5" >
                                <img

                                    src="/howOrder2.svg"
                                    className={`img-fluid ${style.anImg}`}
                                    style={{ animationDelay: "1.5s" }}
                                    width="350"
                                    height="100"
                                    alt="Picture"


                                />
                            </div>

                        </div>

                        
                    </div>

                    <div className="col-sm-5" >
                        <div className="row d-flex justify-content-around align-items-center" 
                        style={{padding:"20px", background:"#f7f9fc", borderLeft:"20px solid #fff", boxShadow:"0px 5px 10px rgba(77, 78, 78, 0.1)"}}>
                            <div className="col-sm-5">
                                <h1 style={{fontSize:"18px"}}>Why order management</h1>
                                <hr/>
                                <p>Join us on February 24 at 9AM PT for #TheAndroidShow, where we'll give you a behind the scenes look at Jetpack Compose</p>
                                <hr/>
                                <div className="">
                                    <a>LEARN MORE</a>
                                    </div>
                            </div>
                            <div className="col-sm-5">
                                <img

                                    src="/000.svg"
                                    className={`img-fluid ${style.anImg}`}
                                    style={{ animationDelay: "2s" }}
                                    width="350"
                                    height="100"
                                    alt="Picture"


                                />
                            </div>

                        </div>

                        
                    </div>



                </div>

            </section>
            
        </Fragment>
    );
}

export default MotoSection

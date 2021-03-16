import React, { Fragment } from 'react'
import style from './MotoSection.module.css';
import Image from 'next/image'
import zIndex from '@material-ui/core/styles/zIndex';
import VideoBg from './VideoBg';
function MotoSection() {
    return (
        <Fragment>
            <section className="container-fluid">

                <div className="row d-flex justify-content-center" style={{height:"200px"}}>
                    <img
                        src="/left.svg"
                        alt="Picture of the author"

                        className="img-fluid"
                        style={{ transform: "scaleY(-1)", position: "relative", top: "-80px"}}
                    />
                </div>
                
                <div className="row d-flex justify-content-around" style={{position: "relative", top: "-180px"}}>
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



                <div className="row d-flex justify-content-center py-5" style={{backgroundColor:"#f7f9fc",position: "relative", top: "-190px", height:"100%"}}>
                    <div className="col-sm-10 text-center" style={{}}>
                        <hr/>
                        <h5 className={`${style.motoLine}`} style={{}}>
                            Stimulate Your <span style={{color:"coral"}}>Business</span> Today
                        </h5>
                        <hr/>
                        <div className="d-flex justify-content-center mt-5">
                            <div className={`${style.joinBtn}`}>
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

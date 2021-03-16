import React, { Fragment } from 'react'
import style from './MotoSection.module.css';
import Image from 'next/image'
import zIndex from '@material-ui/core/styles/zIndex';
function MotoSection() {
    return (
        <Fragment>
            <section className="container-fluid">

                <div className="row d-flex justify-content-center">
                    <img
                        src="/wave.svg"
                        alt="Picture of the author"

                        className="img-fluid"
                        style={{ transform: "scaleY(-1)", position: "relative", top: "-85px", opacity: "0.7" }}
                    />
                </div>
                <div className="row d-flex justify-content-center">
                    <img
                        src="/add.svg"
                        className="img-fluid"
                        width="250"
                        height="150"
                        alt="Picture"

                    />
                </div>



                <div className="row d-flex justify-content-center">
                    <div className="col-sm-10 text-center" style={{}}>
                        <h5 className={`${style.motoLine}`} style={{}}>
                            Stimulate Your Business Today
                        </h5>
                        <div className="d-flex justify-content-center">
                            <div className={`${style.joinBtn}`}>
                                <h5>Join Us</h5>
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

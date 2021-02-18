import React, { Fragment } from 'react'
import style from './MotoSection.module.css'
function MotoSection() {
    return (
        <Fragment>
            <section className="container-fluid">
                <div className="row d-flex justify-content-center p-5" style={{}}>
                    <div className="col-sm-10 text-center" style={{}}>
                        <h5 className={`${style.motoLine}`} style={{}}>Know Who We Are</h5>
                        <div className="d-flex justify-content-center">
                            <div className={`${style.joinBtn}`}>
                                <h5>Join Us</h5>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
            <section>

            </section>
        </Fragment >
    )
}

export default MotoSection

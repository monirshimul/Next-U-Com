import React, { Fragment } from 'react'

function VideoBg() {
    return (
        <Fragment>
            <div className="showcase">
                <div className="VdoContainer">
                    <video src="bgVdo.mp4" autoPlay muted loop></video>
                </div>
            </div>
        </Fragment>
    )
}

export default VideoBg

import React, { Component, Fragment } from 'react'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'

export class LandingLayout extends Component {
    render() {
        return (
            <Fragment>
                <Navbar />
                {this.props.children}

                <Footer />
            </Fragment>
        )
    }
}

export default LandingLayout

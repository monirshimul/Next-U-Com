//import Head from 'next/head'
import { Fragment } from 'react'
import LandingLayout from '../components/layout/landing/landing.layout';
import MotoSection from '../components/landingSecions/MotoSection';
import Post from '../components/landingSecions/post'
export default function Home() {
  return (
    <Fragment>
      <LandingLayout>
        { /*
        <div className="container-fluid">
          <div className="row d-flex justify-content-center p-5">
            <div className="col-sm-3" style={{}}>
              <h5>Hello</h5>
            </div>
            <div className="col-sm-3" style={{}}>
              <h5>Hello</h5>
            </div>
            <div className="col-sm-3" style={{}}>
              <h5>Hello</h5>
            </div>
            <div className="col-sm-3" style={{}}>
              <h5>Hello</h5>
            </div>
          </div>
        </div>
        
        */}
        <MotoSection />
        {/* <Post /> */}


      </LandingLayout>
    </Fragment>

  )
}

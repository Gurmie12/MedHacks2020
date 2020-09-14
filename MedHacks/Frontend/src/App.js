import React, { useEffect, useState } from 'react';
import './App.css';
import logo from './logo.png';
import Typing from 'react-typing-animation';
import xRayImage from './xrayimage.png';
import {
  BrowserRouter as Router,
  Route,
  // Redirect,
  Link,
  NavLink,
  Switch
} from 'react-router-dom';
import TryNow from './TryNow';
import Prediction from './Prediction';
import Dashboard from './Dashboard';

function App() {
  const [navBackgroundTransparent, setNavBackgroundTransparent] = useState(true)
  useEffect(() =>{
    document.addEventListener('scroll', (e) =>{
      let scrolled = document.scrollingElement.scrollTop;
      if(scrolled >=120){
        setNavBackgroundTransparent(false);
      }else{
        setNavBackgroundTransparent(true);
      }
    })
  }, [navBackgroundTransparent]);


  return (
    <div className="App">
      <div>
        <Router>
          <nav className={navBackgroundTransparent ? 'navbar navbar-expand-lg bg-transparent sticky-top' : 'navbar navbar-expand-lg sticky-top scrolled'}>
            <div className="ml-auto">
              <a className="mx-2" style={{color: 'white'}}>Contact us</a>
              <a className="mx-2" style={{color: 'white'}}>About us</a>
              <NavLink to="/"><a className="mx-2" style={{color: 'white'}}>Home</a></NavLink>
              <NavLink to="/trynow"><button className="mx-2 btn btn-success" style={{borderRadius: '15px'}}>Try Now</button></NavLink>
            </div>
          </nav>
          <br/>
          <br />
          <div className="body mt-5 container">
            <Switch>
              <Route exact path="/">
                <div className="row my-5">
                  <div className="col-lg-6 text-left">
                    <img src={logo} height="auto" width="auto" />
                  </div>
                  <div className="col-lg-6 text-right">
                    <Typing speed={150} startDelay={50} className="mt-5">
                      <span><h1 id="title">VisComp</h1></span>
                    </Typing>
                  </div>
                </div>
                <br />
                <br />
                <div className="row card card-body my-5" style={{borderRadius: '15px', display: 'flex', flexDirection: 'row'}}>
                  <div className="col-md-6 text-center" style={{borderRight: '1px solid grey'}}>
                      <p className="mt-5">Chest x-rays can provide a plethora of information that is valuable to health professionals in diagnosing common and uncommon thoracic conditions.
                        This life saving technology can provide high-definition images to medical professionals, but the visual analysis of x-ray images is highly subjective, thus, full accuracy is not always guaranteed.
                      </p>
                  </div>
                  <div className="col-md-6 text-center">
                      <img src={xRayImage} width="200px" height="200px" />
                      <br />
                      <small>X-ray image of patient who was diagnosed with Infiltration</small>
                  </div>
                </div>
                <br />
                <br />
                <div className="row">
                  <div className="col-lg-3">
                  </div>
                  <div className="col-lg-3 card justify-content-center data-left mr-3" style={{borderRadius: '15px', display: 'flex', flexDirection: 'row'}}>
                    <span className="mt-5"><h1 style={{fontSize: '60px'}}><span style={{color: '#000000'}}>28</span><span>%</span></h1></span>
                  </div>
                  <div className="col-lg-3 card text-center data-right ml-3" style={{borderRadius: '15px', display: 'flex', flexDirection: 'column'}}>
                    <h1 className="mt-3">Misdiagnoses</h1>
                    <br />
                    <small className="mb-3">are life-threatening or life-altering according to a study conducted by the BJM Quality & Safety Journal</small>
                  </div>
                  <div className="col-lg-3">
                  </div>
                </div>
              </Route>
              <Route exact path="/trynow">
                <TryNow />
              </Route>
              <Route exact path="/prediction">
                <Prediction />
              </Route>
              <Route exact path="/dashboard">
                <Dashboard />
              </Route>
              <br />
              <br />
              <br />
            </Switch>
          </div>
          <nav className="navbar sticky-bottom mt-5 scrolled">
            <div className="mr-auto">
              <a href="#" style={{color: 'white'}}>GitHub For Project</a>
            </div>
            <div className="ml-auto">
              <small style={{color: 'white'}}>Created by students from University of Waterloo and Rutgers</small>
            </div>
          </nav>
        </Router>
      </div>
    </div>
  );
}

export default App;

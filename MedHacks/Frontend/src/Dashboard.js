import React from 'react';
import xrayimage from './xrayimage.png';

function Dashboard(){
    return(
        <div>
            <div className="row">
                <div className="col-md-4">
                </div>
                <div className="col-md-4 text-center">
                    <h1 style={{color: 'white'}}>Dashboard</h1>
                    <h4 style={{color: 'grey'}}>Welcome John!</h4>
                </div>
                <div className="col-md-4">
                </div>
            </div>
            <div className="card mt-5">
                <div className="card-body" style={{display: 'flex', flexDirection: 'row'}}>
                    <div className="col-lg-3 text-center mt-2" style={{borderRight: '1px solid grey'}}>
                        <a className="my-5">View All</a>
                        <hr />
                        <a className="my-5">Manage Patients</a>
                        <hr />
                        <a className="my-5">Manage Predictions</a>
                        <hr />
                    </div>  
                    <div className="col-lg-9 mt-5">
                        <div className="card mb-5 bg-dark">
                            <div className="card-body" style={{display: 'flex', flexDirection: 'row'}}>
                                <div className="col-sm-3 text-center mb-5">
                                    <img src={xrayimage} height="50px" width="50px" />
                                    <hr />
                                    <small style={{color: 'white'}}>Patient: Jacob Smith</small>
                                </div>
                                <div className="col-sm-3 text-center">
                                    <p style={{color: 'white'}}>Infiltration</p>
                                    <small style={{color: 'white'}}>71%</small>
                                </div>
                                <div className="col-sm-3 text-center">
                                    <p style={{color: 'white'}}>September 3rd 2020</p>
                                </div>
                                <div className="col-sm-3 text-center">
                                    <button className="btn btn-primary">View</button>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-5 bg-dark">
                            <div className="card-body" style={{display: 'flex', flexDirection: 'row'}}>
                                <div className="col-sm-3 text-center">
                                    <img src={xrayimage} height="50px" width="50px" />
                                    <hr />
                                    <small style={{color: 'white'}}>Patient: Alex Stevens</small>
                                </div>
                                <div className="col-sm-3 text-center">
                                    <p style={{color: 'white'}}>Pneumonia</p>
                                    <small style={{color: 'white'}}>88%</small>
                                </div>
                                <div className="col-sm-3 text-center">
                                    <p style={{color: 'white'}}>October 3rd 2019</p>
                                </div>
                                <div className="col-sm-3 text-center">
                                    <button className="btn btn-primary">View</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dashboard;
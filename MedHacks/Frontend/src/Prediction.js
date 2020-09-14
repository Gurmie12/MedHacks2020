import React from 'react';
import xrayimage from './xrayimage.png';
function Prediction(){
    return(
        <div>
            <div className="row">
                <div className="col-lg-3">
                </div>
                <div className="col-lg-6 text-center justify-content-center">
                    <div className="card">
                        <div className="card-body container">
                            <h3>Your Uploaded X-Ray</h3>
                            <hr />
                            <img src={xrayimage} height="300px" width="300px" />
                            <hr />
                            <h1>Diagnosis: Infiltration</h1>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                </div>
            </div>
            <br />
            <div className="row mt-5">
                <div className="col-lg-9">
                    <table className="table table-borderless bg-light">
                        <thead>
                            <tr>
                                <th scope="col">Upper Respritory Condition</th>
                                <th scope="col">Percentage</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Infiltration</th>
                                <th>71%</th>
                            </tr>
                            <tr>
                                <th>Pneumonia</th>
                                <th>19%</th>
                            </tr>
                            <tr>
                                <th>Mass</th>
                                <th>10%</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-lg-3">
                    <button className="btn btn-danger">Sign up and save!</button>
                </div>
            </div>
        </div>
    );
};

export default Prediction;
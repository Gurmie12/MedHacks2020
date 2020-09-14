import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Route,
    // Redirect,
    Link,
    NavLink,
    Switch
  } from 'react-router-dom';

function TryNow(){
    const [xrayInput, setXrayInput] = useState(null);
    const [loginEmail, setLoginEmail] = useState(null);
    const [loginPassword, setLoginPassword] = useState(null);
    const [signInForm, setSignInForm] = useState(false);


    const loginUser = () =>{
        if(loginEmail && loginPassword){
            fetch('http://localhost:8000/auth/login/', {
                method: 'POST',
                body: JSON.stringify({
                    username: loginEmail,
                    password: loginPassword
                }),
                headers: {
                    'content-type': 'application/json'
                }
            }).then(res => res.json())
                .then(res =>{
                    console.log(res);
                })
                .catch(err =>{
                    throw err;
                })
            .catch(err =>{
                throw err;
            });
        }
    };

    const runPrediction = () =>{
        console.log(xrayInput)
    };

    const handleFileInput = (e) =>{
        if(e.target.files){
            let reader = new FileReader()
            let file = reader.readAsDataURL(e.target.files[0])
            reader.onloadend = (e) =>{
                setXrayInput(reader.result);
                fetch('http://localhost:8000/predictions/predict/', {
                    method: 'POST',
                    body: JSON.stringify({
                        image: reader.result
                    }),
                    headers: {
                        'content-type': 'application/json'
                    }
                }).then(res => res.json())
                .then(
                    res =>{
                        console.log(res);
                    }
                )
                .catch(err =>{
                    throw err;
                })
                .catch(err =>{
                    throw err;
                });
        }
    }
    }
    return(
        <div className="App">
                <div className="row">
                    <div className="col-lg-2">
                    </div>
                    <div className="col-lg-8">
                        <div className="card">
                            <div className="card-body" >
                                <div className="row" style={{display: 'flex', flexDirection: 'row'}}>
                                    <div className="col-sm-6 text-center" style={{borderRight: '1px solid grey'}}>
                                        <h1>Try Now</h1>
                                        <div className="row form-group justify-content-center mt-5">
                                            <label for="xray-input" className="mb-3">Please upload an x-ray image </label>
                                            <input type="file" className="form-control-file mt-5" id="xray-input" onChange={e => handleFileInput(e)}></input>
                                        </div>
                                        {
                                            xrayInput ?
                                            <button className="btn btn-warning mt-5" onClick={e => runPrediction()}>Predict!</button>
                                            :
                                            <button className="btn btn-warning mt-5" disabled>Predict!</button>
                                        }
                                    </div>
                                    <div className="col-sm-6 text-center" style={{paddingLeft: '2rem', paddingRight: '2rem'}}>
                                        {   signInForm === false ?
                                                <div>
                                                    <p>Inorder to use VisComp please upload an image of an x-ray and click submit. Our trained convolutional neural network model will analyze that image over 9 layers and calculate the chances of different upper-respritory diseases being the diagnosis</p>
                                                    <hr />
                                                    <p>After your results are produced, you can sign up and save your results in a dashboard and continue to use our Machine Learning model</p>
                                                    <hr />
                                                    <small>If you already have an account, please sign in below</small>
                                                    <br/>
                                                    <button className="btn btn-primary mt-3" onClick={e => setSignInForm(true)}>Sign In</button>
                                                </div>
                                                :
                                                <div>
                                                    <h1>Login</h1>
                                                    <div className="row form-group justify-content-center mt-5 mb-5">
                                                        <label for="email">Email Address</label>
                                                        <input type="email" placeholder="VisComp" onChange={e => setLoginEmail(e.target.value)} id="email" className="form-control"/>
                                                    </div>
                                                    <div className="row form-group justify-content-center">
                                                        <label for="password">Password</label>
                                                        <input type="password" onChange={e => setLoginPassword(e.target.value)} id="password" className="form-control"/>
                                                    </div>
                                                    <hr />
                                                    <button className="btn btn-success mt-5" onClick={e => loginUser()}>Login</button>
                                                </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                    <div className="col-lg-2">

                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
        </div>
    )
};

export default TryNow;
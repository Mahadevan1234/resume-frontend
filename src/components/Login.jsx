import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const Login = () => {
    const [input,setInput]=new useState(
        {
            "username":"",
            "password":""
        }
    )
    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }
    const readvalues=()=>{
        console.log(input)
        axios.post("http://localhost:3000/api/login/signin",input).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("Successfully login")
                    setInput(
                        {
                            "username":"",
                            "password":""
                        }
                    )
                } 
                else if (response.data.status=="incorrect password") {
                    alert("enter correct password")
                }
                else if (response.data.status=="invalid user") {
                    alert("invalid user")
                }
                else {
                    alert("something went wrong")
                }
            }
        )
    }
  return (
    <div>
        <Navbar/>
        <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="row g-3">
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Username</label>
                                        <input type="text" className="form-control" name='username' value={input.username} onChange={inputHandler} />
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-">Password</label>
                                        <input type="password" className="form-control" name='password' value={input.password} onChange={inputHandler} />
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <button className="btn btn-success" onClick={readvalues}>Login</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Login
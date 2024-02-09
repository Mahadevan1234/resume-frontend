import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Addresume = () => {
    const [input, setInput] = new useState(
        {
            "name": "",
            "email": "",
            "phone": "",
            "housename": "",
            "place": "",
            "pincode": "",
            "district": "",
            "gender": "",
            "age": "",
            "qualification": "",
            "skills": "",
            "achievements": "",
            "certifications": "",
            "hobbies": "",
            "referencename": "",
            "referencequal": "",
            "referencenum": ""
        }
    )
    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }
    const readvalues = () => {
        console.log(input)
        axios.post("http://localhost:3000/api/resume/add",input).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("Successfully registered")
                    setInput(
                        {
                            "name": "",
                            "email": "",
                            "phone": "",
                            "housename": "",
                            "place": "",
                            "pincode": "",
                            "district": "",
                            "gender": "",
                            "age": "",
                            "qualification": "",
                            "skills": "",
                            "achievements": "",
                            "certifications": "",
                            "hobbies": "",
                            "referencename": "",
                            "referencequal": "",
                            "referencenum": ""
                        }
                    )
                } else {
                    alert("Something went wrong")
                }
            }
        )
    }
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" name='name' value={input.name} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Email</label>
                                <input type="text" className="form-control" name='email' value={input.email} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Mobile</label>
                                <input type="text" className="form-control" name='phone' value={input.phone} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">House Name</label>
                                <input type="text" className="form-control" name='housename' value={input.housename} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Place</label>
                                <input type="text" className="form-control" name='place' value={input.place} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Pincode</label>
                                <input type="text" className="form-control" name='pincode' value={input.pincode} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">District</label>
                                <input type="text" className="form-control" name='district' value={input.district} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Gender</label>
                                <input type="text" className="form-control" name='gender' value={input.gender} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Age</label>
                                <input type="text" className="form-control" name='age' value={input.age} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Qualification</label>
                                <input type="text" className="form-control" name='qualification' value={input.qualification} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Skills</label>
                                <input type="text" className="form-control" name='skills' value={input.skills} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Achievements</label>
                                <input type="text" className="form-control" name='achievements' value={input.achievements} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Certifications</label>
                                <input type="text" className="form-control" name='certifications' value={input.certifications} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Hobbies</label>
                                <input type="text" className="form-control" name='hobbies' value={input.hobbies} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Reference Name</label>
                                <input type="text" className="form-control" name='referencename' value={input.referencename} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Reference Qualification</label>
                                <input type="text" className="form-control" name='referencequal' value={input.referencequal} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Reference Phone</label>
                                <input type="text" className="form-control" name='referencenum' value={input.referencenum} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readvalues}>Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addresume
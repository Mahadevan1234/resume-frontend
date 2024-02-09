import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const Viewresume = () => {
    const [data, setData] = new useState([])
    const getData = () => {
        axios.get("http://localhost:3000/api/resume/viewall").then(
            (response) => {
                setData(response.data)
            }
        )
    }
    useEffect(() => { getData() }, [])
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {
                                data.map(
                                    (value, index) => {
                                        return <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                            <div className="card">
                                                <div className="card-body">
                                                    <table className="table">
                                                        <thead>
                                                            <tr>
                                                                <center>
                                                                    <th scope="col" >RESUME</th>
                                                                </center>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>Name</td>
                                                                <td>{value.name}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Email</td>
                                                                <td>{value.email}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Mobile</td>
                                                                <td>{value.phone}</td>
                                                            </tr>
                                                            <div className="card">
                                                                <div className="card-body">
                                                                    <p>ADDRESS</p>
                                                                    <tr>
                                                                        <td>House Name</td>
                                                                        <td>{value.housename}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Place</td>
                                                                        <td>{value.place}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Pincode</td>
                                                                        <td>{value.pincode}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>District</td>
                                                                        <td>{value.district}</td>
                                                                    </tr>
                                                                </div>
                                                            </div>
                                                            <tr>
                                                                <td>Gender</td>
                                                                <td>{value.gender}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Age</td>
                                                                <td>{value.age}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Qualification</td>
                                                                <td>{value.qualification}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Skills</td>
                                                                <td>{value.skills}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Achievements</td>
                                                                <td>{value.achievements}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Certificates</td>
                                                                <td>{value.certifications}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Hobbies</td>
                                                                <td>{value.hobbies}</td>
                                                            </tr>
                                                            <div className="card">
                                                                <div className="card-body">
                                                                    <p>REFERENCE</p>
                                                                    <tr>
                                                                        <td>Reference</td>
                                                                        <td>{value.referencename}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Designation</td>
                                                                        <td>{value.referencequal}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Mobile</td>
                                                                        <td>{value.referencenum}</td>
                                                                    </tr>
                                                                </div>
                                                            </div>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewresume
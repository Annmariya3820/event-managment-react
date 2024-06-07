import React, { useState } from 'react'
import Navbar from './Navbar'

const ViewEvent = () => {
    const [data,changedata]=useState(
        [
            {"event":"Wedding"},
            {"event":"Engagment"},
            {"event":"Birthday"},
            {"event":"DJ"},
            {"event":"Baptism"},
            {"event":"Musical Night"},
            {"event":"Wedding Anniversary"},
            {"event":"House party"}
        ]
    )
    return (
        <div>
            <Navbar/>
             <center><h3>EMA EVENTS</h3></center>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {data.map(
                             (value, index) => {
                                return <div class="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                                <div class="card">
                                    <img src="https://tse4.mm.bing.net/th?id=OIP.hhrOo8H-_w5u0vqEibabTgHaEK&pid=Api&P=0&h=220" height="250px" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">{value.event}</h5>
                                        <h6 class="card-subtitle mb-2 text-body-secondary"></h6>
                                        <p class="card-text"></p>
                                        <a href="#" class="Book Evenet">Book Event</a>
                                        <a href="#" class="More Details">More Details</a>
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

export default ViewEvent

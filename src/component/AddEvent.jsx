import React from 'react'
import Navbar from './Navbar'

const AddEvent = () => {
  return (
    <div>
        <Navbar/>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    <label htmlFor="" className="form-label">Events</label>
                <select name="" id="" className="form-control">
                <option value="options">options</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Betrothal">Betrothal</option>
                  <option value="Musical Night">Musical Night</option>
                </select>


                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    <label htmlFor="" className="form-label">Event Type</label>
                <select name="" id="" className="form-control">
                <option value="options">options</option>
                  <option value="Offset">Offset</option>
                  <option value="Conference">Conference</option>
                  <option value="Sko">Sko</option>
                </select>


                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    <label htmlFor="" className="form-label">Event Needs</label>
                     <input type="text" className="form-control" />

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    <label htmlFor="" className="form-label">No.Of Guests</label>
                <input type="number" className="form-control" />


                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    <label htmlFor="" className="form-label">Budget</label>
                <input type="number" className="form-control" />


                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    <label htmlFor="" className="form-label">Date</label>
                <input type="date" className="form-control" />


                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    <label htmlFor="" className="form-label">Location</label>
                <input type="text" className="form-control" />


                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    <label htmlFor="" className="form-label">Email</label>
                <input type="text" className="form-control" />


                    </div>
                   
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                     <button className="btn btn-success">BOOKING</button>

                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AddEvent

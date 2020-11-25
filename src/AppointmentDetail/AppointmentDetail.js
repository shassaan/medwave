import React from 'react'
const AppointmentDetail = ()=>{
    return (
        <>
            <div className="row">
                <div className="col-md-5">
                    <dl>
                        <dt>Reason</dt>
                        <dd>abc reason</dd>
                    </dl>
                </div>
                <div className="col-md-2">
                    <div className="clearfix"></div>
                </div>
                <div className="col-md-5">
                <dl>
                        <dt>Doctor</dt>
                        <dd>DOCTOR</dd>
                    </dl>
                </div>
            </div>

            <div className="row">
                <div className="col-md-5">
                    <dl>
                        <dt>Time</dt>
                        <dd>5:00 PM</dd>
                    </dl>
                </div>
                <div className="col-md-2">
                    <div className="clearfix"></div>
                </div>
                <div className="col-md-5">
                <dl>
                        <dt>Name</dt>
                        <dd>NAME</dd>
                    </dl>
                </div>
            </div>
        </>
    );
}

export default AppointmentDetail;
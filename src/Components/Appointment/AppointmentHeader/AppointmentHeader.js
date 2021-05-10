import React from 'react';
import chair from '../../../images/Mask Group 1.png'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

const AppointmentHeader = ({handleDateChange}) => {
   
    return (
        <div>
        <main style={{height:'450px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1>APPOINTMENT</h1>
                <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                />
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid"/>
            </div>
        </main>
    </div>
    );
};

export default AppointmentHeader;
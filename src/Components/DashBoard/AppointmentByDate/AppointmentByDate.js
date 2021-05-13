import React from 'react';
import AppointmentShortList from '../AppointmentShortList/AppointmentShortList';

const AppointmentByDate = ({appointment}) => {
    return (
        <div>
            <h1>Appointment Date</h1>
            {
                appointment.length ? 
                <AppointmentShortList appointment={appointment}></AppointmentShortList>
                :
                <div>
                    <h1 className="text-center">There is no appointment</h1>
                </div>
            }
        </div>
    );
};

export default AppointmentByDate;
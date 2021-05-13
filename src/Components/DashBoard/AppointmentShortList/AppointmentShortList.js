import React from 'react';

const AppointmentShortList = ({appointment}) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone number</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    appointment.map((appointment,index)=>
                    <tr>
                        <td>{appointment.name}</td>
                        <td>{appointment.phone}</td>
                        <td>{appointment.email}</td>
                    </tr>
                    )
                }
                
            </tbody>
        </table>
    );
};

export default AppointmentShortList;
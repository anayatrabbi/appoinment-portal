import React, {useEffect, useState } from 'react';
import SideBar from '../SideBar/SideBar'
import AppointmentByDate from '../AppointmentByDate/AppointmentByDate'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

const DashBoard = () => {
    const [selectDate, setSelectDate] = useState(new Date())
    const [appointment, setAppointment] = useState([])
    const handleDateChange=(date)=>{
        setSelectDate(date)
    }
    
    useEffect(()=>{
        fetch('http://localhost:4000/appointmentByDate',{
            method:'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({date: selectDate})
        })
        .then(res => res.json())
        .then(data => setAppointment(data))
    }, [selectDate])
    console.log(appointment)
    return (
        <section>
            <div className="container-fluid row">
                <div className="col-md-3">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-4">
                    <h1>calender</h1>
                    <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                />
                </div>
                <div className = "col-md-5">
                    <AppointmentByDate appointment={appointment}></AppointmentByDate>
                </div>
            </div>
        </section>
    );
};

export default DashBoard;
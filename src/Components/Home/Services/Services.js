import React from 'react';
import Flouride from '../../../images/flouride.png'
import cavity from '../../../images/cavity.png'
import teeth from '../../../images/teeth.png'
import ServicesDetails from '../ServicesDetails/ServicesDetails';
const ServicesData=[
    {
        title: 'Fluoride treatment',
        img: Flouride
    },
    {
        title: 'Cavity Filling',
        img: cavity
    },
    {
        title: 'Teeth wheatening',
        img: teeth
    }
]

const Services = () => {
    return (
       <section >
            <div className="text-center">
                <h5 className="mt-5" style={{color: '#1CC7C1'}}>Our Services</h5>
                <h1>Services We Provide</h1>
            </div>
           <div className="d-flex justify-content-center">
            <div className=" w-75 mt-5 row">
                {
                    ServicesData.map(service => <ServicesDetails service={service}></ServicesDetails>)
                }
            </div>
           </div>
       </section>
    );
};

export default Services;
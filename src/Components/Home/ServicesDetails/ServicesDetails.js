import React from 'react';

const ServicesDetails = ({service}) => {
    return (
        <div className="col-md-4 p-3">
            <img style={{height:'50px'}} src={service.img} alt=""/>
            <h4 className="mb-3 mt-3">{service.title}</h4>
            <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quaerat?</p>
        </div>
    );
};

export default ServicesDetails;
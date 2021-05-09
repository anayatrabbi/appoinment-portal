import React from 'react';
import feautured from '../../../images/featured.png'

const FeaturedServices = () => {
    return (
        <section className="pb-0 pb-md-5 my-5 d-flex justify-content-center">
            <div className="container m-5 w-85">
                <div className="row mb-5">
                    <div className="col-md-5">
                        <img className="img-fluid mb-4 m-md-0" src={feautured} alt=""/>
                    </div>
                    <div className="col-md-7 align-self center">
                        <h2>Experience dental care, on your term</h2>
                        <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quaerat?</p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>           
            </div>
        </section>
    );
};

export default FeaturedServices;
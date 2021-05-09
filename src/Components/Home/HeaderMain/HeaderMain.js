import React from 'react';
import chair from '../../../images/Mask Group 1.png'
const HeaderMain = () => {
    return (
        <div>
            <main style={{height:'450px'}} className="row d-flex align-items-center">
                <div className="col-md-4 offset-md-1">
                    <h1>Your New smile start here</h1>
                    <p>
                        somme written part here
                    </p>
                    <button className="btn btn-primary"> Get Appoinments</button>
                </div>
                <div className="col-md-6">
                    <img src={chair} alt="" className="img-fluid"/>
                </div>
            </main>
        </div>
    );
};

export default HeaderMain;
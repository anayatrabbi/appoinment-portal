import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock,faMap,faPhone } from '@fortawesome/free-solid-svg-icons'
const InfoData = [
    {
        title:'visit our location',
        description:'Brooklyn, NY 10003 USA',
        icon:faMap,
        background:'primary'
    },
    {
        title:'CAll us now',
        description:'+01812225657',
        icon:faPhone,
        background:'dark'
    },
    {
        title:'visit Hour',
        description:'Take your appointment at time',
        icon:faClock,
        background:'primary'
    }
]
const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="row w-75">
            {
                InfoData.map(info => <InfoCard info={info}></InfoCard>)
            }
            </div>
        </section>
    );
};

export default BusinessInfo;
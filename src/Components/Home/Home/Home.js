import React from 'react';
import Blogs from '../Blogs/Blogs';
import Contacts from '../Contacts/Contacts';
import FeaturedServices from '../FeaturedServices/FeaturedServices';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <FeaturedServices></FeaturedServices>
            <MakeAppointment></MakeAppointment>
            <Blogs/>
            <Contacts/>
            <Footer/>
        </div>
    );
};

export default Home;
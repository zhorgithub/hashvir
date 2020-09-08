import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Slider from '../../components/Slider/Slider'


function MainLayout(props) {
    const { children } = props;

    return (
        <>
            <Header />
            <Slider />
            {children}
            <Footer />
        </>
    )
}

export default MainLayout
import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'


function OtherLayout(props) {
    const { children } = props;

    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default OtherLayout
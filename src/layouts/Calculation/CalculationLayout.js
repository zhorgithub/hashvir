import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Sidebar from '../components/Sidebar/Sidebar'


function CalculationLayout(props) {
    const { children } = props;

    return (
        <>
            <Header />
            <div className="parent">
                <div className="left">
                    <Sidebar />
                </div>
                <div className="right">
                    {children}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default React.memo(CalculationLayout)

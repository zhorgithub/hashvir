import React from 'react'
import { Switch, Redirect } from 'react-router-dom'
import RouteWithLayout from './components/RouteWithLayout/routeWithLayout'
import HomePage from './views/HomePage/HomePage'
import MainLayout from './layouts/Main/MainLayout'
import OtherLayout from './layouts/Main/OtherLayout'
import CalculationLayout from './layouts/Calculation/CalculationLayout'
import AppaPage from './views/CalcPage/AppaPage'
import CarsPage from './views/CalcPage/CarsPage'
import SalaryPage from './views/CalcPage/SalaryPage'
import RealEstatePage from './views/CalcPage/RealEstatePage'
import ExchangePage from './views/CalcPage/ExchangePage'
import MbenefitPage from './views/CalcPage/MbenefitPage'
import VacationPage from './views/CalcPage/VacationPage';
import CarClearancePage from './views/CalcPage/CarClearancePage';
import CarAccountingpage from './views/CalcPage/CarAccountingPage';
import UtilitiesPage from './views/CalcPage/UtilitiesPage';
import TeInspectionPage from './views/CalcPage/TeInspectionPage';
import AboutPage from './views/OtherPage/AboutPage';
import ContactPage from './views/OtherPage/ContactPage';
import AllPage from './views/CalcPage/AllPage';



function Routes() {

    return (
        <Switch>
            <RouteWithLayout
                component={HomePage}
                exact
                layout={MainLayout}
                path='/'
            />
            <RouteWithLayout
                component={AppaPage}
                exact
                layout={CalculationLayout}
                path='/appa'
            />
            <RouteWithLayout
                component={CarsPage}
                exact
                layout={CalculationLayout}
                path='/cars'
            />
            <RouteWithLayout
                component={SalaryPage}
                exact
                layout={CalculationLayout}
                path='/salary'
            />
            <RouteWithLayout
                component={RealEstatePage}
                exact
                layout={CalculationLayout}
                path='/realEstate'
            />
           <RouteWithLayout
                component={ExchangePage}
                exact
                layout={CalculationLayout}
                path='/exchange'
            />
            <RouteWithLayout
                component={MbenefitPage}
                exact
                layout={CalculationLayout}
                path='/mbenefit'
            />
            <RouteWithLayout
                component={VacationPage}
                exact
                layout={CalculationLayout}
                path='/vacation'
            />
            <RouteWithLayout
                component={CarClearancePage}
                exact
                layout={CalculationLayout}
                path='/carclearance'
            />
            <RouteWithLayout
                component={CarAccountingpage}
                exact
                layout={CalculationLayout}
                path='/caraccountin'
            />
             <RouteWithLayout
                component={UtilitiesPage}
                exact
                layout={CalculationLayout}
                path='/utilities'
            />
            <RouteWithLayout
                component={TeInspectionPage}
                exact
                layout={CalculationLayout}
                path='/inspection'
            />
            <RouteWithLayout
                component={AllPage}
                exact
                layout={CalculationLayout}
                path='/calcpage'
            />
             <RouteWithLayout
                component={AboutPage}
                exact
                layout={OtherLayout}
                path='/about'
            />
            <RouteWithLayout
                component={ContactPage}
                exact
                layout={OtherLayout}
                path='/contact'
            />
            <Redirect to='/' />

        </Switch>
    )

}


export default Routes
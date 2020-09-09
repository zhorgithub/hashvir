import React from 'react'
import { Switch, Redirect } from 'react-router-dom'
import RouteWithLayout from './components/RouteWithLayout/routeWithLayout'
import HomePage from './views/HomePage/HomePage'
import MainLayout from './layouts/Main/MainLayout'
import CalculationLayout from './layouts/Calculation/CalculationLayout'
import AppaPage from './views/CalcPage/AppaPage'
import CarsPage from './views/CalcPage/CarsPage'
import SalaryPage from './views/CalcPage/SalaryPage'
import RealEstatePage from './views/CalcPage/RealEstatePage'


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
            <Redirect to='/' />

        </Switch>
    )

}


export default Routes
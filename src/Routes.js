import React from 'react'
import { Switch, Redirect } from 'react-router-dom'
import RouteWithLayout from './components/RouteWithLayout/routeWithLayout'
import HomePage from './views/HomePage/homePage'
import MainLayout from './layouts/Main/MainLayout'


function Routes() {

    return (
        <Switch>
            <RouteWithLayout
                component={HomePage}
                exact
                layout={MainLayout}
                path='/'
            />
            <Redirect to='/' />


        </Switch>
    )

}


export default Routes
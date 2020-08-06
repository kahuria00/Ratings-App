import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Matatus from './Matatus/Matatus'
import Matatu from './Matatu/Matatu'


const App = () =>{
    return(
        <Switch>
            <Route exact path='/' component={Matatus} />
            <Route exact path='/api/v1/matatu/:slug' component={Matatu} />
        </Switch>
    ) 
}


export default App
 
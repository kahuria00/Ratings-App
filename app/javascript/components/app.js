import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Matatus from './Matatus/Matatus'
import Matatu from './Matatu/Matatu'



const App = () =>{
  return(
    <Switch>
    <Route exact path='/' />	      
    <Route exact path='/home' component={Matatus} />
    <Route exact path='/api/v1/matatus/:slug' component={Matatu} />
    </Switch>
  ) 	     
}
export default App;
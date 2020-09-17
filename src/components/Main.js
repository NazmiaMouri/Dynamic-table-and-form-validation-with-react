import React from 'react'
import Create from './Create';
import List from './List'
import {Switch , Route, Redirect, withRouter } from 'react-router-dom';

function Main() {
    return (
        <div className="App">
      <Switch>
      <Route exact path="/list" component={()=><List />}/>
      
      <Route exact path="/createform" component={()=><Create />}/>
      
     
      <Redirect to='/list'/>
      </Switch>
      
      
    </div>
    )
}

export default Main

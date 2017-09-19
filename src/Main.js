import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PairingQuizComp from './PairingQuizComp'
import Drinks from './Drinks'
import Food from './Food'

const Main = () => (
  <div>
    <Switch>
      <Route exact path='/' component={PairingQuizComp}/>
      <Route path='/drinks' component={Drinks}/>
      <Route path='/food' component={Food}/>
    </Switch>
  </div>
)

export default Main
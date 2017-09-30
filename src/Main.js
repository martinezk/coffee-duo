import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Drinks from './Drinks';
import Food from './Food';
import PairingQuiz from './PairingQuiz';

const Main = () => (
  <div>
    <Switch>
      <Route exact path='/' component={PairingQuiz}/>
      <Route path='/drinks' component={Drinks}/>
      <Route path='/food' component={Food}/>
    </Switch>
  </div>
)

export default Main
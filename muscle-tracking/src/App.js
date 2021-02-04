import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Navigation from './components/Navigation';

import Top from './components/Top';
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';
import Auth from './components/Auth';
import List1 from './components/List1';
import List2 from './components/List2';
import Registerd from './components/Registerd';
import BodyWeight from './components/BodyWeight';
import Big3 from './components/Big3';
import Nutrition from './components/Nutrition';
import TrainingMenu from './components/TraningMenu';

const App = () => {
  return (
    <div>
      <Navigation />
      <Router>
        <Switch>
          <Route exact path='/top' component={Top} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/logout' component={Logout} />
          <Route exact path='/registerd' component={Registerd} />
          <Auth>
            <Switch>
            <Route exact path='/list1' component={List1} />
            <Route exact path='/list2' component={List2} />
            <Route exact path='/weight' component={BodyWeight} />
            <Route exact path='/big3' component={Big3} />
            <Route exact path='/nutrition' component={Nutrition} />
            <Route exact path='/menu' component={TrainingMenu} />
            <Redirect from='/' to='/list1' />
            </Switch>
          </Auth>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
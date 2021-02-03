import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Navigation from './components/Navigation';

import Login from './components/Login';
import Logout from './components/Logout';
import Auth from './components/Auth';
import User from './components/User';
import List1 from './components/List1';
import List2 from './components/List2';

const App = () => {
  return (
    <div>
      <Navigation />
      <Router>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/logout' component={Logout} />
          <Auth>
            <Switch>
            <Route exact path='/list1' component={List1} />
            <Route exact path='/list2' component={List2} />
            <Redirect from='/' to='/list1' />
            </Switch>
          </Auth>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
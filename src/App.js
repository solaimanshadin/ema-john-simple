import React from 'react';
import './App.css';
import Header from './componets/header/Header';
import Shop from './componets/shop/Shop';
import Login from './componets/Login/Login';
import  {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Review from './componets/Review/Review';
import Inventory from './componets/Inventory/Inventory';
import Notfound from './componets/Notfound/Notfound';
import Productdetail from './componets/Producatdetail/Productdetail';
import { AuthProvider , PrivateRoute} from './componets/Login/useAuth';
import Ship from './componets/Ship/Ship';


function App() {

  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>

            <Switch>
            <Route path="/shop">
              <Shop></Shop>
            </Route>
          
            <PrivateRoute path="/ship">
              <Ship></Ship>
            </PrivateRoute>
            <Route path="/review">
                <Review></Review>
            </Route>
            <Route path="/inventory">
                  <Inventory></Inventory>
            </Route>
            <Route exact path="/">
              <Shop></Shop>
            </Route>
            <Route path="/product/:productKey">
              <Productdetail></Productdetail>
            </Route>
            <Route path="/login">
                <Login></Login>
            </Route>
            <Route path="*">
                <Notfound></Notfound>
            </Route>
            
          </Switch>
          </Router>
        </AuthProvider>
    </div>
  );
}

export default App;

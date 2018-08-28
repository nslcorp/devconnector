import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import { Provider } from 'react-redux';

import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Register from './components/auth/register';
import Login from './components/auth/login';
import store from './redux/store';


class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>

    );
  }
}

export default App;

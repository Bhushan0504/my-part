import React, {Component} from 'react'
import Home from './HomeBody';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Aboutus from './AboutusComponent';
import {CLIENTS} from '../shared/clients';
import { Switch, Redirect, Route } from 'react-router';

class Main  extends Component {
  
  constructor(props) {
    super (props);

    this.state = {
      clients: CLIENTS
    };
  }
  
  render(){
    return (
      <div>
        <Header clients={this.state.clients}/>
        <Switch>
            <Route path="/home" component={() => <Home />}/>
            <Route path="/aboutus" component={() => <Aboutus />}/>
            <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;

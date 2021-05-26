import React, {Component} from 'react'
import Home from './HomeBody';
import Footer from './FooterComponent';
import Aboutus from './AboutusComponent';
import Signup_client from './ClientSignupComponent';
import Signup_worker from './WorkerSignupComponent';
import { Switch, Redirect, Route,withRouter } from 'react-router';
import { connect } from 'react-redux';
import Dashboard from './AfterLogin/DashboardComponent';

const mapStateToProps = state =>{

  return{
    clients: state.clients
  }
  
}

class Main  extends Component {
  
  constructor(props) {
    super (props);

  }



  render(){

    const ClientWithId = ({match}) => {
      return(
        <Dashboard client={this.props.clients.filter((client) => client.id === parseInt(match.params.clientId,10))[0]} />
      )
    }
    
    return (
      <div>
        {/*<Header clients={this.props.clients}/>*/}
        <Switch>
            <Route path="/home" component={() => <Home clients={this.props.clients}/>}/>
            <Route path="/aboutus" component={() => <Aboutus clients={this.props.clients} />}/>
            <Route path="/signup_client" component={() => <Signup_client />}/>
            <Route path="/signup_worker" component={() => <Signup_worker />}/>
            <Route path="/dashboard/:clientId" component={ClientWithId} />
            <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));

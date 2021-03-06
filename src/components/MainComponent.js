import React, {Component} from 'react'
import Home from './HomeBody';
import Footer from './FooterComponent';
import Aboutus from './AboutusComponent';
import Signup_client from './ClientSignupComponent';
import Signup_worker from './WorkerSignupComponent';
import { Switch, Redirect, Route,withRouter } from 'react-router';
import { connect } from 'react-redux';
import Dashboard from './AfterLogin/DashboardComponent';
import Worker_details from './AfterLogin/WorkerDetailsComponent';
import Client_profile from './AfterLogin/ClientProfileComponent';
import {postComment, postRating, fetchClients, fetchComments, fetchRatings, fetchWorkers} from '../redux/ActionCreators';

const mapStateToProps = state =>{

  return{
    clients: state.clients,
    workers: state.workers,
    comments: state.comments,
    ratings: state.ratings
  }
  
}

const mapDispatchToProps = dispatch => ({

  postComment: (cid, wid, content) => dispatch(postComment(cid, wid, content)),
  postRating: (cid, wid, content) => dispatch(postRating(cid, wid, content)),
  fetchWorkers: () => {dispatch(fetchWorkers())},
  fetchClients: () => {dispatch(fetchClients())},
  fetchComments: () => {dispatch(fetchComments())},
  fetchRatings: () => {dispatch(fetchRatings())}
})

class Main  extends Component {
  
  constructor(props) {
    super (props);

  }

  componentDidMount(){
    this.props.fetchWorkers();
    this.props.fetchClients();
    this.props.fetchComments();
    this.props.fetchRatings();
  }

  render(){

    const ClientWithId = ({match}) => {
      return(
        <Dashboard client={this.props.clients.clients.filter((client) => client.id === parseInt(match.params.clientId,10))[0]}
          workersLoading = {this.props.workers.isLoading}
          workersErrMess = {this.props.workers.errMess}
          clientsLoading = {this.props.clients.isLoading}
          clientsErrMess = {this.props.clients.errMess}
          workers = {this.props.workers.workers}
          ratings = {this.props.ratings.ratings}/>
      )
    }

    const ProfileWithId = ({match}) => {
      return(
        <Client_profile client={this.props.clients.clients.filter((client) => client.id === parseInt(match.params.clientId,10))[0]}
        clientsLoading = {this.props.clients.isLoading}
        clientsErrMess = {this.props.clients.errMess} />
      )
    }

    const WorkerWithId = ({match}) => {
      return(
        <Worker_details worker={this.props.workers.workers.filter((worker) => worker.id === parseInt(match.params.workerId,10))[0]}
          isLoading = {this.props.workers.isLoading}
          errMess = {this.props.workers.errMess}
          client={this.props.clients.clients.filter((client) => client.id === parseInt(match.params.clientId,10))[0]}
          comments = {this.props.comments.comments}
          postComment = {this.props.postComment} 
          ratings = {this.props.ratings.ratings}
          postRating = {this.props.postRating}/>
      )
    }
    
    return (
      <div>
        {/*<Header clients={this.props.clients}/>*/}
        <Switch>
            <Route path="/home" component={() => <Home clients={this.props.clients.clients}/>}/>
            <Route path="/aboutus" component={() => <Aboutus clients={this.props.clients.clients} />}/>
            <Route path="/signup_client" component={() => <Signup_client />}/>
            <Route path="/signup_worker" component={() => <Signup_worker />}/>
            <Route path="/dashboard/:clientId" component={ClientWithId} />
            <Route path="/worker/:clientId/:workerId" component={WorkerWithId} />
            <Route path="/clientprofile/:clientId" component= {ProfileWithId} />            
            <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

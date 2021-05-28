import React, {Component} from 'react';
import { Navbar,NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Card, CardImgOverlay, CardTitle} from 'reactstrap';
import {NavLink,Link} from 'react-router-dom';
import { Loading } from './LoadingComponent';


class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    
    render(){

      /*const lratings = this.props.ratings.filter((rating) => rating.wid === this.props.rating.id);

      var sum = 0;
      for( var i = 0; i < lratings.length; i++ ){
          sum += parseInt( lratings[i].content, 10 ); //don't forget to add the base
      }

      var avg = (sum/lratings.length).toFixed(1);*/

      if (this.props.workersLoading){
        return(
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        )
      }

      else if (this.props.workersErrMess){
        return(
            <div className="container">
                <div className="row">
                    <h4>{this.props.errMess}</h4>
                </div>
            </div>
        )
    }

    else if(!this.props.workersLoading){

      const lworkers = this.props.workers.filter((worker) => this.props.client.address.area === worker.area)
      const list = lworkers.map((worker) => {return (
            <Card>
                  <Link to={`/worker/${this.props.client.id}/${worker.id}`} >
                      {/*<CardImg width="100%" src={worker.image} alt={worker.name} />*/}
                      <CardImgOverlay></CardImgOverlay>
                          <CardTitle>{worker.naam}</CardTitle>
                  </Link>
             </Card>
          );
      });

        return(
        <div>
            <Navbar dark color="primary" expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand href="/dashboard" > AYS | At Your Service</NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to={`/clientprofile/${this.props.client.id}`}>
                                        My Profile
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link" to="/home">
                                        Logout
                                    </Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
            </Navbar>
          {list}
        </div>
        );
    }
    }
}

export default Dashboard;
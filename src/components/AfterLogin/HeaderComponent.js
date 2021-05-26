import React, {Component} from 'react';
import { Navbar,NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Modal, ModalBody, ModalHeader, Form, FormGroup, Label, Input, Button } from 'reactstrap';

class Header extends Component{

    constructor(props){
        super(props);
    }

    render(){

        return(
            <>
                 <Navbar dark color="primary">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand href="/" > AYS | At Your Service</NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/signup_worker">
                                        Register as employee
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link" to="/signup_client">
                                        Signup
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link" onClick={this.toggleModal}>
                                        <sapn className="fa fa-sign-in fa-lg"></sapn>{' '}Login
                                    </Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </>
        )
    }
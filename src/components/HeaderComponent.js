import React, {Component} from 'react';
import { Navbar,NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Modal, ModalBody, ModalHeader, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import {NavLink,Link} from 'react-router-dom';
import Confirm from './LoginConirmationComponent';

class Header extends Component{

    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen : true,
            loginInfo: null,
            userName: null,
            passWord: null,
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event){
        this.toggleModal();
        this.setState({
            userName: this.username.value,
            passWord: this.password.value
        });
        event.preventDefault();
       
    }
    
    render(){

        

        return(
            <><Navbar dark color="primary" expand="md">
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
                
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username" 
                                    innerRef={(input) => this.username = input}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                innerRef={(input) => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember" 
                                    innerRef={(input) => this.remember = input} />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" className="bg-primary"> Login </Button>
                        </Form>
                    </ModalBody>
                </Modal>
                <Confirm client = {this.props.clients.filter((client) => this.state.userName === client.naam && this.state.passWord === client.pwd)[0]} />
            </>
        )
    }
}

export default Header;
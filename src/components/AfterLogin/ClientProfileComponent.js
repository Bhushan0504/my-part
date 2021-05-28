import React, {Component} from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Row,
    Col,
    Label } from 'reactstrap';
import {Control, LocalForm, Errors} from "react-redux-form";
import { Loading } from './LoadingComponent';


class Client_profile extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    render(){

        if (this.props.clientsLoading){
            return(
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            )
          }

          else if (this.props.clientsErrMess){
            return(
                <div className="container">
                    <div className="row">
                        <h4>{this.props.errMess}</h4>
                    </div>
                </div>
            )
        }
    
        else if(!this.props.clientsLoading){

        return(
            <div>
                <h6>Naam : {this.props.client.naam}</h6>
                <h6>Email Id : {this.props.client.email}</h6>
                <h6>Phone Number : {this.props.client.phno}</h6>
                <h6>Password : {this.props.client.pwd}</h6>
                <h6>Address : </h6>
                <h6>House Number : {this.props.client.address.hno}</h6>
                <h6>Street : {this.props.client.address.street}</h6>
                <h6>Area : {this.props.client.address.area}</h6>
                <h6>City : {this.props.client.address.city}</h6>
                <h6>State : {this.props.client.address.state}</h6>
            </div>
        )
        }
    }
}

export default Client_profile
import React, {Component} from 'react';
import { Modal, ModalBody, ModalHeader, Button } from 'reactstrap';
import {Link} from 'react-router-dom';

class Confirm extends Component {

    constructor(props){
        super(props);

        this.state = {
            isModalOpen :true
        };

    this.toggleModal = this.toggleModal.bind(this);

    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
    });
    }

    renderlogin(){
        const client = this.props.client
        if(client !== undefined){
        return(
            <div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Confirmation</ModalHeader>
                    <ModalBody>
                        <h2>Are you sure you want to login as {client.naam} ?</h2>
                            <Link to={`/dashboard/${client.id}`}><Button className="bg-primary"> Sure </Button></Link>{'   '}
                            <Link to="/home"><Button className="bg-primary"> This is not me </Button></Link>
                    </ModalBody>
                </Modal>
            </div>
        );
        }
        else{
            return(
                <div>
                </div>
            );
        }
    }
    render(){
        return(
        <div>
            {this.renderlogin()}
        </div>
        );
}
}

export default Confirm;
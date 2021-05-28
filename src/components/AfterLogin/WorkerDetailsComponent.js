import React, {Component} from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Row,
    Col,
    Label } from 'reactstrap';
import {Control, LocalForm} from "react-redux-form";
import { Loading } from './LoadingComponent';

class Worker_details extends Component {
    constructor(props){
        super(props);
        this.state = {
            isModalOpen : false,
            isModal2Open : false
        };
        this.toggleModal1 = this.toggleModal1.bind(this);
        this.toggleModal2 = this.toggleModal2.bind(this);
        this.handleSubmit1 = this.handleSubmit1.bind(this);
        this.handleSubmit2 = this.handleSubmit2.bind(this);
    }

    toggleModal1(){
        this.setState({
            isModal1Open: !this.state.isModal1Open
        });
    }
    
    toggleModal2(){
        this.setState({
            isModal2Open: !this.state.isModal2Open
        });
    }

    handleSubmit1(values){
        this.toggleModal1();
        this.props.postComment(values.content, this.props.client.id, this.props.worker.id);
    }

    handleSubmit2(values){
        this.toggleModal2();
        this.props.postRating(values.rating, this.props.client.id, this.props.worker.id);
    }

    render(){

        if(this.props.isLoading){
            return(
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            )
        }

        else if (this.props.errMess){
            return(
                <div className="container">
                    <div className="row">
                        <h4>{this.props.errMess}</h4>
                    </div>
                </div>
            )
        }
        
        else if(this.props.worker != null)

        var lcomments = this.props.comments.filter((comment) => comment.wid === this.props.worker.id)

        var list = lcomments.map((comment) => {return (
            <p>{comment.content}</p>
             );
        });

        const lratings = this.props.ratings.filter((rating) => rating.wid === this.props.worker.id);

        var sum = 0;
        for( var i = 0; i < lratings.length; i++ ){
            sum += parseInt( lratings[i].content, 10 );
        }

        var avg = (sum/lratings.length).toFixed(1);


        return(
            <div>
                <h6>Naam : {this.props.worker.naam}</h6>
                <h6>Experience : {this.props.worker.experience}</h6>
                <h6>Gender : {this.props.worker.gender}</h6>
                <h6>Phone no. : {this.props.worker.phno}</h6>
                <h6>Specialization 1 : {this.props.worker.specialization[0]}</h6>
                <h6>Specialization 2 : {this.props.worker.specialization[1]}</h6>
                {list}
                <p>{avg}</p>

                    <Button onClick={this.toggleModal1}>
                        <sapn className="fa fa-pencil"></sapn>{' '}Comment
                    </Button>

                    <Modal isOpen={this.state.isModal1Open} toggle={this.toggleModal1}>
                        <ModalHeader toggle={this.toggleModal1}>Submit Comment</ModalHeader>
                        <ModalBody>
                            <LocalForm onSubmit={values => this.handleSubmit1(values)}>
                                
                                <Row className="form-group">
                                    <Label htmlFor="message" md={2}>
                                        Comment
                                    </Label>
                                    <Col md={10}>
                                        <Control.textarea className="form-control" id="content" model=".content" name="content" rows="6"/>
                                    </Col>
                                </Row>

                                <Row className="form-group">
                                    <Col md={{size: 12}}>
                                        <Button color="primary" value="submit">
                                            Submit
                                        </Button>
                                    </Col>
                                </Row>
                            </LocalForm>
                        </ModalBody>
                    </Modal>
                    {'          '}
                    <Button onClick={this.toggleModal2}>
                        <sapn className="fa fa-pencil"></sapn>{' '}Rate
                    </Button>

                    <Modal isOpen={this.state.isModal2Open} toggle={this.toggleModal2}>
                        <ModalHeader toggle={this.toggleModal2}>Rate</ModalHeader>
                        <ModalBody>
                            <LocalForm onSubmit={values => this.handleSubmit2(values)}>
                                <Row className="form-group">
                                    <Label htmlFor="rating" md={2}>Rating</Label>
                                    <Col md={10}>
                                        <Control.select className="form-control" defaultValue="1" id="rating" model=".rating" name="rating">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </Control.select>
                                    </Col>
                                </Row>

                                <Row className="form-group">
                                    <Col md={{size: 12}}>
                                        <Button color="primary" value="submit">
                                            Submit
                                        </Button>
                                    </Col>
                                </Row>
                            </LocalForm>
                        </ModalBody>
                    </Modal>

            </div>
        );
    }
}

export default Worker_details;
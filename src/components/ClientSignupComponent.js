import React, {Component} from 'react';
import { Row, Col, Label, Button } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

class Signup_client extends Component {

    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        // event.preventDefault();
    }

    render(){
        return(
            <div>
                <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="name" md={2}>name</Label>
                                <Col md={10}>
                                    <Control.text model=".name" id="name" name="name"
                                        placeholder="Name"
                                        className="form-control"
                                         />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="pwd" md={2}>Password</Label>
                                <Col md={10}>
                                    <Control.text model=".pwd" id="pwd" name="pwd"
                                        placeholder="Password"
                                        className="form-control"
                                         />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="phno" md={2}>Ph no.</Label>
                                <Col md={10}>
                                    <Control.text model=".phno" id="phno" name="phno"
                                        placeholder="Ph no."
                                        className="form-control"
                                         />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email"
                                        placeholder="Email"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="hno" md={2}>House No.</Label>
                                <Col md={10}>
                                    <Control.text model=".hno" id="hno" name="hno"
                                        placeholder="House No."
                                        className="form-control"
                                         />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="street" md={2}>Street</Label>
                                <Col md={10}>
                                    <Control.text model=".street" id="street" name="street"
                                        placeholder="Street"
                                        className="form-control"
                                         />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="city" md={2}>City</Label>
                                <Col md={10}>
                                    <Control.text model=".city" id="city" name="city"
                                        placeholder="City"
                                        className="form-control"
                                         />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="state" md={2}>State</Label>
                                <Col md={10}>
                                    <Control.text model=".state" id="state" name="state"
                                        placeholder="State"
                                        className="form-control"
                                         />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                    Register
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
            </div>
        )
    }
}

export default Signup_client;
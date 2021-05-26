import React, {Component} from 'react';
import { Row, Col, Label, Button } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

class Signup_worker extends Component {

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
                                <Label htmlFor="experience" md={2}>Experience</Label>
                                <Col md={10}>
                                    <Control.text model=".experience" id="experience" name="experience"
                                        placeholder="Experience"
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
                                <Label htmlFor="gender" md={2}>Gender</Label>
                                <Col md={10}>
                                    <Control.text model=".gender" id="gender" name="gender"
                                        placeholder="Gender"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="specialization" md={2}>Specialization-1</Label>
                                <Col md={10}>
                                    <Control.text model=".specialization" id="specialization" name="specialization"
                                        placeholder="Specialization-1"
                                        className="form-control"
                                         />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="specialization" md={2}>Specialization-2</Label>
                                <Col md={10}>
                                    <Control.text model=".specialization" id="specialization" name="specialization"
                                        placeholder="Specialization-2"
                                        className="form-control"
                                         />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="specialization" md={2}>Specialization-3</Label>
                                <Col md={10}>
                                    <Control.text model=".specialization" id="specialization" name="specialization"
                                        placeholder="Specialization-3"
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

export default Signup_worker;
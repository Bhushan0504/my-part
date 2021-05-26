import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';
import Header from './HeaderComponent';

class Home extends Component {
    constructor(props) {
        super (props);
    
      }

    render() {
        return(
            <div>
                <Header clients={this.props.clients}/>
                    <div>
                        <Jumbotron fluid style={{ height: 300 }}>
                        <Container fluid>
                        <h1 className="display-3">Fluid jumbotron</h1>
                        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                        </Container>
                        </Jumbotron>
                    </div>
            </div>
        );
    }
}

export default Home;
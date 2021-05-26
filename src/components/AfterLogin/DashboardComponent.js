import React, {Component} from 'react';

class Dashboard extends Component {
    constructor(props){
        super(props);
    }
    renderlogin(){
        return(
            <div>
            <h4>{this.props.client.naam}</h4>
            </div>
        );
    }
    render(){
        return(
        <div>
            {this.renderlogin()}
        </div>
        );
}
}

export default Dashboard;
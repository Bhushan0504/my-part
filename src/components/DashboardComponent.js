import React, {Component} from 'react';
class Dashboard extends Component {
    constructor(props){
        super(props);
    }
    renderlogin(){
        const client = this.props.client
        if(client !== undefined){
        return(
            <div>
            <h4>{client.naam}</h4>
            </div>
        );
        }
        else{
            return(
                <div>
                <h4>un</h4>
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

export default Dashboard;
import React, {Component} from 'react';
import { Card, CardImgOverlay, CardTitle } from 'reactstrap';
import {Link} from 'react-router-dom';

class Dashboard extends Component {
    constructor(props){
        super(props);
    }

    
    render(){

      /*const lratings = this.props.ratings.filter((rating) => rating.wid === this.props.rating.id);

      var sum = 0;
      for( var i = 0; i < lratings.length; i++ ){
          sum += parseInt( lratings[i].content, 10 ); //don't forget to add the base
      }

      var avg = (sum/lratings.length).toFixed(1);*/


      const lworkers = this.props.workers.filter((worker) => this.props.client.address.area === worker.area)
      const list = lworkers.map((worker) => {return (
            <Card>
                  <Link to={`/worker/${this.props.client.id}/${worker.id}`} >
                      {/*<CardImg width="100%" src={worker.image} alt={worker.name} />*/}
                      <CardImgOverlay></CardImgOverlay>
                          <CardTitle>{worker.naam}</CardTitle>
                  </Link>
             </Card>
          );
      });

        return(
        <div>
          {list}
        </div>
        );
    }
}

export default Dashboard;
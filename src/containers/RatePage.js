import React from 'react';

import Divider from 'material-ui/Divider';
import PageBase from '../components/PageBase';
// import { Link } from 'react-router-dom';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardHeader, CardMedia, CardTitle, CardText, CardActions} from 'material-ui/Card';

// import Data from '../data';
// import Backend from '../models/backend.js';

import Paper from 'material-ui/Paper';
import Slider from 'material-ui/Slider';

import {pinkA200, grey400, grey600} from 'material-ui/styles/colors';
import CircularProgress from 'material-ui/CircularProgress';

class RatePage extends React.Component {

  render() {

    console.log('props.match.params.id', this.props.match.params.id);

    var user = null;

    if(this.props.friends) {
      user = this.props.friends.find(f => f.login === this.props.match.params.id)
    }

    user = {
      avatar_url: "#",
      login: "John Smith"
    }

    if (! user) {
      return (
        <div>
          <CircularProgress size={80} thickness={5} />
        </div>
      )
    }

    return (

        <div>

          <PageBase title={user.login} navigation="Application / View Friend">
          <Card>
            <CardHeader
              title="URL Avatar"
              subtitle="Subtitle"
              avatar={user.avatar_url}
            />
            <CardMedia>
              <img src={user.avatar_url} alt="" />
            </CardMedia>
            <CardTitle title="Card title" subtitle="Card subtitle" />
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
            <CardActions>
              <FlatButton label="Approve" />
              <FlatButton label="Deny" />
            </CardActions>
          </Card>

          </PageBase>
        </div>

    );
  }
};

export default RatePage;

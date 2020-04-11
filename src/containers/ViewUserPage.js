import React from 'react';
import PageBase from '../components/PageBase';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardHeader, CardMedia, CardTitle, CardText, CardActions} from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';

class ViewUserPage extends React.Component {

  render() {

    console.log('Loading user', this.props.match.params.id);

    var user = null;

    if(this.props.friends) {
      user = this.props.friends.find(f => f.login === this.props.match.params.id)
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

export default ViewUserPage;

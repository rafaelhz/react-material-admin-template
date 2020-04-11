import React from 'react';
import { Link } from 'react-router-dom';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import PageBase from '../components/PageBase';

// import globalStyles from '../styles';
// import Data from '../data';
// import Backend from '../models/backend.js';

class FriendListPage extends React.Component {

  render() {

    return (
        <PageBase title="Friend List"
                  navigation="Application / Friend List">
        <List>
          <Subheader>Today</Subheader>
          {this.props.friends.map((friend, i) =>
            <div key={friend.login}>
              <ListItem
                leftAvatar={<Avatar src={friend.avatar_url} />}
                containerElement={<Link to={"/view/" + friend.login} />}
                primaryText={friend.login}
                secondaryText={
                  <p>
                    {friend.url}
                  </p>
                }
                secondaryTextLines={1}
              />
              <Divider inset={true} />
            </div>
          )}
        </List>
      </PageBase>
    );
  }
};

export default FriendListPage;

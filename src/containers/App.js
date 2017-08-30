import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import LeftDrawer from '../components/LeftDrawer';
import withWidth, {LARGE, SMALL} from 'material-ui/utils/withWidth';
import Data from '../data';
import Facebook from '../models/facebook';

import { Switch, Route } from 'react-router-dom'

import Backend from '../models/backend.js';

import NotFoundPage from './NotFoundPage.js';
import LoginPage from './LoginPage';
import FormPage from './FormPage';
import TablePage from './TablePage';
import Dashboard from './DashboardPage';
import FriendListPage from './FriendListPage';
import RatePage from './RatePage';


/*
 * App is our global state provider right now.
 * All state changes need to come back here and we will pass them down as props.
 * @todo reflux
 */

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      navDrawerOpen: props.width === SMALL ? false : true,
      token: null,
      friends: [],
      user: null,
      uid: null,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.width !== nextProps.width) {
      this.setState({navDrawerOpen: nextProps.width === LARGE});
    }
  }

  handleChangeRequestNavDrawer() {
    this.setState({
      navDrawerOpen: !this.state.navDrawerOpen
    });
  }

  componentDidMount(){
    var that = this;

    Backend.getUsers().then(
      response => {
        console.log("Friends", response.data);
        that.setState({friends: response.data })
      },
      error => { console.log(error); }
    )

    // Try to load user next
    Facebook.IsLoggedIn().then(
      response => {

        console.log("Facebook Response", response);
        that.setToken(response);

        // console.log("loading feed")
        Facebook.Feed().then(
          response => {
            // console.log('Feed response', response);
            that.setUser(response)
          },
          err => { console.log("feed error", err); }
        )

      },
      error => { console.log(error); }
    )

  }

  setUser(user) {
    this.setState({
      user: {
        picture: user.picture.data.url,
        first_name: user.first_name,
        last_name: user.last_name,
        name: user.first_name,
        gender: user.gender,
        age_range: user.age_range,
      }
    })
  }

  setToken(token) {
    this.setState({token: token.accessToken, uid: token.uid})
  }


  login() {
    var that = this;
    Facebook.Login().then(
      response => {

        // console.log('Login response', response);
        this.setToken(response);
        // console.log("loading feed")

        Facebook.Feed().then(
          response => {
            // console.log('Feed response', response);
            that.setUser(response)
          },
          err => { console.log("feed error", err); }
        )
      },
      err => { console.log("login ERROR", err); }
    );
  }

  logout() {
    Facebook.Logout().then(
      response => { console.log(response); },
      err => { console.log(err); }
    )
  }

  render() {

    // console.log('App.js.render()', this.state)

    let { navDrawerOpen } = this.state;
    const paddingLeftDrawerOpen = 236;

    const styles = {
      header: {
        paddingLeft: navDrawerOpen ? paddingLeftDrawerOpen : 0
      },
      container: {
        padding: this.props.width === SMALL ? '80px 20px 20px 15px' : '100px 40px 40px 40px',
        // marginTop: '80px',
        marginLeft: navDrawerOpen && this.props.width !== SMALL ? paddingLeftDrawerOpen : 0
      }
    };

    var that = this;

    return (
        <div>
          <Header styles={styles.header}
                  handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer.bind(this)}
                  user={this.state.user}
                  onLogin={this.login.bind(this)}
                  onLogout={this.logout.bind(this)}/>

            <LeftDrawer navDrawerOpen={navDrawerOpen}
                        menus={Data.menus}
                        user={this.state.user}/>

            <div style={styles.container}>

              {/* {this.props.children} */}
              {/* {React.cloneElement(this.props.children, { friends: this.state.friends })} */}

              <Switch>
                <Route path="login" component={LoginPage}/>

                <Route path="/friendlist" render={props => <FriendListPage {...props} friends={that.state.friends.length ? that.state.friends : []} /> } />

                <Route path="/rate/:id" render={props => <RatePage {...props} {...this.state} /> } />

                <Route path="/form" component={FormPage} />
                <Route path="/table" component={TablePage} />
                <Route path="/" {...this.state} render={props => <Dashboard {...props} /> } />
                <Route path="*" component={NotFoundPage}/>
              </Switch>

            </div>
        </div>
    );
  }
}


// function addState(WrappedComponent, state, props) {
//   return <WrappedComponent {...state} {...props} />
// }


App.propTypes = {
  children: PropTypes.element,
  width: PropTypes.number
};

export default withWidth()(App);

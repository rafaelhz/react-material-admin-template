/*global FB*/

const promises = {
    AppID: null,
    init: () => {
        return new Promise((resolve, reject) => {
            if (typeof FB !== 'undefined') {
                resolve();
            } else {
                window.fbAsyncInit = (a) => {
                    FB.init({
                        appId      : promises.AppID,
                        cookie     : true,
                        xfbml      : false,
                        status     : true, // Lookup user status on load
                        version    : 'v2.5'
                    });
                    console.log("facebook-jssdk loaded")
                    resolve();
                };
                (function(d, s, id) {
                    var js, fjs = d.getElementsByTagName(s)[0];
                    if (d.getElementById(id)) return;
                    js = d.createElement(s); js.id = id;
                    js.src = "//connect.facebook.net/en_US/sdk.js";
                    fjs.parentNode.insertBefore(js, fjs);
                }(document, 'script', 'facebook-jssdk'));
            }
        });
    },
    checkLoginState: () => {
        return new Promise((resolve, reject) => {
            FB.getLoginStatus((response) => {
                // console.log('FB.getLoginStatus', response.status);
                response.status === 'connected' ? resolve(response) : reject(response);
            });
        });
    },
    login: () => {
        return new Promise((resolve, reject) => {
            FB.login((response) => {
                // console.log('FB.login', response.status);
                response.status === 'connected' ? resolve(response) : reject(response);
            }, {scope: 'public_profile,user_friends,email'});
        });
    },
    logout: () => {
        return new Promise((resolve, reject) => {
            FB.logout((response) => {
                response.authResponse ? resolve(response) : reject(response);
            });
        });
    },
    me: () => {
        return new Promise((resolve, reject) => {
            FB.api(
                '/me',
                {fields: 'first_name, last_name, picture{url}, age_range, gender'},
                response => response.error ? reject(response) : resolve(response)
            );
        });
    }
}

var Facebook = {
    SetAppID(AppID) {
      promises.AppID = AppID;
    },
    IsLoggedIn() {
      var p = new Promise((resolve, reject) => {
        promises.init()
                .then(
                    promises.checkLoginState,
                    error => { throw error; } // FB JS failed to load
                )
                .then(
                    response => {
                      // console.log('Facebook.AutoLogin()', response.authResponse);
                      resolve(response.authResponse);
                    },
                    error => { throw error; } // Logged out, not really an error
                )
                .catch((error) => {
                    console.warn(error);
                    reject(error);
                });
        });
        return p;
    },
    Login() {
      var p = new Promise((resolve, reject) => {
        promises.init()
                .then(
                    promises.checkLoginState,
                    error => { throw error; }
                )
                .then(
                    response => {
                      console.log('Facebook.Login()', response.authResponse);
                      resolve(response.authResponse);
                    },
                    err => {
                      promises.login()
                      .then(
                          response => {
                            console.log('Facebook.Login(2)', response.authResponse);
                            resolve(response.authResponse);
                          },
                          error => { throw error; }
                      )
                      .catch((error) => {
                          console.warn(error);
                          reject(error);
                      });
                    }
                )
                .catch((error) => {
                    console.warn(error);
                    reject(error);
                });
        });
        return p;
    },
    Me() {
      var p = new Promise((resolve, reject) => {

        promises.me()
          .then(
              feed => {
                resolve(feed);
              },
              error => { throw error; }
          )
          .catch((error) => {
              console.warn(error);
              reject(error);
          });

        })

        return p;
    },
    Logout() {
      var p = new Promise((resolve, reject) => {
        promises.init()
                .then(
                    promises.checkLoginState,
                    error => { throw error; }
                )
                .then(
                    promises.logout,
                    error => { throw error; }
                )
                .then(
                    response => { resolve(response); },
                    error => { throw error; }
                )
                .catch((error) => {
                    console.warn(error);
                    reject(error);
                });
        });
        return p;
    },
};

export default Facebook

// Props Proxy
// function ppHOC(WrappedComponent) {
//   return class PP extends React.Component {
//     render() {
//       return <WrappedComponent {...this.props}/>
//     }
//   }
// }

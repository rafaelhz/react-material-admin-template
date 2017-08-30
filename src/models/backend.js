import axios from 'axios';


var Backend = {

  // Temp store of all data for only this page load
  cache: {},

  getUsers: function() {
    return this.cacheAjax("https://api.github.com/users")
  },
  
  // Cache the result by wrapping the request in another promise
  cacheAjax: function(url) {
    var that = this;
    var p = new Promise(function(resolve, reject) {

      // Already have a copy?
      if(that.cache[url] !== undefined) {
        resolve(that.cache[url])
        return;
      }

      console.log("HTTP request:", url);

      // Load and save a copy
      axios.get(url).then(function(response) {
        if(response.status === 200) {
          that.cache[url] = response;
          resolve(response);
        } else {
          reject(response.statusText)
        }
      }).catch(function(e){
        reject(e);
      })
    });

    return p;
  }
}

export default Backend

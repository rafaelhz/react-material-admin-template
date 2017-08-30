
// Handles:
// - Private browsing bugs (iOS / Safari)
// - Browsers which don't support localStorage
// - Storing objects (not just strings)
// - Always returns null for missing items (instead of "")
// - Never crashes or throws an exception

var BrowserStore = {
  setItem: function(key, value) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {}
  },
  getItem: function(key) {
    try{
      var value = window.localStorage.getItem(key);
      return value && JSON.parse(value);
    } catch (e) {}
  },
  removeItem: function(key) {
    try {
      return window.localStorage.removeItem(key);
    } catch (e) {}
  },
  clear: function() {
    try {
      return window.localStorage.clear();
    } catch (e) {}
  }
}

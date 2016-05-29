var Reflux = require('reflux');
var Actions = require('./actions.jsx');

var Store = Reflux.createStore({
  listenables: [Actions],
  getFriends: function(){

  },
  postFriend: function(name){
    console.log(name);
    this.fireUpdate();
  },
  //Refresh function
  fireUpdate: function() {
      console.log(this.friends);
      this.trigger('change', this.friends);
  }
});

module.exports = Store;

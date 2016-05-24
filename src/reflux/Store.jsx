var Reflux = require('reflux');
var Actions = require('./Actions.jsx');

var Store = Reflux.createStore({
  listenables[Actions],
  getFriends: function(){

  },
  postFriend: function(name){
    console.log(name);
  },
  //Refresh function
  fireUpdate: function() {
      this.trigger('change', this.ingredients);
  }
});

module.exports = Store;

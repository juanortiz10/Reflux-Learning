var React = require('react');
var Reflux = require('reflux');
var Store = require('./reflux/Store.jsx');

var FriendsContainer = React.createClass({
  mixins:[Reflux.listenTo(Store),'click'],
  click:function(){

  },
  render: function(){
    return(
      <div>
        <label>Friend:</label>
        <input type="text"/>
        <button onClick={this.click}>Add</button>
      </div>
    );
  }
});

module.exports = FriendsContainer;

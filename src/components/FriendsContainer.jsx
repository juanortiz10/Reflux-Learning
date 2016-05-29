var React = require('react');
var Reflux = require('reflux');
var Actions = require('../reflux/actions.jsx');
var Store = require('../reflux/store.jsx');

var FriendsContainer = React.createClass({
  mixins:[Reflux.listenTo(Store, 'onChange')],
  getInitialState: function() {
      return {friends:[], newText: ""};
  },
  componentWillMount: function() {
      Actions.getFriends();
  },
  onChange: function(event, friends) {
      this.setState({friends: friends});
  },
  onInputChange: function(e) {
      this.setState({newText: e.target.value});
  },
  onClick: function(e) {
      if (this.state.newText) {
          Actions.postFriend(this.state.newText);
      }
      this.setState({newText: ""});
  },
  render: function(){
    return(
      <div>
        <label>Friend:</label>
        <input type="text" value={this.state.newText} onChange={this.onInputChange}/>
        <button onClick={this.onClick}>Add</button>

      </div>
    );
  }
});
module.exports = FriendsContainer;

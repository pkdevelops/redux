var React = require('react');
var ReactDOM = require('react-dom');
import Counter from './counter'

var Hello = React.createClass({
  render: function () {
    return (
    	<div>
      	<div>Hello World Program!</div>
				<Counter/>
			</div>
    )
  }
});



ReactDOM.render(<Hello />, document.getElementById('app'));
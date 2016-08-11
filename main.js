var React = require('react');
var ReactDOM = require('react-dom');

function Cell(props){
  // Notice we removed 'this' and are just treating props as a regular old parameter being passed to our function.
  return <div style={{width: 100, height: 100, display: 'inline-block', backgroundColor: props.color}}></div>
}

// because CheckberBoard has render only, we can make it as stateless function format
function CheckerBoard(pros){
  var arr = [];
  var n = pros.num; // pros.num is number of rows and columns
  for(var i = 0; i < n; i++) { // row
    for(var j = 0; j < n; j++) { // col
        if((i + j) % 2 == 0) {
          arr.push(<Cell color='red' key={i*n + j}/>); // when we give array of component, we should give unique key value, otherwise React will complain         
        } else arr.push(<Cell color='black' key={i*n + j}/>);     
    }
    arr.push(<br />);
  }
  return (<div>{arr}</div>);
}

var App = React.createClass({
  render: function(){
    return (
      <CheckerBoard num='6' />
    )
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
var React = require('react');
var styles = require('../styles');


var LoginContainer = React.createClass({
    render: function(){
        return(
            <div className = 'jumbotron col-sm-12 text-center' style ={styles.transparentBg}>
                <Login />
            </div>
        );
    }
});

module.exports = LoginContainer;

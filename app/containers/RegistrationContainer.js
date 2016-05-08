var React = require('react');
var Proptypes = React.Proptypes;
var Registration = require('../components/Registration');

var RegistrationContainer = React.createClass({
    getInitialState: function() {
        return{
            enrollquery : [],
            regisCourse : []
        }
    },
    render: function(){
        return(
            <Registration />
        );
    }
});

RegistrationContainer.propTypes = {
    enrollquery: React.PropTypes.array,
    regisCourse: React.PropTypes.array,
}

module.exports = RegistrationContainer;

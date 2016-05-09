var React = require('react');
var styles = require('../styles');
var Login = require('../components/Login');
var helper = require('../utils/CourseHelper');

var LoginContainer = React.createClass({

    render: function(){
        helper.searchCourse('6')
        .then(function(data){
            console.log(data);
        });
        return(
            <div className = 'jumbotron col-sm-12 text-center' style ={styles.transparentBg}>
                <Login />
            </div>
        );
    }
});

module.exports = LoginContainer;

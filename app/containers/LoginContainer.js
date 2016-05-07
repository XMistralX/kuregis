var React = require('react');
var styles = require('../styles');
var getAllCourseData = require('../utils/courseHelper').getAllCourseData;

function LoginContainer(props){
    getAllCourseData();
    return(
        <div className = 'jumbotron col-sm-12 text-center' style ={styles.transparentBg}>
            {props.children}
        </div>
    )
};

module.exports = LoginContainer;

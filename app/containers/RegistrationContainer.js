var React = require('react');
var Registration = require('../components/Registration');
var helper = require('../utils/CourseHelper');

var RegistrationContainer = React.createClass({
    getInitialState: function() {
        return{
            enrollquery : {},
            query: '',
            regisCourse : {},
        }
    },
    handleUpdateQuery: function(e){
        this.setState({
            query: e.target.value
        })
    },
    handleSubmitQuery: function(){
        helper.searchCourse(this.state.query)
        .then(function(data){
            this.setState({
                enrollquery: data
            })
        }.bind(this));

    },
    render: function(){
        return(
            <Registration
                enrollquery = {this.state.enrollquery}
                query = {this.state.query}
                onUpdateQuery = {this.handleUpdateQuery}
                onSubmitQuery = {this.handleSubmitQuery}
                regisCourse = {this.state.regisCourse}/>
        );
    }
});



module.exports = RegistrationContainer;

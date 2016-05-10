var React = require('react');
var RegisterPanel = require('../components/RegisterPanel');
var SearchPanel = require('../components/SearchPanel');
var helper = require('../utils/CourseHelper');
var PropTypes = React.PropTypes;


var RegistrationContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function() {
        return{
            enrollquery : {},
            query: '',
            course: '',
            regisCourse : [],
        }
    },
    handleSubmitCourse: function(courseNum){
        this.context.router.push({
            pathname: 'regis/' + courseNum,
        })
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
    handleEnrollCourse: function(courseData){
        this.setState({
            regisCourse: this.state.regisCourse.concat([courseData])
        })
    },
    handleDropCourse: function(index){
        var cacheRegis = this.state.regisCourse.slice();
        cacheRegis.splice(index, 1);
        this.setState({regisCourse: cacheRegis});
        
    },
    render: function(){
        return(
            <div>
                {React.cloneElement(this.props.children, {
                    enrollquery: this.state.enrollquery,
                    query: this.state.query,
                    onUpdateQuery: this.handleUpdateQuery,
                    onSubmitQuery: this.handleSubmitQuery,
                    onSubmitCourse: this.handleSubmitCourse,
                    onEnrollCourse: this.handleEnrollCourse})}

                {React.cloneElement(<RegisterPanel />, {
                    regisCourse :this.state.regisCourse,
                    onDropCourse : this.handleDropCourse}
                    )}
            </div>


        );
    }
});



module.exports = RegistrationContainer;

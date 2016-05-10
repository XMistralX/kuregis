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
            credit: 0,
            show: false,
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
        if(this.state.credit + courseData.credit <= 23 ){
            var cacheCredit = this.state.credit;
            var valid = true;
            cacheCredit += courseData.credit;
            for(var i = 0 ; i < this.state.regisCourse.length ; i++){
                if(courseData.name == this.state.regisCourse[i].name && courseData.section == this.state.regisCourse[i].section){
                    valid = false;
                }
            }
            if(valid){
                this.setState({
                    regisCourse: this.state.regisCourse.concat([courseData]),
                    credit: cacheCredit
                })
            }
        }
    },
    handleDropCourse: function(index){
        var cacheRegis = this.state.regisCourse.slice();
        cacheRegis.splice(index, 1);
        this.setState({regisCourse: cacheRegis});

    },
    handleExportJSON: function(){

        if(this.state.show){
            this.setState({show: false});
        }
        else{
            this.setState({show: true});
        }
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
                    onDropCourse : this.handleDropCourse,
                    credit: this.state.credit,
                    onExportJSON: this.handleExportJSON,
                    show: this.state.show}
                    )}
            </div>


        );
    }
});



module.exports = RegistrationContainer;

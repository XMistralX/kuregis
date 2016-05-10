var React = require('react');
var Course = require('../components/Course');
var helper = require('../utils/CourseHelper');

var CourseContainer = React.createClass({
    getInitialState: function(){
        return{
            courseData: null,
            sectionData : null
        }
    },
    componentDidMount: function() {
        helper.getCourseData(this.props.params.courseNum)
        .then(function(data){
            this.setState({
                courseData: data
            })


        }.bind(this));
        var http = new XMLHttpRequest();
        var url = 'https://whsatku.github.io/skecourses/sections/'+this.props.params.courseNum+'.json';
        http.open('HEAD', url, false);
        http.send();
        if (http.status != 404){
            helper.getSectionData(this.props.params.courseNum)
            .then(function(data){
                this.setState({
                    sectionData: data
                })
            }.bind(this));
        }
        this.setState({
            sectionData: {}
        })



    },
    render: function(){
        if(this.state.courseData && this.state.sectionData){

            return(

                <Course
                    courseData = {this.state.courseData}
                    sectionData = {this.state.sectionData}
                    onEnrollCourse = {this.props.onEnrollCourse}/>
            )
        }
         return (
             <div className = 'col-md-6 col-md-offset-1'>
                 <div className = 'bs-callout bs-callout-primary '>
                     <h4></h4>
                     <br></br>
                     <strong>Course ID</strong>:
                     <br></br>
                     <strong>Credit(Lab/Lec/Self)</strong> :
                     <br></br>
                     <strong>Description</strong> :
                    
                     <br></br>

                 </div>
             </div>
         );
    }
})

module.exports = CourseContainer

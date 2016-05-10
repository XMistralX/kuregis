var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


function Button (props) {
  return (
     <button type='button'
     className='btn btn-md btn-success'
     onClick={props.onSubmitQuery}>
     {props.children}
    </button>
  )
}
function Button2 (props) {
  return (
     <button type='button'
     className='btn btn-md btn-success'
     onClick={props.onEnrollCourse}>
     {props.children}
    </button>
  )
}
function Table(props){
    return(
        <table className = 'table'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Section</th>
                    <th>Instructor</th>
                    <th>Location</th>
                    <th>Accepted Number</th>
                    <th>Type</th>
                    <th>Enroll</th>
                </tr>
            </thead>
            <tbody>
                {props.children}
            </tbody>
        </table>
    )
}
function SectionItem(props){
    var courseObj = {
        id : props.courseData.id,
        name : props.courseData.name.en,
        section : props.item.id,
        credit : props.courseData.credit.total,
    };
    return(
        <tr>
            <th>{props.numElement}</th>
            <td>{props.item.id}</td>
            <td>{props.item.instructors[0]}</td>
            <td>{props.item.location}</td>
            <td>{props.item.enrolled}/{props.item.accept}</td>
            <td>{props.item.type}</td>
            <td><Button2 onEnrollCourse = {function(){props.onEnrollCourse(courseObj)}}>Enroll</Button2></td>
        </tr>

    )
}
function PrereqRow(props){
    var rows = [];
    if(props.prereq.simultaneous)
        rows.push('Simultaneous');
    else
        rows.push('Not Simultaneous');

    return(
        <div>
            <br></br>
            <strong>Prerequisite</strong> : {props.prereq.id} <strong>{rows}</strong>
        </div>
    )
}
function Course(props){
    if((props.courseData.prereq[0] != null) ){
        var prereq = [];
        for (var i = 0; i <  props.courseData.prereq.length; i++) {
            prereq.push(<PrereqRow prereq = {props.courseData.prereq[i]} key = {i} />);
        }
    }
    if((props.sectionData[0] != null) ){
        var section = [];
        for(var i = 0 ; i < props.sectionData.length; i++){
            section.push(<SectionItem item = {props.sectionData[i]} onEnrollCourse = {props.onEnrollCourse} courseData = {props.courseData} key = {i} numElement = {i+1} />);
        }
    }
    if(props.sectionData[0] != null){
        return(
            <div className = 'col-md-6 col-md-offset-1'>
                <Link to = 'regis'><h3>Back</h3></Link>
                <div className = 'bs-callout bs-callout-primary '>
                    <h4>{props.courseData.name.en}</h4>
                    <br></br>
                    <strong>Course ID</strong>: {props.courseData.id}
                    <br></br>
                    <strong>Credit(Lab/Lec/Self)</strong> : {props.courseData.credit.lab}/{props.courseData.credit.lecture}/{props.courseData.credit.self}
                    <br></br>
                    <strong>Description</strong> : {props.courseData.description.en}
                    {prereq}
                    <br></br>
                    <Table>
                        {section}
                    </Table>
                </div>
            </div>
        )
    }
    if(props.sectionData[0] == null){
        return(
            <div className = 'col-md-6 col-md-offset-1'>
                <div className = 'bs-callout bs-callout-primary '>
                    <h4>{props.courseData.name.en}</h4>
                    <br></br>
                    <strong>Course ID</strong>: {props.courseData.id}
                    <br></br>
                    <strong>Credit(Lab/Lec/Self)</strong> : {props.courseData.credit.lab}/{props.courseData.credit.lecture}/{props.courseData.credit.self}
                    <br></br>
                    <strong>Description</strong> : {props.courseData.description.en}
                    {prereq}
                    <br></br>
                    <strong>This course are not offered in this semester</strong>
                </div>
            </div>
        )
    }
}

module.exports = Course;

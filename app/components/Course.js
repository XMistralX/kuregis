var React = require('react');

function Course(props){
    return(
        <div className= 'col-md-10 col-md-offset-1'>
            <div className = 'bs-callout bs-callout-primary'>
                <h4>Selected Topics in Software and Knowledge Engineering</h4>
                <br></br>
                &nbsp;&nbsp;&nbsp;&nbsp; <strong>Course ID</strong>: 01219496
                <br></br>
                &nbsp;&nbsp;&nbsp;&nbsp; <strong>Credit(Lab/Lec/Self)</strong> : 0/3/6
                <br></br>
                &nbsp;&nbsp;&nbsp;&nbsp; <strong>Description</strong> : Selected topics in software and knowledge engineering at the bachelor’s degree level, topics are subject to change each semester.
                <br></br>
                &nbsp;&nbsp;&nbsp;&nbsp; <strong>Prerequisite</strong> :
                <br></br>
            </div>
        </div>
    )
}

module.exports = Course;

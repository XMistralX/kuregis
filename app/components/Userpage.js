var React = require('react');
var styles = require('../styles');

function Userpage(props){
    return (
        <div className = 'col-md-10 col-md-offset-1'>
        <div className="bs-callout bs-callout-info">
            <h4>Personal Information</h4>
            &nbsp;&nbsp;&nbsp;&nbsp; <strong>Name</strong>: Tony Stark
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp; <strong>Sex</strong> : Male
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp; <strong>Thai Citizen ID</strong> : X-XXXX-XXXXX-XX-X
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp; <strong>Student ID </strong> : 5610546XXX
            <br></br>
        </div>
        <div className="bs-callout bs-callout-success">
            <h4>Academic Information <span className="label label-success">Paid</span></h4>
            &nbsp;&nbsp;&nbsp;&nbsp; <strong>Program Type</strong> : International
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp; <strong>Degree Level</strong> : Bachelor
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp; <strong>Campus</strong> : Bangkhen
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp; <strong>Faculty</strong> : Engineering
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp; <strong>Major</strong> : Software and Knowledge Engineering(E17)
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp; <strong>Advisor</strong> : Jim Jones(E00000)
            <br></br>
            <button type='button' className='btn btn-lg btn-success' style={styles.buttonStyle}>Registration</button>
        </div>
        </div>

    )
}

module.exports = Userpage

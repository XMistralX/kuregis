var React = require('react');
var CourseItem = require('./CourseItem');
var Proptypes = React.Proptypes;
var styles = {
    buttonStyle: {
        marginLeft:'auto',
        marginRight:0,
        marginTop: '10px',
        display: 'block',

    }
}

function Table(props){
    return(
        <table className = 'table'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Course ID</th>
                    <th>Name</th>
                    <th>Lab Credit</th>
                    <th>Lecture Credit</th>
                    <th>Self Credit</th>
                </tr>
            </thead>
            <tbody>
                {props.children}
            </tbody>
        </table>
    )
}
function InputField (props) {
  return (
    <input
      className='form-control'
      onChange={props.onUpdateQuery}
      placeholder='Class'
      type='text'
      value={props.query} />
  )
}
function Button (props) {
  return (
     <button type='button'
     style = {styles.buttonStyle}
     className='btn btn-md btn-success'
     onClick={props.onSubmitQuery}>
     {props.children}
    </button>
  )
}

function Registration (props) {
    if(!(typeof props.enrollquery === 'undefined') ){
        var rows = [];
        for (var i=0; i < props.enrollquery.length; i++) {
            rows.push(<CourseItem item={props.enrollquery[i]} key={i} />);
        }
    }
    return(
        <div>
        <div className = 'row'>
            <div className = 'col-md-6 col-md-offset-1'>
                <div className = 'bs-callout bs-callout-primary'>
                <h3>Registration</h3>
                <InputField
                onUpdateQuery={props.onUpdateQuery}
                query={props.query} />
            <Button
                onSubmitQuery={props.onSubmitQuery}>
                Search
            </Button>

                </div>
            </div>
            <div className= 'col-md-4  '>
                <div className = 'bs-callout bs-callout-primary'>
                    <h4>Enrolled Course</h4>

                </div>
            </div>

        </div>
        <div className = 'row'>
            <div className = 'col-md-6 col-md-offset-1'>
                <div className = 'bs-callout bs-callout-primary'>
                <h3>Result</h3>
                    <Table />

                </div>
            </div>
        </div>
        </div>
    )
}
Registration.propTypes = {
    enrollquery: React.PropTypes.object,
    query: React.PropTypes.string,
    onUpdateQuery: React.PropTypes.func,
    onSubmitQuery: React.PropTypes.func,
    regisCourse: React.PropTypes.object,
}

module.exports = Registration;

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
                    <th>Credit(Lab/Lec/Self)</th>
                    <th>Total Credit</th>
                    <th>Status</th>
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
        var cache = props.enrollquery;
        console.log(cache);
        var keys = Object.keys(cache);
        var rows = [];
        for (var i = 0; i < keys.length; i++) {
            var id = keys[i];
            rows.push(<CourseItem item={cache[id]} key = {cache[id].id} numElement = {i+1}  />);
        }

    }
    if()
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
                    <h4>Registered Course</h4>

                </div>
            </div>

        </div>
        <div className = 'row'>
            <div className = 'col-md-6 col-md-offset-1'>
                <div className = 'bs-callout bs-callout-primary'>
                <h3>Result</h3>
                    <Table>
                        {rows}
                    </Table>

                </div>
            </div>
        </div>
        </div>
    )
}
Registration.propTypes = {
    display: React.propTypes.string,
    enrollquery: React.PropTypes.object,
    query: React.PropTypes.string,
    onUpdateQuery: React.PropTypes.func,
    onSubmitQuery: React.PropTypes.func,
    regisCourse: React.PropTypes.object,
}

module.exports = Registration;

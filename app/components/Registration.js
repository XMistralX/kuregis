var React = require('react');

var styles = {
    buttonStyle: {
        marginLeft:'auto',
        marginRight:0,
        marginTop: '10px',
        display: 'block',

    }
}
var Proptypes = React.Proptypes;

function CourseItem(props){
    return(
        <tr>
            <th>{props.numElement}</th>
            <td>{props.item.id}</td>
            <td><Link to= 'regis'}>{props.item.name.en}</Link></td>
            <td>{props.item.credit.lab}/{props.item.credit.lecture}/{props.item.credit.self}</td>
            <td>{props.item.credit.total}</td>
            <td><Button2 onSubmitCourse = {function(){props.onSubmitCourse(props.item.id)}}>Enroll</Button2></td>
        </tr>

    )
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
function Button2 (props) {
  return (
     <button type='button'
     style = {styles.buttonStyle}
     className='btn btn-md btn-success'
     onClick={props.onSubmitCourse}>
     {props.children}
    </button>
  )
}


function Registration (props) {
    if(!(typeof props.enrollquery === 'undefined') ){
        var cache = props.enrollquery;

        var keys = Object.keys(cache);
        var rows = [];
        for (var i = 0; i < keys.length; i++) {
            var id = keys[i];
            rows.push(<CourseItem item={cache[id]} key = {cache[id].id} numElement = {i+1} onSubmitCourse = {props.onSubmitCourse}   />);
        }
    }
    return(
        <div>
            <div className = 'col-md-6 col-md-offset-1'>
                <div className = 'row'>
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
                    <div className = 'bs-callout bs-callout-primary'>
                        <h3>Result</h3>
                            <Table>
                                {rows}
                            </Table>

                    </div>
                </div>
            </div>
            <div className= 'col-md-4  '>
                <div className = 'bs-callout bs-callout-primary'>
                    <h4>Registered Course</h4>

                </div>
            </div>
        </div>
    )
}
Registration.propTypes = {
    enrollquery: React.PropTypes.object,
    query: React.PropTypes.string,
    onSubmitCourse: React.PropTypes.func,
    onUpdateQuery: React.PropTypes.func,
    onSubmitQuery: React.PropTypes.func,
    regisCourse: React.PropTypes.object,
}

module.exports = Registration;

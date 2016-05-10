var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var styles = {
    buttonStyle: {
        marginLeft:'auto',
        marginRight:0,
        marginTop: '10px',
        display: 'block',

    }
}
function CourseLink(props){
    return <a onClick={props.onSubmitCourse}>{props.children}</a>
}
function CourseItem(props){
    return(
        <tr>
            <th>{props.numElement}</th>
            <td>{props.item.id}</td>
            <td><CourseLink onSubmitCourse = {function(){props.onSubmitCourse(props.item.id)}}>{props.item.name.en}</CourseLink></td>
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

function SearchPanel(props){
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
    )
}

module.exports = SearchPanel;

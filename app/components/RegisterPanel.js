var React = require('react');

function Table(props){
    return(
        <table className = 'table'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Section</th>
                    <th>Credit</th>
                    <th>Drop</th>
                </tr>
            </thead>
            <tbody>
                {props.children}
            </tbody>
        </table>
    )
}
function Button (props) {
  return (
     <button type='button'
     className='btn btn-md btn-danger'
     onClick={props.onDropCourse}>
     {props.children}
    </button>
  )
}
function RegisterItem(props){
    return(
        <tr>
            <th>{props.numElement + 1}</th>
            <td>{props.item.id}</td>
            <td>{props.item.name}</td>
            <td>{props.item.section}</td>
            <td>{props.item.credit}</td>
            <td><Button onDropCourse = {function(){props.onDropCourse(props.numElement)}} >Drop</Button></td>
        </tr>

    )
}

function RegisterPanel(props){
    if(!(typeof props.regisCourse === 'undefined') ){
        var cache = props.regisCourse;

        var rows = [];
        for (var i = 0; i < cache.length; i++) {

            rows.push(<RegisterItem item={cache[i]} key = {i} numElement = {i} onDropCourse = {props.onDropCourse}  />);
        }

    }
    return(
        <div className= 'col-md-4  '>
            <div className = 'bs-callout bs-callout-primary'>
                <h4>Registered Course</h4>
                <Table>
                    {rows}
                </Table>
            </div>
        </div>
    )
}

module.exports = RegisterPanel;

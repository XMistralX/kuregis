var React = require('react');
var ReactRouter = require('react-router');
var Proptypes = React.Proptypes;
var Link = ReactRouter.Link

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

function CourseItem(props){
    return(
        <tr>
            <th>{props.numElement}</th>
            <td>{props.item.id}</td>
            <td>{props.item.name.en}</td>
            <td>{props.item.credit.lab}/{props.item.credit.lecture}/{props.item.credit.self}</td>
            <td>{props.item.credit.total}</td>
            <td><Link to = '/course'>Not Registered</Link></td>
        </tr>

    )
}

CourseItem.propTypes = {
    item: React.PropTypes.object,

}

module.exports = CourseItem;

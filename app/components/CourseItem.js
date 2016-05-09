var React = require('react');
var Proptypes = React.Proptypes;

function CourseItem(props){
    return(
        <tr>
            <th></th>
            <td>{props.item.id}</td>
            <td>{props.item.name.en}</td>
            <td>{props.item.credit.lab}</td>
            <td>{props.item.credit.lecture}</td>
            <td>{props.item.credit.self}</td>
        </tr>
    )
}

CourseItem.propTypes = {
    item: React.PropTypes.object,

}

module.exports = CourseItem;

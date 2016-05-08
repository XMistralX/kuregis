var React = require('react');
var Proptypes = React.Proptypes;

function CourseItem(props){
    return(
        <tr>
            <th>{key + 1}</th>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.credit.lab}</td>
            <td>{item.credit.lecture}</td>
            <td>{item.credit.self}</td>
        </tr>
    )
}

CourseItem.propTypes = {
    item: React.PropTypes.object,
    key: React.PropTypes.number,
}

module.exports = CourseItem;

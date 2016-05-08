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
function FormInput(){
    return(
        <input
          className='form-control'
          placeholder='Class'
          type='text'
           />
    )
}
// function Registration (props) {
//     //var rows = [];
//     //for (var i=0; i < props.enrollquery.length; i++) {
//     //    rows.push(<CourseItem item={props.enrollquery[i]} key={i}>);
//     //}
//     return(
//         <div>
//         <div className = 'row'>
//             <div className = 'col-md-6 col-md-offset-1'>
//                 <div className = 'bs-callout bs-callout-primary'>
//                 <h3>Registration</h3>
//
//                 <>
//                <button type='button' className='btn btn-md btn-success' style = {styles.buttonStyle} >Search</button>
//
//                 </div>
//             </div>
//             <div className= 'col-md-4  '>
//                 <div className = 'bs-callout bs-callout-primary'>
//                     <h4>Enrolled Course</h4>
//
//                 </div>
//             </div>
//
//         </div>
//         <div className = 'row'>
//             <div className = 'col-md-6 col-md-offset-1'>
//                 <div className = 'bs-callout bs-callout-primary'>
//                 <h3>Result</h3>
//                     <Table />
//
//                 </div>
//             </div>
//         </div>
//         </div>
//     )
// }
var Registration = React.createClass({

     render: function(){
         if(!(typeof this.props.enrollquery === 'undefined') ){
             var rows = [];
             for (var i=0; i < this.props.enrollquery.length; i++) {
                 rows.push(<CourseItem item={this.props.enrollquery[i]} key={i} />);
             }
         }
         return (
             <div>
             <div className = 'row'>
                 <div className = 'col-md-6 col-md-offset-1'>
                     <div className = 'bs-callout bs-callout-primary'>
                     <h3>Registration</h3>
                     <input
                       className='form-control'
                       placeholder='Class'
                       type='text'
                        />

                    <button type='button' className='btn btn-md btn-success' style = {styles.buttonStyle} >Search</button>

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

                             </tbody>
                         </table>
                     </div>
                 </div>
             </div>
             </div>
         )
     }
 })
Registration.propTypes = {
    enrollquery: React.PropTypes.object,
    regisCourse: React.PropTypes.object,
}

module.exports = Registration;

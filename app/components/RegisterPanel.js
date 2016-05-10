var React = require('react');
var Modal = require('react-overlays').Modal;
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
function Button2 (props) {
  return (
     <button type='button'
     className='btn btn-md btn-success'
     style = {styles.buttonStyle}
     onClick={props.onExportJSON}>
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
                <div className = 'rows'>
                    <strong>Credit</strong> {props.credit} / 23
                    <Button2 onExportJSON = {props.onExportJSON}>Export</Button2>
                    <Modal show = {props.show} backdropClassName="modal-backdrop in"
                        onHide = {props.onExportJSON}>
                    	<div className="modal" style={{display: 'block'}}>
                    		<div className="modal-dialog">
                    			<div className="modal-content">
                    				<div className="modal-header">
                    					<h4>Export to JSON</h4>
                    				</div>
                    				<div className="modal-body">
                    					<textarea className="form-control" style={{height: '200px'}} autoFocus={true} readOnly={true} value={JSON.stringify(props.regisCourse)}/>
                    				</div>
                    				<div className="modal-footer">
                    					<button type="button" className="btn btn-default"
                                            onClick = {props.onExportJSON}>
                    						Close
                    					</button>
                    				</div>
                    			</div>
                    		</div>
                    	</div>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

module.exports = RegisterPanel;

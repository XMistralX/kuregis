var React = require('react');
var styles = {
    buttonStyle: {
        marginLeft:'auto',
        marginRight:0,
        marginTop: '10px',
        display: 'block',

    }
}

function Registration () {
    return(
        <div>
        <div className = 'row'>
            <div className= 'col-md-4 col-md-offset-1 '>
                <div className = 'bs-callout bs-callout-primary'>
                    <h4>Enrolled Course</h4>

                </div>
            </div>
            <div className = 'col-md-6'>
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

        </div>
        <div className = 'row'>
            <div className = 'col-md-6 col-md-offset-5'>
                <div className = 'bs-callout bs-callout-primary'>
                <h3>Result</h3>


                </div>
            </div>
        </div>
        </div>
    )
}

module.exports = Registration;

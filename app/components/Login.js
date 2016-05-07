var React = require('react');
var ReactRouter = require('react-router');
var LoginContainer = require('../containers/LoginContainer');
var styles = require('../styles');
var Link = ReactRouter.Link


function Login () {
  return (
      <LoginContainer>
          <div>
              <h1 >KURegis</h1>
              <p className='lead'>Registration Redesign</p>
              <div className = 'row' >
              <div className = "form-group col-xs-2 col-xs-offset-5">
                  <input
                      className = "form-control"
                      placeholder = "Username"
                      type = "text"/>
              </div>
              </div>
              <div className = 'row' >
              <div className = "form-group col-xs-2 col-xs-offset-5">
                  <input
                      className = "form-control"
                      placeholder = "Password"
                      type = "password"/>
              </div>
              </div>
                <button type='button' className='btn btn-sm btn-success'>Login</button>
        </div>
    </LoginContainer>
  )
};

module.exports = Login;

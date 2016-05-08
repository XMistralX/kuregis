var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var LoginContainer = require('../containers/LoginContainer');
var Main = require('../containers/Main');
var Userpage = require('../components/Userpage');
var Course = require('../components/Course');
var RegistrationContainer = require('../containers/RegistrationContainer');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
        <IndexRoute component = {LoginContainer} />
        <Route path = 'user' component = {Userpage} />
        <Route path = 'course' component = {Course} />
        <Route path = 'regis' component = {RegistrationContainer} />
    </Route>
  </Router>
);

module.exports = routes;

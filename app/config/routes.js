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
var CourseContainer = require('../containers/CourseContainer');
var RegistrationContainer = require('../containers/RegistrationContainer');
var SearchPanel = require('../components/SearchPanel');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
        <IndexRoute component = {LoginContainer} />
        <Route path = 'user' component = {Userpage} />
        <Route path = 'regis' component = {RegistrationContainer}>
            <IndexRoute component={SearchPanel} />
            <Route path = ':courseNum' component = {CourseContainer} />
        </Route>
    </Route>
  </Router>
);

module.exports = routes;

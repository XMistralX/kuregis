var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var LoginContainer = require('../containers/LoginContainer');
var Login = require('../components/Login');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Login}>
    </Route>
  </Router>
);

module.exports = routes;

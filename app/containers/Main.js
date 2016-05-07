var React = require('react');

var Main = React.createClass({
    render: function(){
        return(
            <div>
            <nav className="navbar navbar-default">
                <div className ="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">KURegis</a>
                    </div>
                    <p className="navbar-text navbar-right">Signed in as <a href="#" className="navbar-link">Mark Otto</a></p>
                </div>
            </nav>
            {this.props.children}
            </div>
        );
    }
});

module.exports = Main;

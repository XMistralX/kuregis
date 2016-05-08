var React = require('react');
var Registration = require('../components/Registration');

var RegistrationContainer = React.createClass({
    data:{

    },
    getInitialState: function() {
        return{
            enrollquery : {},
            regisCourse : {}
        }
    },
    render: function(){
        var courseData = [];
        // if(!(typeof enrollquery === 'undefined') ){
        //     for(var i = 0 ; i < this.enrollquery.length ; i++){
        //         courseData.push
        //         ();
        //
        //     }
        // }
        //
        if(!(typeof this.state.enrollquery === 'undefined') ){
            var rows = [];
            for (var i=0; i < this.state.enrollquery.length; i++) {
                rows.push(<CourseItem item={this.state.enrollquery[i]} key={i} />);
            }
        }
        console.log(this.state.enrollquery.length);
        return(
            <Registration
                enrollquery = {this.state.enrollquery}
                regisCourse = {this.state.regisCourse}/>
        );
    }
});



module.exports = RegistrationContainer;

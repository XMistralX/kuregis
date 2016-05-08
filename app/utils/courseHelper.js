var axios = require('axios');

function getAllCourseData(){
    return axios.get('https://whsatku.github.io/skecourses/combined.json')
    .then(function (courseData) {
      return courseData.data;
    });
}
var CourseHelper = {
    db : getAllCourseData(),
    getCourseData: function(courseNum){
        return axios.get('https://whsatku.github.io/skecourses/'+courseNum+'.json')
        .then(function (courseData) {
          return courseData.data;
        });
    },
    searchCourse: function(partialCourseNum){
        var queryCourse = {};
        var queryId = 1;
        for(var i = 0; this.db.length ; i++){
            if(this.db[i].id.match(partialCourseNum)){
                queryCourse[queryId] = this.db[i];
            }
        }

        return queryCourse;
    }

};
module.exports = CourseHelper;

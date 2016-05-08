var axios = require('axios');

function getAllCourseData(){
    return axios.get('https://whsatku.github.io/skecourses/combined.json')
    .then(function (courseData) {
      console.log(courseData.data);
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
    searchCourse: function(query){
        var queryCourse = {};
        var queryId = 1;
        for(var i = 0; this.db.length ; i++){
            if(db[i].id.match(query)){
                queryCourse[queryId] = db[i];
            }
        }
        console.log(queryCourse);
        return queryCourse;
    }

};
module.exports = CourseHelper;

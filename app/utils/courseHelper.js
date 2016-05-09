var axios = require('axios');

function getAllCourseData(){
    return axios.get('https://whsatku.github.io/skecourses/combined.json')
    .then(function (courseData) {
      return courseData.data;
    });
}
var CourseHelper = {
    getSectionData: function(courseNum){
        return axios.get('https://whsatku.github.io/skecourses/sections/'+courseNum+'.json')
        .then(function (sectionData) {
          return sectionData.data;
        });
    },
    getCourseData: function(courseNum){
        return axios.get('https://whsatku.github.io/skecourses/'+courseNum+'.json')
        .then(function (courseData) {
          return courseData.data;
        });
    },
    searchCourse: function(query){
        return getAllCourseData()
        .then(function(allCourse){

            var queryCourse = {};
            var queryId = 1;

             var keys = Object.keys(allCourse);

             for(var i = 0; i < keys.length; i++)
             {
                 var key = keys[i];

                 if(allCourse[key].id.match(query)){
                     queryCourse[queryId] = allCourse[key];
                     queryId++;
                 }
             }
             console.log(queryCourse);
            return queryCourse;
        })

    }

};
module.exports = CourseHelper;

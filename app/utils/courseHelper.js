var axios = require('axios');

function getAllCourseData(){
    return axios.get('https://whsatku.github.io/skecourses/combined.json')
    .then(function (courseData) {
      console.log(courseData)
      return courseData;
    });
}
module.exports = {
    getAllCourseData : getAllCourseData
}

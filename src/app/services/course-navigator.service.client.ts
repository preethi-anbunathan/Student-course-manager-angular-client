export class CourseNavigatorServiceClient {
  findAllCourses() {
    return fetch('https://course-manager-webdev.herokuapp.com/api/course')
      .then(response => response.json());
  }
  findAllModulesForCourses(courseId) {
    return fetch('https://course-manager-webdev.herokuapp.com/api/course/' + courseId + '/module')
      .then(response => response.json());
  }
}

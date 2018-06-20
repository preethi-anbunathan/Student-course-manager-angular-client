export class TopicServiceClient {
  findTopicsForLesson(lessonId,moduleId,courseId) {
    console.log("In topic service client:"+moduleId);
    console.log("In topic service client:"+courseId);
    console.log("In topic service client:"+lessonId);
    return fetch('https://course-manager-webdev.herokuapp.com/api/course/'+ courseId+ '/module/' + moduleId + '/lesson/'+lessonId+'/topic')
      .then(response => response.json());
  }
}

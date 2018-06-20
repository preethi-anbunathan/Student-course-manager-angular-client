export class WidgetServiceClient {
  findWidgetsForTopic(topicId) {
    console.log("Widget service client:"+topicId);
    return fetch('https://course-manager-webdev.herokuapp.com/api/topic/' + topicId + '/widget')
      .then(response => response.json());
  }
}

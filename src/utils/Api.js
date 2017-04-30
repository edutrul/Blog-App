const API_KEY = '';

export default class Api {
  static getPostList() {
    let url = 'https://jsonplaceholder.typicode.com/posts';

    return fetch(url)
    .then(response => response.json())
    .then(json     => {
      const data = [
        {
          "title": "El Gallo kiko",
          "body": "En las cálidas mañanas de verano, el gallo Kiko es el primero en despertarse. Abre sus pequeños ojos, sacude sus plumas y saluda al Sol. Después, sube al palo más alto del gallinero para que todo el mundo lo vea. Sabe que su trabajo es uno de los más importantes de la granja: despertar con su kikirikí a todos los animales.",
          "image": "https://s17.postimg.org/87fbxdyqn/gallo-kiko-hackathon-edtech.png",
          "speaker": "Eduardo Telaya",
          "comments": 34,
          "likes": 28
        },
        {
          "title": "El Gallo kiko",
          "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
          "image": "https://s17.postimg.org/87fbxdyqn/gallo-kiko-hackathon-edtech.png",
          "speaker": "Eduardo Telaya",
          "comments": 34,
          "likes": 28
        },
        {
          "title": "El Gallo kiko",
          "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
          "image": "https://s17.postimg.org/87fbxdyqn/gallo-kiko-hackathon-edtech.png",
          "speaker": "Eduardo Telaya",
          "comments": 34,
          "likes": 28
        },
        {
          "title": "El Gallo kiko",
          "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
          "image": "https://s17.postimg.org/87fbxdyqn/gallo-kiko-hackathon-edtech.png",
          "speaker": "Eduardo Telaya",
          "comments": 34,
          "likes": 28
        },
      ];
      let count = 0;
      for (var i in json) {
        count = count > 3 ? 0 : count;
        json[i]['title'] = data[count].title;
        json[i]['body'] = data[count].body;
        json[i]['imageUrl'] = data[count].image;
        json[i]['speaker'] = data[count].speaker;
        json[i]['comments'] = data[count].comments;
        json[i]['likes'] = data[count].likes;
        count++;
      }
      return json;
    })
    .catch(error   => console.warn(error));
  }
}

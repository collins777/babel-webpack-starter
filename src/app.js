import { person, sayHello } from "./lib";

// console.log(person.location);
// console.log(sayHello("My Little Friend!"));

///////////////////////////////////////////////
//// Async Await

async function getPosts() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await response.json();
  return data;
}

getPosts().then(posts => console.log(posts));

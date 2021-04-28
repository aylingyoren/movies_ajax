// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then((response) => response.json())
//   .then((json) => console.log(json));

async function getData(url){
   const response = await fetch(url, {
      method: 'GET',
      headers: {
         'Content-Type': 'application/json'
      }
   });
   
   if(!response.ok) throw Error(response.status);
   
   return response.json();
}

getData('https://jsonplaceholder.typicode.com/posts')
   .then((res) => console.log(res))
   .catch((err) => console.log(err));
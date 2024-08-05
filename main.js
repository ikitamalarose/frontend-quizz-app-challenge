
/* fetch('./data.json').then(response=>response.json()).then(data=>{

    console.log(data);
}); */

fetch('./data.json').then((request) => {  
    if(!request.ok) {
      console.log('Oops! Something went wrong.');
      return null;
    }
    
    
    return request.json();
  }).then((data) => {
    console.log(data);
  });
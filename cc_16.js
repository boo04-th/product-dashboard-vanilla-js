const API_URL = 'https://www.course-api.com/javascript-store-products'; // gives a variable the value of the url

// Task 2: fetchProductsThen
function fetchProductsThen() { // creates a function that uses fetch, then, and catch;
  fetch(API_URL) 
    .then(response => { // uses a then and if statement to throw an error if the response is not ok
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json(); // return the response
    })
    .then(products => { // goes through each product and logs its name in the console
      console.log('Products fetched with .then():');
      products.forEach(product => {
        console.log(product.fields.name);
      });
    })
    .catch(error => { // catches the error and logs the message in the console
      handleError(error);
    });
}
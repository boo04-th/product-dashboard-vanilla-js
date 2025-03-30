const API_URL = 'https://www.course-api.com/javascript-store-products'; // gives a variable the value of the url

// Task 2: Fetch Products With .then()
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

// Task 3: Fetch Products with async/await
async function fetchProductsAsync() { //creates an async function that uses try and catch to grab the url and runs helper functions
  try {
    const response = await fetch(API_URL); //grabs the url
    if (!response.ok) { //uses if statement to show status if there is an error
      throw new Error(`HTTP error: ${response.status}`); 
    }
    const products = await response.json(); //assigns the variable the respond json
    displayProducts(products); // call the function
  } catch (error) {
    handleError(error); //sends the catch to a helper function
  }
}

//Task 4: Display the Products
function displayProducts(products) { // creates a function to display the product images
  const container = document.getElementById('product-container'); // grabs the container by using its ID
  container.innerHTML = ''; // clear container before rendering

  products.slice(0, 5).forEach(product => { // goes through the first 5 products
    const { name, price, image } = product.fields;

    const productDiv = document.createElement('div'); //creates a div
    productDiv.className = 'product'; 
    productDiv.innerHTML = `<img src="${image[0].url}" alt="${name}" /><h3>${name}</h3><p>Price: $${(price / 100).toFixed(2)}</p>`;// makes the inner html content the name, price, and image
    container.appendChild(productDiv);// appends the container by adding the div
  });
}

//Task 5: Reusable Error Handler
function handleError(error) {
  console.error('An error occurred:', error.message);
}


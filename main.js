

// document.addEventListener('DOMContentLoaded', function() {
//     fetch('api/products.json')
//       .then(response => response.json())
//       .then(products => {
//         console.log(products); // This will log the JSON data to the console
//       })
//       .catch(error => console.error('Error loading products:', error));
//   });  


  const productTemplate = document.querySelector('#productTemplate')
  const productContainer = document.querySelector('#productContainer')
  
  async function showTheData(){
    const response = await fetch('api/products.json')
    const products = await response.json()
    console.log(products);

    
    products.map((curProduct)=>{
      const {id, name, category, price, stock, description, image} = curProduct;
      
      const product_clone = document.importNode(productTemplate.content, true)

      product_clone.querySelector('.category').textContent = category;
      product_clone.querySelector('.product_image').src = image;
      product_clone.querySelector('.product_name').textContent = name;
      product_clone.querySelector('.product_price').textContent = `₹${price}`;
      product_clone.querySelector('.product_actual_price').textContent = `₹${price * 4}`;
      product_clone.querySelector('.product_description').textContent = description;

      productContainer.appendChild(product_clone)
    })
    
  }

  showTheData()
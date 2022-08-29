// PRODUCTS VARIABLE
var productsState = [
    {
      id: 1,
      name: 'Macbook Pro',
      price: 28000,
      rates: 5,
      image:
        'https://www.cnet.com/a/img/resize/4e82f3a17554a5aff8089194237de5a3acfce3b4/2022/04/27/b796792b-5b34-4405-83eb-efc66371ee06/samsung-galaxy-book-2-pro-360-01.jpg?auto=webp&fit=crop&height=630&width=1200',
    },
    {
      id: 2,
      name: 'Iphone 13 Pro',
      price: 23000,
      rates: 3,
      image:
        'https://imageio.forbes.com/specials-images/imageserve/6148e5c7b85bfa189955ed22/0x0.jpg?format=jpg&width=1200',
    },
    {
      id: 1,
      name: 'Iphone 6 C',
      price: 7000,
      rates: 2,
      image:
        'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80',
    },
    {
      id: 1,
      name: 'HP Laptop',
      price: 8000,
      rates: 1,
      image:
        'https://images.techadvisor.com/cmsdata/reviews/3803826/hp_pavilion_14_laptop02_thumb.jpg',
    },
    {
      id: 1,
      name: 'Dell Laptop',
      price: 4000,
      rates: 1,
      image:
        'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      id: 1,
      name: 'Macbook Pro',
      price: 15000,
      rates: 5,
      image:
        'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      id: 1,
      name: 'Playstation 5',
      price: 20000,
      rates: 4,
      image:
        'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      id: 1,
      name: 'PS 4 Joystick',
      price: 1200,
      rates: 3,
      image:
        'https://images.unsplash.com/photo-1592840496694-26d035b52b48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=825&q=80',
    },
  ]
  
  
  // LINK JS TO HTML ELEMENT
  const products = document.getElementById('products')
  let cartShopping = document.getElementById('cartShopping')
  let cartRow = document.getElementById('cartRow')
  let cartItem = document.getElementById('cartItem')
  let cartPrice = document.getElementById('cartPrice')
  let cartQuantity = document.getElementById('cartQuantity')

  let CountAdd = 0;

  function onlines() {
    cartShopping = document.getElementById('cartShopping').innerHTML = ++ CountAdd;
    for (let s = 0; s < CountAdd.length; s++) {
      cartShopping.innerHTML = ``
    }

  }
  
  
  
  // DISPLAY INTO PRODUCTS
  function homeDisplayProducts() {
      products.innerHTML = ""
    // loop into productsState and display
    for (let s = 0; s < productsState.length; s++) {
      products.innerHTML += `
      
      <div class="product">
          <div class="product__img">
              <img
                src=${productsState[s].image}
                alt=""
              />
          </div>
              <div class="product__name">${productsState[s].name}</div>
                <div class="product__rate">
                  ${'<span>*</span>'.repeat(productsState[s].rates)}
                </div>
                <div class="product__price">R <span>${productsState[s].price}</span></div> 
                  <button onclick="onlines()">+ ADD TO CART</button> 
            </div>
      
      `
      
    }

  }

  
  // CALL THE DISPLAY FUNCTION
  homeDisplayProducts()

  
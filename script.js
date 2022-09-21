
// PRODUCTS VARIABLE
var productsState = [
  
  {
    id: 1,
    name: 'Samsung Galaxy Z Flip 3',
    price: 20999,
    rates: 5,
    image:
      'https://images.techadvisor.com/cmsdata/deal/3807448/galaxy_z_flip3__review_14.jpg?quality=50&strip=all',
  },
  {
    id: 1,
    name: 'Iphone 13 Pro',
    price: 22999,
    rates: 4,
    image:
      'https://imageio.forbes.com/specials-images/imageserve/6148e5c7b85bfa189955ed22/0x0.jpg?format=jpg&width=1200',
  },
  {
    id: 1,
    name: 'Iphone 6 C',
    price: 5999,
    rates: 4,
    image:
      'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80',
  },
  {
    id: 1,
    name: 'Samsung galaxy fold 4',
    price: 36999,
    rates: 5,
    image:
      'https://images.samsung.com/za/smartphones/galaxy-z-fold4/images/galaxy-z-fold4_highlights_kv.jpg',
  },
  {
    id: 1,
    name: 'huawei p50 pro',
    price: 14499,
    rates: 4,
    image:
      'https://snapcraze.co.za/wp-content/uploads/2022/05/p50-pro-black.jpeg',
  },
  {
    id: 1,
    name: 'honor magic 4 pro',
    price: 22499,
    rates: 5,
    image:
      'https://www.hihonor.com/content/dam/honor/za/products/smartphone/honor-magic4-pro/lange/honor-magic4-facebook-shareimg.jpg',
  },
  {
    id: 1,
    name: 'nokia x50 pro',
    price: 32000,
    rates: 4,
    image:
      'https://www.pricepony.com.ph/blog/wp-content/uploads/2021/06/H6c875277bb864fa383b1adc7e8662b5fw.jpg',
  },
  {
    id: 1,
    name: 'oppo reno 7',
    price: 17999,
    rates: 4,
    image:
      'https://www.greenbot.com/wp-content/uploads/2021/11/oppo-reno-7-pro-featured.png',
  },
]

// Saving for the TableCart
var tableCart = []


// LINK JS TO HTML ELEMENT
const products = document.getElementById('products')
const cartShopping = document.getElementById('cartShopping');
const prodDisplay = document.getElementById('prodDisplay');
const totalCash = document.getElementById('totalCash');



// DISPLAY INTO PRODUCTS
function DataDisplayProducts() {
  products.innerHTML = ""
  // loop into productsState and display
  for (let i = 0; i < productsState.length; i++) {
    products.innerHTML += `
      
      <div class="product">
          <div class="product__img">
              <img
                src=${productsState[i].image}
                alt=""
              />
          </div>
              <div class="product__name">${productsState[i].name}</div>
                <div class="product__rate">
                  ${'<span>*</span>'.repeat(productsState[i].rates)}
                </div>
                <div class="product__price">R <span>${productsState[i].price}</span></div> 
                  <button onclick="online(${i})">+ ADD TO CART</button>
            </div>
      
      `

  }

 
}

// add function for removed
function removeClear(i) {
  tableCart.splice(i,1)
  
  prodD()

  CalculatorTotal()

  DataDisplayProducts()
  
}

function CalculatorTotal(i) {
  let total = 0;

  for (let i = 0; i < tableCart.length; i++) {
        {
          total += tableCart[i].price
        }

        totalCash.innerHTML = total
  }
}

// add function online
function online(i) {
  tableCart.push(productsState[i])
  document.getElementById('cartShopping').innerHTML = tableCart.length;

  prodD()

  CalculatorTotal()

  DataDisplayProducts()
}

// add FUNCTION and Display
function prodD() {
  prodDisplay.innerHTML = ""

  for (let i = 0; i < tableCart.length; i++) {
    prodDisplay.innerHTML += `
      
    <div class="product">
        <div class="product__img">
            <img
              src=${tableCart[i].image}
              alt=""
            />
        </div>
            <div class="product__name">${tableCart[i].name}</div>
              <div class="product__rate">
                ${'<span>*</span>'.repeat(tableCart[i].rates)}
              </div>
              <div class="product__price">R <span>${tableCart[i].price}</span></div> 
                <button class="btn btn-danger" onclick="removeClear(${i})">X Clear</button> 
          </div>
    
    `
    
  }
  

}

prodD()

CalculatorTotal()

// CALL THE DISPLAY FUNCTION
DataDisplayProducts()
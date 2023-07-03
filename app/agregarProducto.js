// Lista de productos
let productList = JSON.parse(localStorage.getItem("productList")) || [];
let list = document.querySelector(".list");
// Clase Producto
class Product {
  constructor(id, name, price, imageSrc) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.imageSrc = imageSrc;
  }
}
// Función para renderizar los productos en el DOM
function renderProducts() {
  const productListContainer = document.getElementById("product-list");
  if (productListContainer) {
    productListContainer.innerHTML = "";

    productList.forEach((product, key) => {
      const listItem = document.createElement("div");
      listItem.classList.add("item");
      listItem.innerHTML = `
      <img src="${product.imageSrc}"> 
      <div class="title">${product.name}</div>
      <div class="price">${product.price.toLocaleString()}</div>
      <button onclick="addToCard(${key})">Add To Card</button>
    `;
    });
  }
}

// Función para agregar un producto
function addProduct(id, name, price, imageSrc) {
  const product = new Product(id, name, price, imageSrc);
  productList.push(product);
  localStorage.setItem("productList", JSON.stringify(productList));
}

// Función para eliminar un producto
function deleteProduct(key) {
  console.log(key);
  
  const index = productList.indexOf(productList[key]);
  console.log(index);
  if (index !== -1) {
    productList.splice(index, 1);
  }
  localStorage.setItem("productList", JSON.stringify(productList));
  console.log(productList)
}

// Agregar dos productos iniciales
//addProduct(1,'Producto 1', 10, 'imagenes/product1.png');
//addProduct(2,'Producto 2', 20, 'imagenes/product2.png');

console.log(productList);
// Manejador de evento para agregar producto
const addProductForm = document.getElementById("add-product-form");
if (addProductForm) {
  addProductForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const id = document.getElementById("product-id").value;
    const name = document.getElementById("product-name").value;
    const price = document.getElementById("product-price").value;
    const imageSrc = document.getElementById("product-image").value;

    addProduct(id, name, price, imageSrc);

    alert("Item Guardado");
    console.log(productList);

    addProductForm.reset();
  });
}

function removeProducts() {
  productList.forEach((product,key) => {
    const listItem = document.createElement("div");
    listItem.classList.add("item");
    listItem.innerHTML = `
      <img src="${product.imageSrc}"> 
      <div class="title">${product.name}</div>
      <div class="price">${product.price.toLocaleString()}</div>
      <button onclick="deleteProduct(${key})">Delete</button>
    `;
    list.appendChild(listItem);
  });
}

renderProducts();
removeProducts();

let iconCart = document.querySelector(".icon-cart");
let closeCart = document.querySelector(".close");
let body = document.querySelector("body");
let listProductHTML = document.querySelector(".cards");
let listCartHTML = document.querySelector(".listCart")
let agregarAlCarro = document.querySelector(".addCart")
let lista = document.querySelector('.cardTab');
let contenedorCart = document.querySelector('#contenedorCart');
let btn = document.querySelector('.addCart');
let listProduct = [];
let carts = [];
let comprar = document.querySelector(".checkOut")

comprar.addEventListener("click", () => {
    alert("Gracias por la compra");

    // Alternar la clase para mostrar/ocultar el carrito
    body.classList.toggle("showCart");

});

iconCart.addEventListener("click", () => {
  body.classList.toggle("showCart");
});

closeCart.addEventListener("click", () => {
  body.classList.toggle("showCart");
});





const addDataToHTML = () => {
  listProductHTML.innerHTML = "";
  if (listProduct.length > 0) {
    listProduct.forEach((product) => {
      let newProduct = document.createElement("div");
      newProduct.classList.add("card");
      newProduct.dataset.id = product.id
      newProduct.innerHTML = `
            <h3>${product.nombre}</h3>
              <p>${product.contenido}</p>
              <img src="${product.ruta_foto}" alt="Torta Bosque Negro" />
              <p class="precio">$${product.precio}</p>
              <button class="addCart">Agregar al carrito</button>
              `;
              listProductHTML.appendChild(newProduct)
              
    });
  }
  
};
listProductHTML.addEventListener('click',(event)=>{
    let positionClick = event.target
    body.classList.toggle("showCart");
    if(positionClick.classList.contains('addCart')){
        let product_id = positionClick.parentElement.dataset.id
        addToCart(product_id)
    }
})



const addToCart = (product_id) =>{
    let positionThisProductInCart = carts.findIndex((value) => value.product_id == product_id)
    
    if(carts.length <= 0 ){
        carts = [{
            product_id:product_id,
            quantity: 1
        }]
    }else if(positionThisProductInCart < 0){
        carts.push({
            product_id: product_id,
            quantity:1
        })
    }else{
        carts[positionThisProductInCart].quantity =  carts[positionThisProductInCart].quantity + 1
    }
    addToCartToHTML()
    
}

const addToCartToHTML = () =>{
    listCartHTML.innerHTML = ''
    if(carts.length > 0){
        carts.forEach(item => {
            
            let newItem = document.createElement('div');
            newItem.classList.add('item');
            newItem.dataset.id = item.product_id;

            let positionProduct = listProduct.findIndex((value) => value.id == item.product_id);
            let info = listProduct[positionProduct];
            listCartHTML.appendChild(newItem);
            newItem.innerHTML = `
            <div class="image">
                    <img src="${info.ruta_foto}">
                </div>
                <div class="name">
                ${info.nombre}
                </div>
                <div class="totalPrice">$${info.precio * item.quantity}</div>
                <div class="quantity">
                    <span class="minus"><</span>
                    <span>${item.quantity}</span>
                    <span class="plus">></span>
                </div>
            `
        })
    }
}



listCartHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('minus') || positionClick.classList.contains('plus')){
        let product_id = positionClick.parentElement.parentElement.dataset.id;
        let type = 'minus';
        if(positionClick.classList.contains('plus')){
            type = 'plus';
        }
        changeQuantityCart(product_id, type);
    }
})

const changeQuantityCart = (product_id, type) => {
    let positionItemInCart = carts.findIndex((value) => value.product_id == product_id);
    if(positionItemInCart >= 0){
        let info = carts[positionItemInCart];
        switch (type) {
            case 'plus':
                carts[positionItemInCart].quantity = carts[positionItemInCart].quantity + 1;
                break;
        
            default:
                let changeQuantity = carts[positionItemInCart].quantity - 1;
                if (changeQuantity > 0) {
                    carts[positionItemInCart].quantity = changeQuantity;
                }else{
                    carts.splice(positionItemInCart, 1);
                }
                break;
        }
    }
    addToCartToHTML();
   
}



const initApp = () => {
  fetch("http://localhost:3030/postres")
    .then((response) => response.json())
    .then((data) => {
      listProduct = data;
      console.log(listProduct);
      addDataToHTML();
    });
};

initApp();

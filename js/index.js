// ITERATION 1

function updateSubtotal(product) {

    const price = product.querySelector('.price span').innerText;
    const quantity = product.querySelector('.quantity input').value;
    //console.log(price)
    //console.log(quantity)
    let subtotalPrice = price * quantity;
   product.querySelector('.subtotal > span').innerHTML = subtotalPrice  
    //console.log (subtotal);
    subtotal = subtotalPrice
    //console.log(subtotal)
    return subtotalPrice
  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
 const multiProducts = document.querySelectorAll('.product')

 for (let product of multiProducts) {
   updateSubtotal(product)
 }

 // let total = 0;
 //document.querySelectorAll('.product).forEach(function(product){
 //  total += updateSubtotal(product)
 

 // ITERATION 3
//... your code goes here

let totalPrice = 0
for (let i = 0; i < multiProducts.length; i++) {
  
  totalPrice += updateSubtotal(multiProducts[i])
  document.querySelector('#total-value span').innerHTML = totalPrice
}
return totalPrice
}
// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target.parentNode.parentNode);
  product.remove()
  // OR // target.parentNode..parentNode..parentNode.removeChild(target.parentNode.parentNode)
  //calculateAll()
}

window.removeEventListener('load', () => {
  const removeButton= document.getElementsByClassName('.btn btn-remove');
  removeButton.addEventListener('click', removeProduct);

  
  
});
// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  
  //... your code goes here
});
  //const removeProductBtns = document.querySelectorAll()
  window.removeEventListener('load', () => {
  const removeButton= document.getElementsByClassName('.btn btn-remove');
  removeButton.addEventListener('click', removeProduct);

  
  //... your code goes here
});
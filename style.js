git add .let price = document.querySelectorAll('.price');
//console.log(price);
let sumPrice = 0;
for(let i = 0; i < price.length; i++) {
  sumPrice += Number(price[i].innerHTML);
}
//console.log(sumPrice);
let cartSum = document.querySelector('.cart_sum');
//console.log(cartSum);
cartSum.innerHTML = sumPrice;
let discountSum
function discount () {
  //discountSum = Number(sumPrice) - Number(sumPrice) * 0.2;
  return discountSum;
}
console.log(discountSum);
discountSum = discount;
//console.log(discountSum);
document.getElementById('use').onclick = function () {
  cartSum.innerHTML = discountSum;
  return cartSum;
}
console.log(cartSum);












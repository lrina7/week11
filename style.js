let price = document.querySelectorAll('.price');
let sumPrice = 0;
for (let i = 0; i < price.length; i++) {
  sumPrice += +(price[i].innerHTML);
}

//console.log(sumPrice)
let cartSum = document.querySelector("#cart_sum");
cartSum.innerHTML = sumPrice;

//price.forEach(function(element) {
  //console.log(element.textContent);
  //});

document.getElementById("button").onclick = function () {
  //price.forEach(function(element) {
  //+(element.textContent) * 0.8
  //console.log(price)
   // });
  
  let discountSum = sumPrice * 0.8;
  cartSum.innerHTML = discountSum;
  return cartSum
}
















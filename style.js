let price = document.querySelectorAll('.price');
let sumPrice = 0;
for (let i = 0; i < price.length; i++) {
  sumPrice += +(price[i].innerHTML);
}

let cartSum = document.querySelector("#cart_sum");
cartSum.innerHTML = sumPrice;

document.getElementById("button").onclick = function () {
   for (let i = 0; i < price.length; i++) {
    price[i].innerText = +(price[i].innerHTML) * 0.8;
  }
  let discountSum = sumPrice * 0.8;
  cartSum.innerHTML = discountSum;
 return cartSum
}
















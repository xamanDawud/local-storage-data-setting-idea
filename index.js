let func = () => {
  let key = document.getElementById("key").value;
  let value = document.getElementById("value").value;
  //   console.log(key, value);
  //   localStorage.setItem(key, value);
  let cart = checkItem();
  cart[key] = value;
  localStorage.setItem("Cart", JSON.stringify(cart));
};

let checkItem = () => {
  let cart = {};
  const checkData = localStorage.getItem("Cart");
  if (checkData) {
    cart = JSON.parse(checkData);
  }
  return cart;
};

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import $ from "jquery";
import _ from "lodash";
import { products } from "./db";
import "../css/global.css";

// add to cart
const addToCart = (event) => {
  event.preventDefault();

  const cart = JSON.parse(localStorage.getItem("carts")) || [];

  const item = _.find(cart, { product: event.data.id });

  if (item) {
    item.quantity += 1;
  } else {
    cart.push({
      product: event.data.id,
      quantity: 1,
    });
  }

  localStorage.setItem("carts", JSON.stringify(cart));
};

// render product
$(function () {
  const productTemplate = $("#product-pr").html();
  const product = _.template(productTemplate); // compile

  $(".list-fruit-product").append(
    _.map(products, (pr) => {
      const dom = $(product(pr));

      dom.find(".btn-add").on("click", pr, addToCart);

      return dom;
    })
  );
});

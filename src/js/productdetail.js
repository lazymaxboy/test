import $ from "jquery";
import _ from "lodash";

import { products } from "./db";

$(function () {
  const url = new URL(location.href);
  const id = Number(url.searchParams.get("id"));
  const product = _.find(products, { id });
  console.log(product);
  $(".non").html(
    `
     <div>
        <img src="${product.img}" alt="dsd" />
        <p>${product.name}</p>
        <p>${product.price}</p>
        <input type="number" value="1" />
      </div>
    `
  );
});




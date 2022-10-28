import $ from "jquery";
import _ from "lodash";

import { products } from "./db";

$(function () {
  const url = new URL(location.href);
  const id = Number(url.searchParams.get("id"));
  const product = _.find(products, { id });
  $(".non").html(
    `
     <div>
        <div class="img-pr-detail">
                <div class="d-flex flex-column gap-3 align-items-center justify-content-center">
                  <div class="img-pr-top">
                      <img src="${product.img}" alt="dsd">                
                  </div>
                  <div class="img-pr-bottom d-flex">
                      <img src="${product.img}" alt="dsd">
                      <img src="https://tfruit.vercel.app/assets/pr-detail-1.44fdfde8.png" alt="dsd">
                      <img src="https://tfruit.vercel.app/assets/pr-detail-2.c06e90b1.png" alt="dsd">
                  </div>
             </div>
        <p>${product.name}</p>
        <p>${product.price}</p>
        <input type="number" value="1" />
      </div>
    `
  );

  clickImg();

  const productRelated = _.filter(products, { category: product.category });
  console.log(productRelated)
  const productTemplate = $("#product-related").html();
  const productCategoty = _.template(productTemplate);
  $(".ga")
    .append(
      _.map(productRelated, (pr) => {
        const dom = $(productCategoty(pr));

        return dom;
      })
    )
    .slick({
      arrows: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
    });
});

const clickImg = () => {
  const img = $(".img-pr-top img");
  $(".img-pr-bottom")
    .find("img")
    .on("click", (i) => {
      img.attr("src", i.target.src);
    });
};

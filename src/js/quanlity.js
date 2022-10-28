import $ from "jquery";

quantity();
function quantity() {
  $(".plus").on("click", (event) => {
    const input = $(event.target.closest(".qty-cart")).find("input.number-qty");
    input.val(Number(input.val()) + 1);
  });

  $(".minus").on("click", (event) => {
    const input = $(event.target.closest(".qty-cart")).find("input.number-qty");
    if (Number(input.val()) > 1) input.val(Number(input.val()) - 1);
  });
}

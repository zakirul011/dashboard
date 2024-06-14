(function ($) {
  "use strict";

  //========== STICKY HEADER, BACK TO TOP ==========>
  const headerArea = document.querySelectorAll(".header-area");
  headerArea.forEach((area) => {
    let height;
    window.addEventListener("resize", () => {
      addHeaderHeight();
    });
    window.addEventListener("load", () => {
      addHeaderHeight();
    });
    function addHeaderHeight() {
      height = area.clientHeight;
      document.documentElement.style.setProperty("--header-h", height + "px");
    }
    window.addEventListener("scroll", () => {
      if (window.scrollY > height) {
        area.classList.add("sticky");
      } else {
        area.classList.remove("sticky");
      }
    });
  });
  //========== STICKY HEADER, BACK TO TOP// ==========>

  //========== NICE SELECT ==========>
  // $("select").niceSelect();
  //========== NICE SELECT// ==========>
})(jQuery);

//========== ORDER DETAILS ==========>
const orderTable = document.querySelectorAll(".order-table");
orderTable.forEach((wrap) => {
  const triggers = wrap.querySelectorAll(".order-details-trigger");
  const collapses = wrap.querySelectorAll(".order-details-collapse");
  let collapse;
  triggers.forEach((trigger, index) => {
    trigger.addEventListener("click", () => {
      collapse = collapses[index];
      if (collapse.classList.contains("active")) {
        trigger.classList.remove("active");
        collapse.classList.remove("active");
        collapse.style.maxHeight = null;
      } else {
        trigger.classList.add("active");
        collapse.classList.add("active");
        collapse.style.maxHeight = collapse.scrollHeight + "px";
      }
    });
  });
});
//========== ORDER DETAILS ==========>

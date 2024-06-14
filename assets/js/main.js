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
  $("select").niceSelect();
  //========== NICE SELECT// ==========>
})(jQuery);

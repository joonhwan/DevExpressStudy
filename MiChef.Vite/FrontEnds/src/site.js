import "./site.scss?inline";

$(function () {
  $(".dq_menu_header").on("click", function () {
    const parent = $(this).parent()[0];
    console.log("parent:", parent);
    $(parent).toggleClass("collapsed");
  });
});

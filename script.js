const productbut = document.querySelector("#productsbut");
const product = document.querySelector("#products");
const homebut = document.querySelector("#homebut");
const home = document.querySelector("#home");
const contactbut = document.querySelector("#contactbut");
const contact = document.querySelector("#contact");

productbut.addEventListener("click", function () {
  $("#products").fadeIn();
  $("#home").fadeOut();
  $("#contact").fadeOut();
});

homebut.addEventListener("click", function () {
  $("#home").fadeIn();
  $("#products").fadeOut();
  $("#contact").fadeOut();
});

contactbut.addEventListener("click", function () {
  $("#contact").fadeIn();
  $("#home").fadeOut();
  $("#products").fadeOut();
});

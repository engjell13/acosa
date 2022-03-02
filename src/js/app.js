require("../css/app.css");
require("../scss/style.scss");

/********** Paste your code here! ************/
$(".scene").each((index, element) => {
  new Parallax(element);
});

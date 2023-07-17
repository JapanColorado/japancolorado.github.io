const excerptHeights = () => {
  var excerpts = document.querySelectorAll(".excerpt");
  console.log(excerpts);
  excerpts.forEach((elem) => {
    
    var excerptHeight = elem.offsetHeight;
    console.log(excerptHeight);
    elem.style.height = String(excerptHeight - 20) + "px";
  });
};

export default excerptHeights;

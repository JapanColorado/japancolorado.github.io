const excerptHeights = () => {
  var excerpts = document.querySelectorAll(".excerpt");
  console.log(excerpts);
  excerpts.forEach((elem) => {
    
    var excerptHeight = elem.offsetHeight;
    console.log(excerptHeight);
    if(screen.width > 1540){
      elem.style.height = String(excerptHeight - 20) + "px";
    }else{
      elem.style.height = String(excerptHeight - 8) + "px";
    }
    
  });
};

export default excerptHeights;

let slideIndex = 0;

function carousel() {
  let i;
  let y = document.getElementsByClassName("dot");
  let x = document.getElementsByClassName("slide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    y[i].style.color = "black";
  }
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1;
  }

  x[slideIndex - 1].style.display = "flex";
  y[slideIndex - 1].style.color = "white";
  setTimeout(carousel, 2000);
}

carousel();

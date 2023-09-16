// humbargar menu toogle 
let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');

toggle.addEventListener("click", () => {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
});

// add hovered classes in selected list items
let lists = document.querySelectorAll(".navigation li");

function activeClass() {
  lists.forEach((item) => item.classList.remove("hovered"));
  this.classList.add("hovered");
}

lists.forEach((item) => item.addEventListener("mouseover", activeClass));

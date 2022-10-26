const itemInput = document.getElementById("item-input");
const addItem = document.getElementById("add-item");
const items = document.querySelector(".items");

addItem.onclick = function () {
  items.innerHTML += `<li>${itemInput.value}</li>`;
  console.log();
  const liItems = document.querySelectorAll("li");
  liItems.forEach(function (li) {
    li.onclick = function (event) {
      event.target.classList.toggle("check");
    };
  });
};

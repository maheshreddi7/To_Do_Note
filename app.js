let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");
// let del = document.querySelector("");

btn.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerText = input.value;
  let dell = document.createElement("button");
  dell.innerText = "Delete";
  dell.className = "del";
  item.appendChild(dell);

  ul.appendChild(item);

  input.value = "";
  input.placeholder = "add more bro...";
});

let delbtns = document.querySelectorAll(".del");
for (let delbtn of delbtns) {
  delbtn.addEventListener("click", function () {
    let per = delbtn.parentElement;
    per.remove();
  });
}
ul.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    let itemm = event.target.parentElement;
    itemm.remove();
  }
});

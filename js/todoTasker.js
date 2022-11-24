const form = document.querySelector(".form");
const ul = document.querySelector(".ul");
const button = document.getElementById("button");
const input = document.getElementById("item");
const liMarker = (text) => {
    const li = document.createElement("li");
    li.textContent = text;
    ul.appendChild(li);
}
form.addEventListener("submit", function (e) {
    e.preventDefault();
    liMarker(input.value);
    input.value = " ";
});
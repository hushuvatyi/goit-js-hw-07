const ulEl = document.querySelector('#categories');

const liEl = ulEl.querySelectorAll('li.item');
const countCategories = liEl.length;

console.log(`Number of categories: ${liEl.length}`);

liEl.forEach((item) => {
    console.log(`Category: ${item.querySelector("h2").textContent}`);
    console.log(`Elements: ${item.querySelectorAll("li").length}`)
});
const mainList = document.querySelector("#categories");
console.log(`Number of categories: ${mainList.children.length}`);

[...mainList.children].forEach((el) => {
    console.log(`Category: ${el.children[0].textContent}`);
    console.log(`Elements: ${Object.keys(el.children[1].children).length}`)
})
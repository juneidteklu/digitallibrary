let resourceCategoryButton = document.querySelector(".add-category")
let resourceContainer = document.querySelector(".resource-container")

function createCategory(){
    let container = document.createElement("div");
    container.classList.add("container")
    let resource = document.createElement("div");
    resource.classList.add("resource");
    let span = document.createElement("span");
    span.textContent = "Resource";
    let button = document.createElement("button");
    button.textContent = "Add a resource"
    let ul = document.createElement("ul");
    button.classList.add("add-resource");
    resource.append(span,button,ul);
    container.appendChild(resource);
    resourceContainer.appendChild(container);
}

resourceCategoryButton.addEventListener("click", createCategory);
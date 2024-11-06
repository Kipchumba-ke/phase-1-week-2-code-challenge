document.addEventListener("DOMContentLoaded", () => {
    const inputItem = document.getElementById("inputItem");
    const addButton = document.getElementById("addButton");
    const clearList = document.getElementById("clearList");
    const itemList = document.getElementById("itemList");

    addButton.addEventListener("click", () => {
        const itemName = inputItem.value.trim();
        if (itemName !== "") {
            addItemToList(itemName);
            inputItem.value = "";
        }
    });

    clearList.addEventListener("click", () => {
        itemList.innerHTML = "";
    });

    function addItemToList(itemName) {
        const listItem = document.createElement("li");
        listItem.textContent = itemName;

        const purchaseButton = document.createElement("button");
        purchaseButton.textContent = "Purchase";
        purchaseButton.className = "purchase-button";
        purchaseButton.addEventListener("click", () => {
            togglePurchaseStatus(listItem, purchaseButton);
        });

        listItem.appendChild(purchaseButton);
        itemList.appendChild(listItem);
    }

    function togglePurchaseStatus(listItem, button) {
        if (listItem.classList.contains("purchased")) {
            listItem.classList.remove("purchased");
            button.textContent = "Purchase";
        } else {
            listItem.classList.add("purchased");
            button.textContent = "Purchased";
        }
    }
});

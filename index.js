document.addEventListener(`DOMContentLoaded`, ()=>{
    const inputBook = document.getElementById(`inputBook`);
    const addButton = document.getElementById(`addButton`);
    const clearList = document.getElementById(`clearList`);
    const bookList = document.getElementById(`bookList`);


    let shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];
    renderList();

    addButton.addEventListener('click', () => {
        const bookTitle = inputBook.value.trim();
        if (bookTitle) {
            shoppingList.push({ title: bookTitle, purchased: false });
            inputBook.value = '';
            saveAndRender();
        }
    });

    bookList.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            const index = e.target.dataset.index;
            if (e.target.classList.contains('purchased')) {
                
                const newTitle = prompt('Edit book title:', shoppingList[index].title);
                if (newTitle) {
                    shoppingList[index].title = newTitle;
                }
            } else {
                
                shoppingList[index].purchased = true;
            }
            saveAndRender();
        }
    });

    clearList.addEventListener('click', () => {
        shoppingList = [];
        saveAndRender();
    });

    function saveAndRender() {
        localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
        renderList();
    }

    function renderList() {
        bookList.innerHTML = '';
        shoppingList.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = item.title;
            li.dataset.index = index;
            if (item.purchased) {
                li.classList.add('purchased');
            }
            bookList.appendChild(li);
        });
    }
});
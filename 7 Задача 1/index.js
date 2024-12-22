const bookList = document.getElementById('bookList');
const addBookBtn = document.getElementById('addBookBtn');
const searchBookBtn = document.getElementById('searchBookBtn');

let books = ["Война и мир", "Преступление и наказание", "Мастер и Маргарита"];


function renderBooks() {
    bookList.innerHTML = '';
    books.forEach( (book) => {
        const listItem = document.createElement('li');
        listItem.textContent = book;
        bookList.appendChild(listItem);
    });
}
renderBooks();

addBookBtn.addEventListener('click', () => {
    const newBookTitle = prompt("Введите название новой книги");
    if (!newBookTitle) {
        alert("Название книги не введено!");
    } else {
        books.push(newBookTitle);
        renderBooks();
    }
});

searchBookBtn.addEventListener('click', () => {
    const searchTitle = prompt("Введите название книги для поиска");
    if (!searchTitle) {
      return;
    }

    let found = false;

    bookList.querySelectorAll('li').forEach(li => {
        if (li.textContent === searchTitle) {
            li.classList.add('highlighted');
            found = true;
        } else {
            li.classList.remove('highlighted')
        }
    })

    if (!found) {
        alert('Книга не найдена!');
    }
});
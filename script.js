const books = [];
const history = [];

function addBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const category = document.getElementById('category').value;
    
    if (title && author && category) {
        const book = { title, author, category };
        books.push(book);
        displayBooks();
        clearForm();
    } else {
        alert('Please fill in all fields');
    }
}

function displayBooks() {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';

    books.forEach((book, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${book.title} by ${book.author} (${book.category}) <button onclick="borrowBook(${index})">Borrow</button>`;
        bookList.appendChild(li);
    });
}

function searchBooks() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchInput));
    
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';

    filteredBooks.forEach((book, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${book.title} by ${book.author} (${book.category}) <button onclick="borrowBook(${index})">Borrow</button>`;
        bookList.appendChild(li);
    });
}

function borrowBook(index) {
    const book = books[index];
    history.push(book);
    books.splice(index, 1);
    displayBooks();
    displayHistory();
}

function displayHistory() {
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = '';

    history.forEach(book => {
        const li = document.createElement('li');
        li.innerHTML = `${book.title} by ${book.author} (${book.category})`;
        historyList.appendChild(li);
    });
}

function clearForm() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('category').value = '';
}

displayBooks();
displayHistory();

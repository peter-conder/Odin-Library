const library = [];

/*
const bookPrototype = {
    title: title,
    author: author,
    pages: pages,
    read: false
};
*/

function Book(title, author, pages, read, identifier) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
    this.identifier = self.crypto.randomUUID();
}

function addBookToLibrary(title, author, pages) {
    const book = new Book(title, author, pages);
    library.push(book);
}

function displayBooks() {
    let i = 0;
    let removeDivs = document.querySelectorAll(".bookDisplay");
    removeDivs.forEach(element => element.remove());
    for (let step = 0; step < library.length; step++) {
        let currentBook = library.at(i);
        let bookString = `${currentBook.title} by: ${currentBook.author}, ${currentBook.pages} pages long,  Read: ${currentBook.read}, ID: ${currentBook.identifier}`;
        const display = document.createElement("div");
        display.classList.add("bookDisplay");
        const node = document.createTextNode(bookString);
        display.appendChild(node);
        const libraryDisplay = document.getElementById("displayBooks");
        libraryDisplay.appendChild(display);
        i++;
    };
    };


const addButton = document.getElementById("addButton");
const form = document.getElementById("bookForm");
//button shows/dismisses form
addButton.addEventListener("click", () => {
    if (form.style.display === 'none') {
        form.style.display = 'flex';
    } else {
        form.style.display = 'none';
    }
});

function submitBook(event) {
    let bookTitle = document.getElementById('bookTitle').value;
    let bookAuthor = document.getElementById('bookAuthor').value;
    let bookPages = document.getElementById('bookPages').value;

    console.log(bookTitle);
    addBookToLibrary(bookTitle, bookAuthor, bookPages);
    displayBooks();
    event.preventDefault();
}

const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', submitBook);


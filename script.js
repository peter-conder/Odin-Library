const library = [];

Book.prototype

function Book(title, author, pages, read, identifier) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.identifier = self.crypto.randomUUID();
}

function addBookToLibrary(title, author, pages) {
    const book = new Book(title, author, pages);
    library.push(book);
}

/*
addBookToLibrary("book1", "you", "12312", "false", "id");
addBookToLibrary("book2", "owjncw", "6767", "false", "id");
addBookToLibrary("book3", "me", "1812", "true", "id");
addBookToLibrary("book1", "you", "12312", "false", "id");
addBookToLibrary("book2", "owjncw", "6767", "false", "id");
addBookToLibrary("book3", "me", "1812", "true", "id");
*/

//console.log(library);

/**
 * Remove all of existing elements from page, reprint library[]
 */


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

/** Create form onclick:
 * Instead of form, what if instead a bunch of prompts popped up? asking for name, author, pages, then adding all that to the DOM
 * */

const button = document.getElementById("addButton");

button.addEventListener('click', () => {
    let bookTitle = prompt("What is your book called?");
    let bookAuthor = prompt("Who wrote this book?");
    let bookPages = prompt("how many pages are there in this book?");
    addBookToLibrary(bookTitle, bookAuthor, bookPages);
    displayBooks();
})
/*const form = document.getElementById("bookForm")
button.addEventListener("click", () => {
    if (form.style.display === "none") {
        form.style.display = 'flex';}
    else form.style.display = 'none';
    });

let bookTitle = document.getElementById("bookTitle").value;
console.log(bookTitle);

/*
const submit = document.getElementById("submit");
function submitForm () {
    let bookTitle = document.getElementById("bookTitle").value;
    let bookAuthor = document.getElementById("author").value;
    let bookPages = document.getElementById("pages").value;
    addBookToLibrary(bookTitle, bookAuthor, bookPages);
    event.preventDefault;
}

submit.addEventListener('submit', submitForm());
*/


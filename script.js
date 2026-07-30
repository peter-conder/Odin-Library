/** Pseudocode
 * How to make titles readable? probably by filtering out all the elements that make it ugly
 * split @ identifier
 * add class to identifier, style it so it's a bit smaller
 * filter out [""], [:], [,]
 * */

const library = [];

Book.prototype

function Book(title, author, pages, read, identifier) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.identifier = self.crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read, id) {
    const book = new Book(title, author, pages, read, id);
    library.push(book);
}

addBookToLibrary("book1", "you", "12312", "false", "id");
addBookToLibrary("book2", "owjncw", "6767", "false", "id");
addBookToLibrary("book3", "me", "1812", "true", "id");
addBookToLibrary("book1", "you", "12312", "false", "id");
addBookToLibrary("book2", "owjncw", "6767", "false", "id");
addBookToLibrary("book3", "me", "1812", "true", "id");


//console.log(library);

function displayBooks() {
    let i = 0;
    for (let step = 0; step < library.length; step++) {
        let currentBook = library.at(i);
        let bookString = `${currentBook.title} by: ${currentBook.author}, ${currentBook.pages} pages long,  Read: ${currentBook.read}, ID: ${currentBook.id}`;
        const display = document.createElement("div");
        display.classList.add("bookDisplay");
        const node = document.createTextNode(bookString);
        display.appendChild(node);
        const libraryDisplay = document.getElementById("displayBooks");
        libraryDisplay.appendChild(display);
        i++;
    };
    };
displayBooks();

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
displayBooks();

/** Create form onclick:
 *  Have form fully loaded in the HTML but hidden
 * When button is clicked, form shows
 * When submit button is clicked, form sumbits information to the DOM and is then hidden
 * 
 * Can do this with the hidden attribute. button toggles the hidden attribute on the form. That's it.
 */

const button = document.getElementById("addButton");
const form = document.getElementById("bookForm")
button.addEventListener("click", () => {
    if (form.style.display === "none") {
        form.style.display = 'flex';}
    else form.style.display = 'none';
    });

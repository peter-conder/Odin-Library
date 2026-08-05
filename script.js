const library = [];

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

function assignButtons(parentDisplay) {
    const removeButton = document.createElement('button');
    removeButton.class = 'remove';
    removeButton.textContent = '-'
    parentDisplay.appendChild(removeButton);
    removeButton.addEventListener("click", () => {
        //code to remove or hide parent display goes here
    })
    const readButton = document.createElement('button');
    readButton.class = 'read';
    readButton.textContent = 'Read';
    parentDisplay.appendChild(readButton);
    readButton.addEventListener("click",() => {
        //code to set false to true goes here
    })
}



function displayBooks() {
    let i = 0;

    let removeDivs = document.querySelectorAll(".bookDisplay");
    removeDivs.forEach(element => element.remove());

    for (let step = 0; step < library.length; step++) {
        let currentBook = library.at(i);
            let bookString = `${currentBook.title} by ${currentBook.author}, ${currentBook.pages} pages,  Read: ${currentBook.read}, ID: ${currentBook.identifier}`;
        const display = document.createElement("div");
            display.classList.add("bookDisplay");
        const node = document.createTextNode(bookString);
            display.appendChild(node);
        const libraryDisplay = document.getElementById("displayBooks");
            libraryDisplay.appendChild(display);
        
        assignButtons(display);
        i++;
        };
    };


const addButton = document.getElementById("addButton");
const form = document.getElementById("bookForm");
addButton.addEventListener("click", () => {
    if (form.style.display === 'none') {
        form.style.display = 'flex';
    } else {
        form.style.display = 'none';
    }
});

function submitBook(event) {
        event.preventDefault();
    let bookTitle = document.getElementById('bookTitle').value;
    let bookAuthor = document.getElementById('bookAuthor').value;
    let bookPages = document.getElementById('bookPages').value;
    addBookToLibrary(bookTitle, bookAuthor, bookPages);
    displayBooks();
}

const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', submitBook);
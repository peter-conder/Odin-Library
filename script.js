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

function assignButtons(parentDisplay, parentObject, currentObject, currentNode) {
    const removeButton = document.createElement('button');
    removeButton.class = 'remove';
    removeButton.textContent = '-'
    parentDisplay.appendChild(removeButton);
    removeButton.addEventListener("click", () => {
        parentDisplay.remove();
    })
    const readButton = document.createElement('button');
    readButton.id = 'read';
    readButton.textContent = 'Read';
    parentDisplay.appendChild(readButton);
    readButton.addEventListener('click', ()=>{
        if (parentObject.read === false) {
        parentObject.read = true;
        bookString = `${currentObject.title} by ${currentObject.author}, ${currentObject.pages} pages,  Read: ${currentObject.read}, ID: ${currentObject.identifier}`;
        currentNode.textContent = bookString;
    } else if (parentObject.read === true) {
        parentObject.read = false;
        bookString = `${currentObject.title} by ${currentObject.author}, ${currentObject.pages} pages,  Read: ${currentObject.read}, ID: ${currentObject.identifier}`;
        currentNode.textContent = bookString;

    }
    })
}

/*
    let childDisplay = document.querySelectorAll('.bookDisplay > #string');
    let newString = Array.from(childDisplay);
    console.log(newString);

    if (parentDisplay.textContent.includes("Read: false")) {
        readButton.addEventListener("click",() => {
        let subString = parentDisplay.textContent;  
        let replacedString = subString.replace("Read: false", "Read: true");
        parentDisplay.textContent = replacedString;

    })
    } else if (parentDisplay.textContent.includes("Read: true")) {
        readButton.addEventListener("click",() => {
        let subString = parentDisplay.textContent;  
        let replacedString = subString.replace("Read: true", "Read: false");
        console.log(replacedString);
        parentDisplay.textContent = replacedString;
        })
    
}}

*/

function displayBooks() {
    let i = 0;

    let removeDivs = document.querySelectorAll(".bookDisplay");
    removeDivs.forEach(element => element.remove());

    for (let step = 0; step < library.length; step++) {
        let currentBook = library.at(i);
            let bookString = `${currentBook.title} by ${currentBook.author}, ${currentBook.pages} pages,  Read: ${currentBook.read}, ID: ${currentBook.identifier}`;
        const display = document.createElement("div");
            display.class = "bookDisplay";
        const node = document.createTextNode(bookString);
        node.id = 'string';
            display.appendChild(node);
        const libraryDisplay = document.getElementById("displayBooks");
            libraryDisplay.appendChild(display);
        
        assignButtons(display, currentBook, currentBook, node);
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
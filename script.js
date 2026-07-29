/** Pseudocode
 * Make book constructor
 * Store books in array
 * Function
     * create a book from arguments
     * store book in array
 * Every book should have a unique id
 * 
 * 
 *
 *  
 * */


const library = [];

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

addBookToLibrary("thing", "owjncw", "pages", "read", "id");
addBookToLibrary("thing", "owjncw", "pages", "read", "id");
console.log(library);


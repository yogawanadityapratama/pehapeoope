class Book {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    findBookById(id) {
      return this.books.find(book => book.id === id);
    }
  
    displayBooks() {
      console.log("Library Books:");
      this.books.forEach(book => {
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
      });
    }
  
    updateBook(id, updatedTitle, updatedAuthor) {
      const book = this.findBookById(id);
      if (book) {
        book.title = updatedTitle;
        book.author = updatedAuthor;
        console.log(`Book with ID ${id} updated successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  
    deleteBook(id) {
      const index = this.books.findIndex(book => book.id === id);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book with ID ${id} deleted successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  }
  
  // Contoh penggunaan
  const library = new Library();
  
  const book1 = new Book(1, "JavaScript: The Good Parts", "Douglas Crockford");
  const book2 = new Book(2, "Eloquent JavaScript", "Marijn Haverbeke");
  
  library.addBook(book1);
  library.addBook(book2);
  
  library.displayBooks();
  
  library.updateBook(1, "JS: The Good Parts", "D. Crockford");
  library.displayBooks();
  
  library.deleteBook(2);
  library.displayBooks();

  class Book {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    findBookById(id) {
      return this.books.find(book => book.id === id);
    }
  
    displayBooks() {
      console.log("Library Books:");
      this.books.forEach(book => {
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
      });
    }
  
    updateBook(id, updatedTitle, updatedAuthor) {
      const book = this.findBookById(id);
      if (book) {
        book.title = updatedTitle;
        book.author = updatedAuthor;
        console.log(`Book with ID ${id} updated successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  
    deleteBook(id) {
      const index = this.books.findIndex(book => book.id === id);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book with ID ${id} deleted successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  }
  
  // Contoh penggunaan
  const library = new Library();
  
  const book1 = new Book(1, "JavaScript: The Good Parts", "Douglas Crockford");
  const book2 = new Book(2, "Eloquent JavaScript", "Marijn Haverbeke");
  
  library.addBook(book1);
  library.addBook(book2);
  
  library.displayBooks();
  
  library.updateBook(1, "JS: The Good Parts", "D. Crockford");
  library.displayBooks();
  
  library.deleteBook(2);
  library.displayBooks();

  class Book {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    findBookById(id) {
      return this.books.find(book => book.id === id);
    }
  
    displayBooks() {
      console.log("Library Books:");
      this.books.forEach(book => {
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
      });
    }
  
    updateBook(id, updatedTitle, updatedAuthor) {
      const book = this.findBookById(id);
      if (book) {
        book.title = updatedTitle;
        book.author = updatedAuthor;
        console.log(`Book with ID ${id} updated successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  
    deleteBook(id) {
      const index = this.books.findIndex(book => book.id === id);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book with ID ${id} deleted successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  }
  
  // Contoh penggunaan
  const library = new Library();
  
  const book1 = new Book(1, "JavaScript: The Good Parts", "Douglas Crockford");
  const book2 = new Book(2, "Eloquent JavaScript", "Marijn Haverbeke");
  
  library.addBook(book1);
  library.addBook(book2);
  
  library.displayBooks();
  
  library.updateBook(1, "JS: The Good Parts", "D. Crockford");
  library.displayBooks();
  
  library.deleteBook(2);
  library.displayBooks();

  class Book {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    findBookById(id) {
      return this.books.find(book => book.id === id);
    }
  
    displayBooks() {
      console.log("Library Books:");
      this.books.forEach(book => {
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
      });
    }
  
    updateBook(id, updatedTitle, updatedAuthor) {
      const book = this.findBookById(id);
      if (book) {
        book.title = updatedTitle;
        book.author = updatedAuthor;
        console.log(`Book with ID ${id} updated successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  
    deleteBook(id) {
      const index = this.books.findIndex(book => book.id === id);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book with ID ${id} deleted successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  }
  
  // Contoh penggunaan
  const library = new Library();
  
  const book1 = new Book(1, "JavaScript: The Good Parts", "Douglas Crockford");
  const book2 = new Book(2, "Eloquent JavaScript", "Marijn Haverbeke");
  
  library.addBook(book1);
  library.addBook(book2);
  
  library.displayBooks();
  
  library.updateBook(1, "JS: The Good Parts", "D. Crockford");
  library.displayBooks();
  
  library.deleteBook(2);
  library.displayBooks();

  class Book {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    findBookById(id) {
      return this.books.find(book => book.id === id);
    }
  
    displayBooks() {
      console.log("Library Books:");
      this.books.forEach(book => {
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
      });
    }
  
    updateBook(id, updatedTitle, updatedAuthor) {
      const book = this.findBookById(id);
      if (book) {
        book.title = updatedTitle;
        book.author = updatedAuthor;
        console.log(`Book with ID ${id} updated successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  
    deleteBook(id) {
      const index = this.books.findIndex(book => book.id === id);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book with ID ${id} deleted successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  }
  
  // Contoh penggunaan
  const library = new Library();
  
  const book1 = new Book(1, "JavaScript: The Good Parts", "Douglas Crockford");
  const book2 = new Book(2, "Eloquent JavaScript", "Marijn Haverbeke");
  
  library.addBook(book1);
  library.addBook(book2);
  
  library.displayBooks();
  
  library.updateBook(1, "JS: The Good Parts", "D. Crockford");
  library.displayBooks();
  
  library.deleteBook(2);
  library.displayBooks();

  class Book {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    findBookById(id) {
      return this.books.find(book => book.id === id);
    }
  
    displayBooks() {
      console.log("Library Books:");
      this.books.forEach(book => {
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
      });
    }
  
    updateBook(id, updatedTitle, updatedAuthor) {
      const book = this.findBookById(id);
      if (book) {
        book.title = updatedTitle;
        book.author = updatedAuthor;
        console.log(`Book with ID ${id} updated successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  
    deleteBook(id) {
      const index = this.books.findIndex(book => book.id === id);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book with ID ${id} deleted successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  }
  
  // Contoh penggunaan
  const library = new Library();
  
  const book1 = new Book(1, "JavaScript: The Good Parts", "Douglas Crockford");
  const book2 = new Book(2, "Eloquent JavaScript", "Marijn Haverbeke");
  
  library.addBook(book1);
  library.addBook(book2);
  
  library.displayBooks();
  
  library.updateBook(1, "JS: The Good Parts", "D. Crockford");
  library.displayBooks();
  
  library.deleteBook(2);
  library.displayBooks();

  class Book {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    findBookById(id) {
      return this.books.find(book => book.id === id);
    }
  
    displayBooks() {
      console.log("Library Books:");
      this.books.forEach(book => {
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
      });
    }
  
    updateBook(id, updatedTitle, updatedAuthor) {
      const book = this.findBookById(id);
      if (book) {
        book.title = updatedTitle;
        book.author = updatedAuthor;
        console.log(`Book with ID ${id} updated successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  
    deleteBook(id) {
      const index = this.books.findIndex(book => book.id === id);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book with ID ${id} deleted successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  }
  
  // Contoh penggunaan
  const library = new Library();
  
  const book1 = new Book(1, "JavaScript: The Good Parts", "Douglas Crockford");
  const book2 = new Book(2, "Eloquent JavaScript", "Marijn Haverbeke");
  
  library.addBook(book1);
  library.addBook(book2);
  
  library.displayBooks();
  
  library.updateBook(1, "JS: The Good Parts", "D. Crockford");
  library.displayBooks();
  
  library.deleteBook(2);
  library.displayBooks();

  class Book {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    findBookById(id) {
      return this.books.find(book => book.id === id);
    }
  
    displayBooks() {
      console.log("Library Books:");
      this.books.forEach(book => {
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
      });
    }
  
    updateBook(id, updatedTitle, updatedAuthor) {
      const book = this.findBookById(id);
      if (book) {
        book.title = updatedTitle;
        book.author = updatedAuthor;
        console.log(`Book with ID ${id} updated successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  
    deleteBook(id) {
      const index = this.books.findIndex(book => book.id === id);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book with ID ${id} deleted successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  }
  
  // Contoh penggunaan
  const library = new Library();
  
  const book1 = new Book(1, "JavaScript: The Good Parts", "Douglas Crockford");
  const book2 = new Book(2, "Eloquent JavaScript", "Marijn Haverbeke");
  
  library.addBook(book1);
  library.addBook(book2);
  
  library.displayBooks();
  
  library.updateBook(1, "JS: The Good Parts", "D. Crockford");
  library.displayBooks();
  
  library.deleteBook(2);
  library.displayBooks();

  class Book {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    findBookById(id) {
      return this.books.find(book => book.id === id);
    }
  
    displayBooks() {
      console.log("Library Books:");
      this.books.forEach(book => {
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
      });
    }
  
    updateBook(id, updatedTitle, updatedAuthor) {
      const book = this.findBookById(id);
      if (book) {
        book.title = updatedTitle;
        book.author = updatedAuthor;
        console.log(`Book with ID ${id} updated successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  
    deleteBook(id) {
      const index = this.books.findIndex(book => book.id === id);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book with ID ${id} deleted successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  }
  
  // Contoh penggunaan
  const library = new Library();
  
  const book1 = new Book(1, "JavaScript: The Good Parts", "Douglas Crockford");
  const book2 = new Book(2, "Eloquent JavaScript", "Marijn Haverbeke");
  
  library.addBook(book1);
  library.addBook(book2);
  
  library.displayBooks();
  
  library.updateBook(1, "JS: The Good Parts", "D. Crockford");
  library.displayBooks();
  
  library.deleteBook(2);
  library.displayBooks();

  class Book {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    findBookById(id) {
      return this.books.find(book => book.id === id);
    }
  
    displayBooks() {
      console.log("Library Books:");
      this.books.forEach(book => {
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
      });
    }
  
    updateBook(id, updatedTitle, updatedAuthor) {
      const book = this.findBookById(id);
      if (book) {
        book.title = updatedTitle;
        book.author = updatedAuthor;
        console.log(`Book with ID ${id} updated successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  
    deleteBook(id) {
      const index = this.books.findIndex(book => book.id === id);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book with ID ${id} deleted successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  }
  
  // Contoh penggunaan
  const library = new Library();
  
  const book1 = new Book(1, "JavaScript: The Good Parts", "Douglas Crockford");
  const book2 = new Book(2, "Eloquent JavaScript", "Marijn Haverbeke");
  
  library.addBook(book1);
  library.addBook(book2);
  
  library.displayBooks();
  
  library.updateBook(1, "JS: The Good Parts", "D. Crockford");
  library.displayBooks();
  
  library.deleteBook(2);
  library.displayBooks();

  class Book {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    findBookById(id) {
      return this.books.find(book => book.id === id);
    }
  
    displayBooks() {
      console.log("Library Books:");
      this.books.forEach(book => {
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
      });
    }
  
    updateBook(id, updatedTitle, updatedAuthor) {
      const book = this.findBookById(id);
      if (book) {
        book.title = updatedTitle;
        book.author = updatedAuthor;
        console.log(`Book with ID ${id} updated successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  
    deleteBook(id) {
      const index = this.books.findIndex(book => book.id === id);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book with ID ${id} deleted successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  }
  
  // Contoh penggunaan
  const library = new Library();
  
  const book1 = new Book(1, "JavaScript: The Good Parts", "Douglas Crockford");
  const book2 = new Book(2, "Eloquent JavaScript", "Marijn Haverbeke");
  
  library.addBook(book1);
  library.addBook(book2);
  
  library.displayBooks();
  
  library.updateBook(1, "JS: The Good Parts", "D. Crockford");
  library.displayBooks();
  
  library.deleteBook(2);
  library.displayBooks();

  class Book {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    findBookById(id) {
      return this.books.find(book => book.id === id);
    }
  
    displayBooks() {
      console.log("Library Books:");
      this.books.forEach(book => {
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
      });
    }
  
    updateBook(id, updatedTitle, updatedAuthor) {
      const book = this.findBookById(id);
      if (book) {
        book.title = updatedTitle;
        book.author = updatedAuthor;
        console.log(`Book with ID ${id} updated successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  
    deleteBook(id) {
      const index = this.books.findIndex(book => book.id === id);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book with ID ${id} deleted successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  }
  
  // Contoh penggunaan
  const library = new Library();
  
  const book1 = new Book(1, "JavaScript: The Good Parts", "Douglas Crockford");
  const book2 = new Book(2, "Eloquent JavaScript", "Marijn Haverbeke");
  
  library.addBook(book1);
  library.addBook(book2);
  
  library.displayBooks();
  
  library.updateBook(1, "JS: The Good Parts", "D. Crockford");
  library.displayBooks();
  
  library.deleteBook(2);
  library.displayBooks();

  class Book {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    findBookById(id) {
      return this.books.find(book => book.id === id);
    }
  
    displayBooks() {
      console.log("Library Books:");
      this.books.forEach(book => {
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
      });
    }
  
    updateBook(id, updatedTitle, updatedAuthor) {
      const book = this.findBookById(id);
      if (book) {
        book.title = updatedTitle;
        book.author = updatedAuthor;
        console.log(`Book with ID ${id} updated successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  
    deleteBook(id) {
      const index = this.books.findIndex(book => book.id === id);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book with ID ${id} deleted successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  }
  
  // Contoh penggunaan
  const library = new Library();
  
  const book1 = new Book(1, "JavaScript: The Good Parts", "Douglas Crockford");
  const book2 = new Book(2, "Eloquent JavaScript", "Marijn Haverbeke");
  
  library.addBook(book1);
  library.addBook(book2);
  
  library.displayBooks();
  
  library.updateBook(1, "JS: The Good Parts", "D. Crockford");
  library.displayBooks();
  
  library.deleteBook(2);
  library.displayBooks();

  class Book {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    findBookById(id) {
      return this.books.find(book => book.id === id);
    }
  
    displayBooks() {
      console.log("Library Books:");
      this.books.forEach(book => {
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
      });
    }
  
    updateBook(id, updatedTitle, updatedAuthor) {
      const book = this.findBookById(id);
      if (book) {
        book.title = updatedTitle;
        book.author = updatedAuthor;
        console.log(`Book with ID ${id} updated successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  
    deleteBook(id) {
      const index = this.books.findIndex(book => book.id === id);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book with ID ${id} deleted successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  }
  
  // Contoh penggunaan
  const library = new Library();
  
  const book1 = new Book(1, "JavaScript: The Good Parts", "Douglas Crockford");
  const book2 = new Book(2, "Eloquent JavaScript", "Marijn Haverbeke");
  
  library.addBook(book1);
  library.addBook(book2);
  
  library.displayBooks();
  
  library.updateBook(1, "JS: The Good Parts", "D. Crockford");
  library.displayBooks();
  
  library.deleteBook(2);
  library.displayBooks();

  class Book {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    findBookById(id) {
      return this.books.find(book => book.id === id);
    }
  
    displayBooks() {
      console.log("Library Books:");
      this.books.forEach(book => {
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
      });
    }
  
    updateBook(id, updatedTitle, updatedAuthor) {
      const book = this.findBookById(id);
      if (book) {
        book.title = updatedTitle;
        book.author = updatedAuthor;
        console.log(`Book with ID ${id} updated successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  
    deleteBook(id) {
      const index = this.books.findIndex(book => book.id === id);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book with ID ${id} deleted successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  }
  
  // Contoh penggunaan
  const library = new Library();
  
  const book1 = new Book(1, "JavaScript: The Good Parts", "Douglas Crockford");
  const book2 = new Book(2, "Eloquent JavaScript", "Marijn Haverbeke");
  
  library.addBook(book1);
  library.addBook(book2);
  
  library.displayBooks();
  
  library.updateBook(1, "JS: The Good Parts", "D. Crockford");
  library.displayBooks();
  
  library.deleteBook(2);
  library.displayBooks();

  class Book {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    findBookById(id) {
      return this.books.find(book => book.id === id);
    }
  
    displayBooks() {
      console.log("Library Books:");
      this.books.forEach(book => {
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
      });
    }
  
    updateBook(id, updatedTitle, updatedAuthor) {
      const book = this.findBookById(id);
      if (book) {
        book.title = updatedTitle;
        book.author = updatedAuthor;
        console.log(`Book with ID ${id} updated successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  
    deleteBook(id) {
      const index = this.books.findIndex(book => book.id === id);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book with ID ${id} deleted successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  }
  
  // Contoh penggunaan
  const library = new Library();
  
  const book1 = new Book(1, "JavaScript: The Good Parts", "Douglas Crockford");
  const book2 = new Book(2, "Eloquent JavaScript", "Marijn Haverbeke");
  
  library.addBook(book1);
  library.addBook(book2);
  
  library.displayBooks();
  
  library.updateBook(1, "JS: The Good Parts", "D. Crockford");
  library.displayBooks();
  
  library.deleteBook(2);
  library.displayBooks();

  class Book {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    findBookById(id) {
      return this.books.find(book => book.id === id);
    }
  
    displayBooks() {
      console.log("Library Books:");
      this.books.forEach(book => {
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
      });
    }
  
    updateBook(id, updatedTitle, updatedAuthor) {
      const book = this.findBookById(id);
      if (book) {
        book.title = updatedTitle;
        book.author = updatedAuthor;
        console.log(`Book with ID ${id} updated successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  
    deleteBook(id) {
      const index = this.books.findIndex(book => book.id === id);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book with ID ${id} deleted successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  }
  
  // Contoh penggunaan
  const library = new Library();
  
  const book1 = new Book(1, "JavaScript: The Good Parts", "Douglas Crockford");
  const book2 = new Book(2, "Eloquent JavaScript", "Marijn Haverbeke");
  
  library.addBook(book1);
  library.addBook(book2);
  
  library.displayBooks();
  
  library.updateBook(1, "JS: The Good Parts", "D. Crockford");
  library.displayBooks();
  
  library.deleteBook(2);
  library.displayBooks();

  class Book {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    findBookById(id) {
      return this.books.find(book => book.id === id);
    }
  
    displayBooks() {
      console.log("Library Books:");
      this.books.forEach(book => {
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
      });
    }
  
    updateBook(id, updatedTitle, updatedAuthor) {
      const book = this.findBookById(id);
      if (book) {
        book.title = updatedTitle;
        book.author = updatedAuthor;
        console.log(`Book with ID ${id} updated successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  
    deleteBook(id) {
      const index = this.books.findIndex(book => book.id === id);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book with ID ${id} deleted successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  }
  
  // Contoh penggunaan
  const library = new Library();
  
  const book1 = new Book(1, "JavaScript: The Good Parts", "Douglas Crockford");
  const book2 = new Book(2, "Eloquent JavaScript", "Marijn Haverbeke");
  
  library.addBook(book1);
  library.addBook(book2);
  
  library.displayBooks();
  
  library.updateBook(1, "JS: The Good Parts", "D. Crockford");
  library.displayBooks();
  
  library.deleteBook(2);
  library.displayBooks();

  class Book {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    findBookById(id) {
      return this.books.find(book => book.id === id);
    }
  
    displayBooks() {
      console.log("Library Books:");
      this.books.forEach(book => {
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
      });
    }
  
    updateBook(id, updatedTitle, updatedAuthor) {
      const book = this.findBookById(id);
      if (book) {
        book.title = updatedTitle;
        book.author = updatedAuthor;
        console.log(`Book with ID ${id} updated successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  
    deleteBook(id) {
      const index = this.books.findIndex(book => book.id === id);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book with ID ${id} deleted successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  }
  
  // Contoh penggunaan
  const library = new Library();
  
  const book1 = new Book(1, "JavaScript: The Good Parts", "Douglas Crockford");
  const book2 = new Book(2, "Eloquent JavaScript", "Marijn Haverbeke");
  
  library.addBook(book1);
  library.addBook(book2);
  
  library.displayBooks();
  
  library.updateBook(1, "JS: The Good Parts", "D. Crockford");
  library.displayBooks();
  
  library.deleteBook(2);
  library.displayBooks();

  class Book {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    findBookById(id) {
      return this.books.find(book => book.id === id);
    }
  
    displayBooks() {
      console.log("Library Books:");
      this.books.forEach(book => {
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
      });
    }
  
    updateBook(id, updatedTitle, updatedAuthor) {
      const book = this.findBookById(id);
      if (book) {
        book.title = updatedTitle;
        book.author = updatedAuthor;
        console.log(`Book with ID ${id} updated successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  
    deleteBook(id) {
      const index = this.books.findIndex(book => book.id === id);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book with ID ${id} deleted successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  }
  
  // Contoh penggunaan
  const library = new Library();
  
  const book1 = new Book(1, "JavaScript: The Good Parts", "Douglas Crockford");
  const book2 = new Book(2, "Eloquent JavaScript", "Marijn Haverbeke");
  
  library.addBook(book1);
  library.addBook(book2);
  
  library.displayBooks();
  
  library.updateBook(1, "JS: The Good Parts", "D. Crockford");
  library.displayBooks();
  
  library.deleteBook(2);
  library.displayBooks();

  class Book {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    findBookById(id) {
      return this.books.find(book => book.id === id);
    }
  
    displayBooks() {
      console.log("Library Books:");
      this.books.forEach(book => {
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
      });
    }
  
    updateBook(id, updatedTitle, updatedAuthor) {
      const book = this.findBookById(id);
      if (book) {
        book.title = updatedTitle;
        book.author = updatedAuthor;
        console.log(`Book with ID ${id} updated successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  
    deleteBook(id) {
      const index = this.books.findIndex(book => book.id === id);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book with ID ${id} deleted successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  }
  
  // Contoh penggunaan
  const library = new Library();
  
  const book1 = new Book(1, "JavaScript: The Good Parts", "Douglas Crockford");
  const book2 = new Book(2, "Eloquent JavaScript", "Marijn Haverbeke");
  
  library.addBook(book1);
  library.addBook(book2);
  
  library.displayBooks();
  
  library.updateBook(1, "JS: The Good Parts", "D. Crockford");
  library.displayBooks();
  
  library.deleteBook(2);
  library.displayBooks();

  class Book {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    findBookById(id) {
      return this.books.find(book => book.id === id);
    }
  
    displayBooks() {
      console.log("Library Books:");
      this.books.forEach(book => {
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
      });
    }
  
    updateBook(id, updatedTitle, updatedAuthor) {
      const book = this.findBookById(id);
      if (book) {
        book.title = updatedTitle;
        book.author = updatedAuthor;
        console.log(`Book with ID ${id} updated successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  
    deleteBook(id) {
      const index = this.books.findIndex(book => book.id === id);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book with ID ${id} deleted successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  }
  
  // Contoh penggunaan
  const library = new Library();
  
  const book1 = new Book(1, "JavaScript: The Good Parts", "Douglas Crockford");
  const book2 = new Book(2, "Eloquent JavaScript", "Marijn Haverbeke");
  
  library.addBook(book1);
  library.addBook(book2);
  
  library.displayBooks();
  
  library.updateBook(1, "JS: The Good Parts", "D. Crockford");
  library.displayBooks();
  
  library.deleteBook(2);
  library.displayBooks();

  class Book {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    findBookById(id) {
      return this.books.find(book => book.id === id);
    }
  
    displayBooks() {
      console.log("Library Books:");
      this.books.forEach(book => {
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
      });
    }
  
    updateBook(id, updatedTitle, updatedAuthor) {
      const book = this.findBookById(id);
      if (book) {
        book.title = updatedTitle;
        book.author = updatedAuthor;
        console.log(`Book with ID ${id} updated successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  
    deleteBook(id) {
      const index = this.books.findIndex(book => book.id === id);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book with ID ${id} deleted successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  }
  
  // Contoh penggunaan
  const library = new Library();
  
  const book1 = new Book(1, "JavaScript: The Good Parts", "Douglas Crockford");
  const book2 = new Book(2, "Eloquent JavaScript", "Marijn Haverbeke");
  
  library.addBook(book1);
  library.addBook(book2);
  
  library.displayBooks();
  
  library.updateBook(1, "JS: The Good Parts", "D. Crockford");
  library.displayBooks();
  
  library.deleteBook(2);
  library.displayBooks();

  class Book {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    findBookById(id) {
      return this.books.find(book => book.id === id);
    }
  
    displayBooks() {
      console.log("Library Books:");
      this.books.forEach(book => {
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
      });
    }
  
    updateBook(id, updatedTitle, updatedAuthor) {
      const book = this.findBookById(id);
      if (book) {
        book.title = updatedTitle;
        book.author = updatedAuthor;
        console.log(`Book with ID ${id} updated successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  
    deleteBook(id) {
      const index = this.books.findIndex(book => book.id === id);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book with ID ${id} deleted successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  }
  
  // Contoh penggunaan
  const library = new Library();
  
  const book1 = new Book(1, "JavaScript: The Good Parts", "Douglas Crockford");
  const book2 = new Book(2, "Eloquent JavaScript", "Marijn Haverbeke");
  
  library.addBook(book1);
  library.addBook(book2);
  
  library.displayBooks();
  
  library.updateBook(1, "JS: The Good Parts", "D. Crockford");
  library.displayBooks();
  
  library.deleteBook(2);
  library.displayBooks();

  class Book {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    findBookById(id) {
      return this.books.find(book => book.id === id);
    }
  
    displayBooks() {
      console.log("Library Books:");
      this.books.forEach(book => {
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
      });
    }
  
    updateBook(id, updatedTitle, updatedAuthor) {
      const book = this.findBookById(id);
      if (book) {
        book.title = updatedTitle;
        book.author = updatedAuthor;
        console.log(`Book with ID ${id} updated successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  
    deleteBook(id) {
      const index = this.books.findIndex(book => book.id === id);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book with ID ${id} deleted successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  }
  
  // Contoh penggunaan
  const library = new Library();
  
  const book1 = new Book(1, "JavaScript: The Good Parts", "Douglas Crockford");
  const book2 = new Book(2, "Eloquent JavaScript", "Marijn Haverbeke");
  
  library.addBook(book1);
  library.addBook(book2);
  
  library.displayBooks();
  
  library.updateBook(1, "JS: The Good Parts", "D. Crockford");
  library.displayBooks();
  
  library.deleteBook(2);
  library.displayBooks();

  class Book {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    findBookById(id) {
      return this.books.find(book => book.id === id);
    }
  
    displayBooks() {
      console.log("Library Books:");
      this.books.forEach(book => {
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
      });
    }
  
    updateBook(id, updatedTitle, updatedAuthor) {
      const book = this.findBookById(id);
      if (book) {
        book.title = updatedTitle;
        book.author = updatedAuthor;
        console.log(`Book with ID ${id} updated successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  
    deleteBook(id) {
      const index = this.books.findIndex(book => book.id === id);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book with ID ${id} deleted successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  }
  
  // Contoh penggunaan
  const library = new Library();
  
  const book1 = new Book(1, "JavaScript: The Good Parts", "Douglas Crockford");
  const book2 = new Book(2, "Eloquent JavaScript", "Marijn Haverbeke");
  
  library.addBook(book1);
  library.addBook(book2);
  
  library.displayBooks();
  
  library.updateBook(1, "JS: The Good Parts", "D. Crockford");
  library.displayBooks();
  
  library.deleteBook(2);
  library.displayBooks();

  class Book {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    findBookById(id) {
      return this.books.find(book => book.id === id);
    }
  
    displayBooks() {
      console.log("Library Books:");
      this.books.forEach(book => {
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
      });
    }
  
    updateBook(id, updatedTitle, updatedAuthor) {
      const book = this.findBookById(id);
      if (book) {
        book.title = updatedTitle;
        book.author = updatedAuthor;
        console.log(`Book with ID ${id} updated successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  
    deleteBook(id) {
      const index = this.books.findIndex(book => book.id === id);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book with ID ${id} deleted successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  }
  
  // Contoh penggunaan
  const library = new Library();
  
  const book1 = new Book(1, "JavaScript: The Good Parts", "Douglas Crockford");
  const book2 = new Book(2, "Eloquent JavaScript", "Marijn Haverbeke");
  
  library.addBook(book1);
  library.addBook(book2);
  
  library.displayBooks();
  
  library.updateBook(1, "JS: The Good Parts", "D. Crockford");
  library.displayBooks();
  
  library.deleteBook(2);
  library.displayBooks();

  class Book {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    findBookById(id) {
      return this.books.find(book => book.id === id);
    }
  
    displayBooks() {
      console.log("Library Books:");
      this.books.forEach(book => {
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
      });
    }
  
    updateBook(id, updatedTitle, updatedAuthor) {
      const book = this.findBookById(id);
      if (book) {
        book.title = updatedTitle;
        book.author = updatedAuthor;
        console.log(`Book with ID ${id} updated successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  
    deleteBook(id) {
      const index = this.books.findIndex(book => book.id === id);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book with ID ${id} deleted successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  }
  
  // Contoh penggunaan
  const library = new Library();
  
  const book1 = new Book(1, "JavaScript: The Good Parts", "Douglas Crockford");
  const book2 = new Book(2, "Eloquent JavaScript", "Marijn Haverbeke");
  
  library.addBook(book1);
  library.addBook(book2);
  
  library.displayBooks();
  
  library.updateBook(1, "JS: The Good Parts", "D. Crockford");
  library.displayBooks();
  
  library.deleteBook(2);
  library.displayBooks();

  class Book {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    findBookById(id) {
      return this.books.find(book => book.id === id);
    }
  
    displayBooks() {
      console.log("Library Books:");
      this.books.forEach(book => {
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
      });
    }
  
    updateBook(id, updatedTitle, updatedAuthor) {
      const book = this.findBookById(id);
      if (book) {
        book.title = updatedTitle;
        book.author = updatedAuthor;
        console.log(`Book with ID ${id} updated successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  
    deleteBook(id) {
      const index = this.books.findIndex(book => book.id === id);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book with ID ${id} deleted successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  }
  
  // Contoh penggunaan
  const library = new Library();
  
  const book1 = new Book(1, "JavaScript: The Good Parts", "Douglas Crockford");
  const book2 = new Book(2, "Eloquent JavaScript", "Marijn Haverbeke");
  
  library.addBook(book1);
  library.addBook(book2);
  
  library.displayBooks();
  
  library.updateBook(1, "JS: The Good Parts", "D. Crockford");
  library.displayBooks();
  
  library.deleteBook(2);
  library.displayBooks();

  class Book {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    findBookById(id) {
      return this.books.find(book => book.id === id);
    }
  
    displayBooks() {
      console.log("Library Books:");
      this.books.forEach(book => {
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
      });
    }
  
    updateBook(id, updatedTitle, updatedAuthor) {
      const book = this.findBookById(id);
      if (book) {
        book.title = updatedTitle;
        book.author = updatedAuthor;
        console.log(`Book with ID ${id} updated successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  
    deleteBook(id) {
      const index = this.books.findIndex(book => book.id === id);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book with ID ${id} deleted successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  }
  
  // Contoh penggunaan
  const library = new Library();
  
  const book1 = new Book(1, "JavaScript: The Good Parts", "Douglas Crockford");
  const book2 = new Book(2, "Eloquent JavaScript", "Marijn Haverbeke");
  
  library.addBook(book1);
  library.addBook(book2);
  
  library.displayBooks();
  
  library.updateBook(1, "JS: The Good Parts", "D. Crockford");
  library.displayBooks();
  
  library.deleteBook(2);
  library.displayBooks();

  class Book {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    findBookById(id) {
      return this.books.find(book => book.id === id);
    }
  
    displayBooks() {
      console.log("Library Books:");
      this.books.forEach(book => {
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
      });
    }
  
    updateBook(id, updatedTitle, updatedAuthor) {
      const book = this.findBookById(id);
      if (book) {
        book.title = updatedTitle;
        book.author = updatedAuthor;
        console.log(`Book with ID ${id} updated successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  
    deleteBook(id) {
      const index = this.books.findIndex(book => book.id === id);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book with ID ${id} deleted successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  }
  
  // Contoh penggunaan
  const library = new Library();
  
  const book1 = new Book(1, "JavaScript: The Good Parts", "Douglas Crockford");
  const book2 = new Book(2, "Eloquent JavaScript", "Marijn Haverbeke");
  
  library.addBook(book1);
  library.addBook(book2);
  
  library.displayBooks();
  
  library.updateBook(1, "JS: The Good Parts", "D. Crockford");
  library.displayBooks();
  
  library.deleteBook(2);
  library.displayBooks();

  class Book {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    findBookById(id) {
      return this.books.find(book => book.id === id);
    }
  
    displayBooks() {
      console.log("Library Books:");
      this.books.forEach(book => {
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
      });
    }
  
    updateBook(id, updatedTitle, updatedAuthor) {
      const book = this.findBookById(id);
      if (book) {
        book.title = updatedTitle;
        book.author = updatedAuthor;
        console.log(`Book with ID ${id} updated successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  
    deleteBook(id) {
      const index = this.books.findIndex(book => book.id === id);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book with ID ${id} deleted successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  }
  
  // Contoh penggunaan
  const library = new Library();
  
  const book1 = new Book(1, "JavaScript: The Good Parts", "Douglas Crockford");
  const book2 = new Book(2, "Eloquent JavaScript", "Marijn Haverbeke");
  
  library.addBook(book1);
  library.addBook(book2);
  
  library.displayBooks();
  
  library.updateBook(1, "JS: The Good Parts", "D. Crockford");
  library.displayBooks();
  
  library.deleteBook(2);
  library.displayBooks();

  class Book {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    findBookById(id) {
      return this.books.find(book => book.id === id);
    }
  
    displayBooks() {
      console.log("Library Books:");
      this.books.forEach(book => {
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
      });
    }
  
    updateBook(id, updatedTitle, updatedAuthor) {
      const book = this.findBookById(id);
      if (book) {
        book.title = updatedTitle;
        book.author = updatedAuthor;
        console.log(`Book with ID ${id} updated successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  
    deleteBook(id) {
      const index = this.books.findIndex(book => book.id === id);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book with ID ${id} deleted successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  }
  
  // Contoh penggunaan
  const library = new Library();
  
  const book1 = new Book(1, "JavaScript: The Good Parts", "Douglas Crockford");
  const book2 = new Book(2, "Eloquent JavaScript", "Marijn Haverbeke");
  
  library.addBook(book1);
  library.addBook(book2);
  
  library.displayBooks();
  
  library.updateBook(1, "JS: The Good Parts", "D. Crockford");
  library.displayBooks();
  
  library.deleteBook(2);
  library.displayBooks();

  class Book {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    findBookById(id) {
      return this.books.find(book => book.id === id);
    }
  
    displayBooks() {
      console.log("Library Books:");
      this.books.forEach(book => {
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
      });
    }
  
    updateBook(id, updatedTitle, updatedAuthor) {
      const book = this.findBookById(id);
      if (book) {
        book.title = updatedTitle;
        book.author = updatedAuthor;
        console.log(`Book with ID ${id} updated successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  
    deleteBook(id) {
      const index = this.books.findIndex(book => book.id === id);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book with ID ${id} deleted successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  }
  
  // Contoh penggunaan
  const library = new Library();
  
  const book1 = new Book(1, "JavaScript: The Good Parts", "Douglas Crockford");
  const book2 = new Book(2, "Eloquent JavaScript", "Marijn Haverbeke");
  
  library.addBook(book1);
  library.addBook(book2);
  
  library.displayBooks();
  
  library.updateBook(1, "JS: The Good Parts", "D. Crockford");
  library.displayBooks();
  
  library.deleteBook(2);
  library.displayBooks();

  class Book {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    findBookById(id) {
      return this.books.find(book => book.id === id);
    }
  
    displayBooks() {
      console.log("Library Books:");
      this.books.forEach(book => {
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
      });
    }
  
    updateBook(id, updatedTitle, updatedAuthor) {
      const book = this.findBookById(id);
      if (book) {
        book.title = updatedTitle;
        book.author = updatedAuthor;
        console.log(`Book with ID ${id} updated successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  
    deleteBook(id) {
      const index = this.books.findIndex(book => book.id === id);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book with ID ${id} deleted successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  }
  
  // Contoh penggunaan
  const library = new Library();
  
  const book1 = new Book(1, "JavaScript: The Good Parts", "Douglas Crockford");
  const book2 = new Book(2, "Eloquent JavaScript", "Marijn Haverbeke");
  
  library.addBook(book1);
  library.addBook(book2);
  
  library.displayBooks();
  
  library.updateBook(1, "JS: The Good Parts", "D. Crockford");
  library.displayBooks();
  
  library.deleteBook(2);
  library.displayBooks();

  class Book {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    findBookById(id) {
      return this.books.find(book => book.id === id);
    }
  
    displayBooks() {
      console.log("Library Books:");
      this.books.forEach(book => {
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
      });
    }
  
    updateBook(id, updatedTitle, updatedAuthor) {
      const book = this.findBookById(id);
      if (book) {
        book.title = updatedTitle;
        book.author = updatedAuthor;
        console.log(`Book with ID ${id} updated successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  
    deleteBook(id) {
      const index = this.books.findIndex(book => book.id === id);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book with ID ${id} deleted successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  }
  
  // Contoh penggunaan
  const library = new Library();
  
  const book1 = new Book(1, "JavaScript: The Good Parts", "Douglas Crockford");
  const book2 = new Book(2, "Eloquent JavaScript", "Marijn Haverbeke");
  
  library.addBook(book1);
  library.addBook(book2);
  
  library.displayBooks();
  
  library.updateBook(1, "JS: The Good Parts", "D. Crockford");
  library.displayBooks();
  
  library.deleteBook(2);
  library.displayBooks();

  class Book {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    findBookById(id) {
      return this.books.find(book => book.id === id);
    }
  
    displayBooks() {
      console.log("Library Books:");
      this.books.forEach(book => {
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
      });
    }
  
    updateBook(id, updatedTitle, updatedAuthor) {
      const book = this.findBookById(id);
      if (book) {
        book.title = updatedTitle;
        book.author = updatedAuthor;
        console.log(`Book with ID ${id} updated successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  
    deleteBook(id) {
      const index = this.books.findIndex(book => book.id === id);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book with ID ${id} deleted successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  }
  
  // Contoh penggunaan
  const library = new Library();
  
  const book1 = new Book(1, "JavaScript: The Good Parts", "Douglas Crockford");
  const book2 = new Book(2, "Eloquent JavaScript", "Marijn Haverbeke");
  
  library.addBook(book1);
  library.addBook(book2);
  
  library.displayBooks();
  
  library.updateBook(1, "JS: The Good Parts", "D. Crockford");
  library.displayBooks();
  
  library.deleteBook(2);
  library.displayBooks();

  class Book {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    findBookById(id) {
      return this.books.find(book => book.id === id);
    }
  
    displayBooks() {
      console.log("Library Books:");
      this.books.forEach(book => {
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
      });
    }
  
    updateBook(id, updatedTitle, updatedAuthor) {
      const book = this.findBookById(id);
      if (book) {
        book.title = updatedTitle;
        book.author = updatedAuthor;
        console.log(`Book with ID ${id} updated successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  
    deleteBook(id) {
      const index = this.books.findIndex(book => book.id === id);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book with ID ${id} deleted successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  }
  
  // Contoh penggunaan
  const library = new Library();
  
  const book1 = new Book(1, "JavaScript: The Good Parts", "Douglas Crockford");
  const book2 = new Book(2, "Eloquent JavaScript", "Marijn Haverbeke");
  
  library.addBook(book1);
  library.addBook(book2);
  
  library.displayBooks();
  
  library.updateBook(1, "JS: The Good Parts", "D. Crockford");
  library.displayBooks();
  
  library.deleteBook(2);
  library.displayBooks();

  class Book {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    findBookById(id) {
      return this.books.find(book => book.id === id);
    }
  
    displayBooks() {
      console.log("Library Books:");
      this.books.forEach(book => {
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
      });
    }
  
    updateBook(id, updatedTitle, updatedAuthor) {
      const book = this.findBookById(id);
      if (book) {
        book.title = updatedTitle;
        book.author = updatedAuthor;
        console.log(`Book with ID ${id} updated successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  
    deleteBook(id) {
      const index = this.books.findIndex(book => book.id === id);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book with ID ${id} deleted successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  }
  
  // Contoh penggunaan
  const library = new Library();
  
  const book1 = new Book(1, "JavaScript: The Good Parts", "Douglas Crockford");
  const book2 = new Book(2, "Eloquent JavaScript", "Marijn Haverbeke");
  
  library.addBook(book1);
  library.addBook(book2);
  
  library.displayBooks();
  
  library.updateBook(1, "JS: The Good Parts", "D. Crockford");
  library.displayBooks();
  
  library.deleteBook(2);
  library.displayBooks();

  class Book {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    findBookById(id) {
      return this.books.find(book => book.id === id);
    }
  
    displayBooks() {
      console.log("Library Books:");
      this.books.forEach(book => {
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
      });
    }
  
    updateBook(id, updatedTitle, updatedAuthor) {
      const book = this.findBookById(id);
      if (book) {
        book.title = updatedTitle;
        book.author = updatedAuthor;
        console.log(`Book with ID ${id} updated successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  
    deleteBook(id) {
      const index = this.books.findIndex(book => book.id === id);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book with ID ${id} deleted successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  }
  
  // Contoh penggunaan
  const library = new Library();
  
  const book1 = new Book(1, "JavaScript: The Good Parts", "Douglas Crockford");
  const book2 = new Book(2, "Eloquent JavaScript", "Marijn Haverbeke");
  
  library.addBook(book1);
  library.addBook(book2);
  
  library.displayBooks();
  
  library.updateBook(1, "JS: The Good Parts", "D. Crockford");
  library.displayBooks();
  
  library.deleteBook(2);
  library.displayBooks();

  class Book {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    findBookById(id) {
      return this.books.find(book => book.id === id);
    }
  
    displayBooks() {
      console.log("Library Books:");
      this.books.forEach(book => {
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
      });
    }
  
    updateBook(id, updatedTitle, updatedAuthor) {
      const book = this.findBookById(id);
      if (book) {
        book.title = updatedTitle;
        book.author = updatedAuthor;
        console.log(`Book with ID ${id} updated successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  
    deleteBook(id) {
      const index = this.books.findIndex(book => book.id === id);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book with ID ${id} deleted successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  }
  
  // Contoh penggunaan
  const library = new Library();
  
  const book1 = new Book(1, "JavaScript: The Good Parts", "Douglas Crockford");
  const book2 = new Book(2, "Eloquent JavaScript", "Marijn Haverbeke");
  
  library.addBook(book1);
  library.addBook(book2);
  
  library.displayBooks();
  
  library.updateBook(1, "JS: The Good Parts", "D. Crockford");
  library.displayBooks();
  
  library.deleteBook(2);
  library.displayBooks();

  class Book {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    findBookById(id) {
      return this.books.find(book => book.id === id);
    }
  
    displayBooks() {
      console.log("Library Books:");
      this.books.forEach(book => {
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
      });
    }
  
    updateBook(id, updatedTitle, updatedAuthor) {
      const book = this.findBookById(id);
      if (book) {
        book.title = updatedTitle;
        book.author = updatedAuthor;
        console.log(`Book with ID ${id} updated successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  
    deleteBook(id) {
      const index = this.books.findIndex(book => book.id === id);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book with ID ${id} deleted successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  }
  
  // Contoh penggunaan
  const library = new Library();
  
  const book1 = new Book(1, "JavaScript: The Good Parts", "Douglas Crockford");
  const book2 = new Book(2, "Eloquent JavaScript", "Marijn Haverbeke");
  
  library.addBook(book1);
  library.addBook(book2);
  
  library.displayBooks();
  
  library.updateBook(1, "JS: The Good Parts", "D. Crockford");
  library.displayBooks();
  
  library.deleteBook(2);
  library.displayBooks();

  class Book {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    findBookById(id) {
      return this.books.find(book => book.id === id);
    }
  
    displayBooks() {
      console.log("Library Books:");
      this.books.forEach(book => {
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
      });
    }
  
    updateBook(id, updatedTitle, updatedAuthor) {
      const book = this.findBookById(id);
      if (book) {
        book.title = updatedTitle;
        book.author = updatedAuthor;
        console.log(`Book with ID ${id} updated successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  
    deleteBook(id) {
      const index = this.books.findIndex(book => book.id === id);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book with ID ${id} deleted successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  }
  
  // Contoh penggunaan
  const library = new Library();
  
  const book1 = new Book(1, "JavaScript: The Good Parts", "Douglas Crockford");
  const book2 = new Book(2, "Eloquent JavaScript", "Marijn Haverbeke");
  
  library.addBook(book1);
  library.addBook(book2);
  
  library.displayBooks();
  
  library.updateBook(1, "JS: The Good Parts", "D. Crockford");
  library.displayBooks();
  
  library.deleteBook(2);
  library.displayBooks();

  class Book {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    findBookById(id) {
      return this.books.find(book => book.id === id);
    }
  
    displayBooks() {
      console.log("Library Books:");
      this.books.forEach(book => {
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
      });
    }
  
    updateBook(id, updatedTitle, updatedAuthor) {
      const book = this.findBookById(id);
      if (book) {
        book.title = updatedTitle;
        book.author = updatedAuthor;
        console.log(`Book with ID ${id} updated successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  
    deleteBook(id) {
      const index = this.books.findIndex(book => book.id === id);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book with ID ${id} deleted successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  }
  
  // Contoh penggunaan
  const library = new Library();
  
  const book1 = new Book(1, "JavaScript: The Good Parts", "Douglas Crockford");
  const book2 = new Book(2, "Eloquent JavaScript", "Marijn Haverbeke");
  
  library.addBook(book1);
  library.addBook(book2);
  
  library.displayBooks();
  
  library.updateBook(1, "JS: The Good Parts", "D. Crockford");
  library.displayBooks();
  
  library.deleteBook(2);
  library.displayBooks();

  class Book {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    findBookById(id) {
      return this.books.find(book => book.id === id);
    }
  
    displayBooks() {
      console.log("Library Books:");
      this.books.forEach(book => {
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
      });
    }
  
    updateBook(id, updatedTitle, updatedAuthor) {
      const book = this.findBookById(id);
      if (book) {
        book.title = updatedTitle;
        book.author = updatedAuthor;
        console.log(`Book with ID ${id} updated successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  
    deleteBook(id) {
      const index = this.books.findIndex(book => book.id === id);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book with ID ${id} deleted successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  }
  
  // Contoh penggunaan
  const library = new Library();
  
  const book1 = new Book(1, "JavaScript: The Good Parts", "Douglas Crockford");
  const book2 = new Book(2, "Eloquent JavaScript", "Marijn Haverbeke");
  
  library.addBook(book1);
  library.addBook(book2);
  
  library.displayBooks();
  
  library.updateBook(1, "JS: The Good Parts", "D. Crockford");
  library.displayBooks();
  
  library.deleteBook(2);
  library.displayBooks();

  class Book {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    findBookById(id) {
      return this.books.find(book => book.id === id);
    }
  
    displayBooks() {
      console.log("Library Books:");
      this.books.forEach(book => {
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
      });
    }
  
    updateBook(id, updatedTitle, updatedAuthor) {
      const book = this.findBookById(id);
      if (book) {
        book.title = updatedTitle;
        book.author = updatedAuthor;
        console.log(`Book with ID ${id} updated successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  
    deleteBook(id) {
      const index = this.books.findIndex(book => book.id === id);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book with ID ${id} deleted successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  }
  
  // Contoh penggunaan
  const library = new Library();
  
  const book1 = new Book(1, "JavaScript: The Good Parts", "Douglas Crockford");
  const book2 = new Book(2, "Eloquent JavaScript", "Marijn Haverbeke");
  
  library.addBook(book1);
  library.addBook(book2);
  
  library.displayBooks();
  
  library.updateBook(1, "JS: The Good Parts", "D. Crockford");
  library.displayBooks();
  
  library.deleteBook(2);
  library.displayBooks();

  class Book {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    findBookById(id) {
      return this.books.find(book => book.id === id);
    }
  
    displayBooks() {
      console.log("Library Books:");
      this.books.forEach(book => {
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
      });
    }
  
    updateBook(id, updatedTitle, updatedAuthor) {
      const book = this.findBookById(id);
      if (book) {
        book.title = updatedTitle;
        book.author = updatedAuthor;
        console.log(`Book with ID ${id} updated successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  
    deleteBook(id) {
      const index = this.books.findIndex(book => book.id === id);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book with ID ${id} deleted successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  }
  
  // Contoh penggunaan
  const library = new Library();
  
  const book1 = new Book(1, "JavaScript: The Good Parts", "Douglas Crockford");
  const book2 = new Book(2, "Eloquent JavaScript", "Marijn Haverbeke");
  
  library.addBook(book1);
  library.addBook(book2);
  
  library.displayBooks();
  
  library.updateBook(1, "JS: The Good Parts", "D. Crockford");
  library.displayBooks();
  
  library.deleteBook(2);
  library.displayBooks();

  class Book {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    findBookById(id) {
      return this.books.find(book => book.id === id);
    }
  
    displayBooks() {
      console.log("Library Books:");
      this.books.forEach(book => {
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
      });
    }
  
    updateBook(id, updatedTitle, updatedAuthor) {
      const book = this.findBookById(id);
      if (book) {
        book.title = updatedTitle;
        book.author = updatedAuthor;
        console.log(`Book with ID ${id} updated successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  
    deleteBook(id) {
      const index = this.books.findIndex(book => book.id === id);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book with ID ${id} deleted successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  }
  
  // Contoh penggunaan
  const library = new Library();
  
  const book1 = new Book(1, "JavaScript: The Good Parts", "Douglas Crockford");
  const book2 = new Book(2, "Eloquent JavaScript", "Marijn Haverbeke");
  
  library.addBook(book1);
  library.addBook(book2);
  
  library.displayBooks();
  
  library.updateBook(1, "JS: The Good Parts", "D. Crockford");
  library.displayBooks();
  
  library.deleteBook(2);
  library.displayBooks();

  class Book {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    findBookById(id) {
      return this.books.find(book => book.id === id);
    }
  
    displayBooks() {
      console.log("Library Books:");
      this.books.forEach(book => {
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
      });
    }
  
    updateBook(id, updatedTitle, updatedAuthor) {
      const book = this.findBookById(id);
      if (book) {
        book.title = updatedTitle;
        book.author = updatedAuthor;
        console.log(`Book with ID ${id} updated successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  
    deleteBook(id) {
      const index = this.books.findIndex(book => book.id === id);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book with ID ${id} deleted successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  }
  
  // Contoh penggunaan
  const library = new Library();
  
  const book1 = new Book(1, "JavaScript: The Good Parts", "Douglas Crockford");
  const book2 = new Book(2, "Eloquent JavaScript", "Marijn Haverbeke");
  
  library.addBook(book1);
  library.addBook(book2);
  
  library.displayBooks();
  
  library.updateBook(1, "JS: The Good Parts", "D. Crockford");
  library.displayBooks();
  
  library.deleteBook(2);
  library.displayBooks();

  class Book {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    findBookById(id) {
      return this.books.find(book => book.id === id);
    }
  
    displayBooks() {
      console.log("Library Books:");
      this.books.forEach(book => {
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
      });
    }
  
    updateBook(id, updatedTitle, updatedAuthor) {
      const book = this.findBookById(id);
      if (book) {
        book.title = updatedTitle;
        book.author = updatedAuthor;
        console.log(`Book with ID ${id} updated successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  
    deleteBook(id) {
      const index = this.books.findIndex(book => book.id === id);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book with ID ${id} deleted successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  }
  
  // Contoh penggunaan
  const library = new Library();
  
  const book1 = new Book(1, "JavaScript: The Good Parts", "Douglas Crockford");
  const book2 = new Book(2, "Eloquent JavaScript", "Marijn Haverbeke");
  
  library.addBook(book1);
  library.addBook(book2);
  
  library.displayBooks();
  
  library.updateBook(1, "JS: The Good Parts", "D. Crockford");
  library.displayBooks();
  
  library.deleteBook(2);
  library.displayBooks();

  class Book {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    findBookById(id) {
      return this.books.find(book => book.id === id);
    }
  
    displayBooks() {
      console.log("Library Books:");
      this.books.forEach(book => {
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
      });
    }
  
    updateBook(id, updatedTitle, updatedAuthor) {
      const book = this.findBookById(id);
      if (book) {
        book.title = updatedTitle;
        book.author = updatedAuthor;
        console.log(`Book with ID ${id} updated successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  
    deleteBook(id) {
      const index = this.books.findIndex(book => book.id === id);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book with ID ${id} deleted successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  }
  
  // Contoh penggunaan
  const library = new Library();
  
  const book1 = new Book(1, "JavaScript: The Good Parts", "Douglas Crockford");
  const book2 = new Book(2, "Eloquent JavaScript", "Marijn Haverbeke");
  
  library.addBook(book1);
  library.addBook(book2);
  
  library.displayBooks();
  
  library.updateBook(1, "JS: The Good Parts", "D. Crockford");
  library.displayBooks();
  
  library.deleteBook(2);
  library.displayBooks();

  class Book {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    findBookById(id) {
      return this.books.find(book => book.id === id);
    }
  
    displayBooks() {
      console.log("Library Books:");
      this.books.forEach(book => {
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
      });
    }
  
    updateBook(id, updatedTitle, updatedAuthor) {
      const book = this.findBookById(id);
      if (book) {
        book.title = updatedTitle;
        book.author = updatedAuthor;
        console.log(`Book with ID ${id} updated successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  
    deleteBook(id) {
      const index = this.books.findIndex(book => book.id === id);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book with ID ${id} deleted successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  }
  
  // Contoh penggunaan
  const library = new Library();
  
  const book1 = new Book(1, "JavaScript: The Good Parts", "Douglas Crockford");
  const book2 = new Book(2, "Eloquent JavaScript", "Marijn Haverbeke");
  
  library.addBook(book1);
  library.addBook(book2);
  
  library.displayBooks();
  
  library.updateBook(1, "JS: The Good Parts", "D. Crockford");
  library.displayBooks();
  
  library.deleteBook(2);
  library.displayBooks();

  class Book {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    findBookById(id) {
      return this.books.find(book => book.id === id);
    }
  
    displayBooks() {
      console.log("Library Books:");
      this.books.forEach(book => {
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
      });
    }
  
    updateBook(id, updatedTitle, updatedAuthor) {
      const book = this.findBookById(id);
      if (book) {
        book.title = updatedTitle;
        book.author = updatedAuthor;
        console.log(`Book with ID ${id} updated successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  
    deleteBook(id) {
      const index = this.books.findIndex(book => book.id === id);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book with ID ${id} deleted successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  }
  
  // Contoh penggunaan
  const library = new Library();
  
  const book1 = new Book(1, "JavaScript: The Good Parts", "Douglas Crockford");
  const book2 = new Book(2, "Eloquent JavaScript", "Marijn Haverbeke");
  
  library.addBook(book1);
  library.addBook(book2);
  
  library.displayBooks();
  
  library.updateBook(1, "JS: The Good Parts", "D. Crockford");
  library.displayBooks();
  
  library.deleteBook(2);
  library.displayBooks();

  class Book {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    findBookById(id) {
      return this.books.find(book => book.id === id);
    }
  
    displayBooks() {
      console.log("Library Books:");
      this.books.forEach(book => {
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
      });
    }
  
    updateBook(id, updatedTitle, updatedAuthor) {
      const book = this.findBookById(id);
      if (book) {
        book.title = updatedTitle;
        book.author = updatedAuthor;
        console.log(`Book with ID ${id} updated successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  
    deleteBook(id) {
      const index = this.books.findIndex(book => book.id === id);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book with ID ${id} deleted successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  }
  
  // Contoh penggunaan
  const library = new Library();
  
  const book1 = new Book(1, "JavaScript: The Good Parts", "Douglas Crockford");
  const book2 = new Book(2, "Eloquent JavaScript", "Marijn Haverbeke");
  
  library.addBook(book1);
  library.addBook(book2);
  
  library.displayBooks();
  
  library.updateBook(1, "JS: The Good Parts", "D. Crockford");
  library.displayBooks();
  
  library.deleteBook(2);
  library.displayBooks();

  class Book {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    findBookById(id) {
      return this.books.find(book => book.id === id);
    }
  
    displayBooks() {
      console.log("Library Books:");
      this.books.forEach(book => {
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
      });
    }
  
    updateBook(id, updatedTitle, updatedAuthor) {
      const book = this.findBookById(id);
      if (book) {
        book.title = updatedTitle;
        book.author = updatedAuthor;
        console.log(`Book with ID ${id} updated successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  
    deleteBook(id) {
      const index = this.books.findIndex(book => book.id === id);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book with ID ${id} deleted successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  }
  
  // Contoh penggunaan
  const library = new Library();
  
  const book1 = new Book(1, "JavaScript: The Good Parts", "Douglas Crockford");
  const book2 = new Book(2, "Eloquent JavaScript", "Marijn Haverbeke");
  
  library.addBook(book1);
  library.addBook(book2);
  
  library.displayBooks();
  
  library.updateBook(1, "JS: The Good Parts", "D. Crockford");
  library.displayBooks();
  
  library.deleteBook(2);
  library.displayBooks();

  class Book {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    findBookById(id) {
      return this.books.find(book => book.id === id);
    }
  
    displayBooks() {
      console.log("Library Books:");
      this.books.forEach(book => {
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
      });
    }
  
    updateBook(id, updatedTitle, updatedAuthor) {
      const book = this.findBookById(id);
      if (book) {
        book.title = updatedTitle;
        book.author = updatedAuthor;
        console.log(`Book with ID ${id} updated successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  
    deleteBook(id) {
      const index = this.books.findIndex(book => book.id === id);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book with ID ${id} deleted successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  }
  
  // Contoh penggunaan
  const library = new Library();
  
  const book1 = new Book(1, "JavaScript: The Good Parts", "Douglas Crockford");
  const book2 = new Book(2, "Eloquent JavaScript", "Marijn Haverbeke");
  
  library.addBook(book1);
  library.addBook(book2);
  
  library.displayBooks();
  
  library.updateBook(1, "JS: The Good Parts", "D. Crockford");
  library.displayBooks();
  
  library.deleteBook(2);
  library.displayBooks();

  class Book {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    findBookById(id) {
      return this.books.find(book => book.id === id);
    }
  
    displayBooks() {
      console.log("Library Books:");
      this.books.forEach(book => {
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
      });
    }
  
    updateBook(id, updatedTitle, updatedAuthor) {
      const book = this.findBookById(id);
      if (book) {
        book.title = updatedTitle;
        book.author = updatedAuthor;
        console.log(`Book with ID ${id} updated successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  
    deleteBook(id) {
      const index = this.books.findIndex(book => book.id === id);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book with ID ${id} deleted successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  }
  
  // Contoh penggunaan
  const library = new Library();
  
  const book1 = new Book(1, "JavaScript: The Good Parts", "Douglas Crockford");
  const book2 = new Book(2, "Eloquent JavaScript", "Marijn Haverbeke");
  
  library.addBook(book1);
  library.addBook(book2);
  
  library.displayBooks();
  
  library.updateBook(1, "JS: The Good Parts", "D. Crockford");
  library.displayBooks();
  
  library.deleteBook(2);
  library.displayBooks();

  class Book {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    findBookById(id) {
      return this.books.find(book => book.id === id);
    }
  
    displayBooks() {
      console.log("Library Books:");
      this.books.forEach(book => {
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
      });
    }
  
    updateBook(id, updatedTitle, updatedAuthor) {
      const book = this.findBookById(id);
      if (book) {
        book.title = updatedTitle;
        book.author = updatedAuthor;
        console.log(`Book with ID ${id} updated successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  
    deleteBook(id) {
      const index = this.books.findIndex(book => book.id === id);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book with ID ${id} deleted successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  }
  
  // Contoh penggunaan
  const library = new Library();
  
  const book1 = new Book(1, "JavaScript: The Good Parts", "Douglas Crockford");
  const book2 = new Book(2, "Eloquent JavaScript", "Marijn Haverbeke");
  
  library.addBook(book1);
  library.addBook(book2);
  
  library.displayBooks();
  
  library.updateBook(1, "JS: The Good Parts", "D. Crockford");
  library.displayBooks();
  
  library.deleteBook(2);
  library.displayBooks();

  class Book {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    findBookById(id) {
      return this.books.find(book => book.id === id);
    }
  
    displayBooks() {
      console.log("Library Books:");
      this.books.forEach(book => {
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
      });
    }
  
    updateBook(id, updatedTitle, updatedAuthor) {
      const book = this.findBookById(id);
      if (book) {
        book.title = updatedTitle;
        book.author = updatedAuthor;
        console.log(`Book with ID ${id} updated successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  
    deleteBook(id) {
      const index = this.books.findIndex(book => book.id === id);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book with ID ${id} deleted successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  }
  
  // Contoh penggunaan
  const library = new Library();
  
  const book1 = new Book(1, "JavaScript: The Good Parts", "Douglas Crockford");
  const book2 = new Book(2, "Eloquent JavaScript", "Marijn Haverbeke");
  
  library.addBook(book1);
  library.addBook(book2);
  
  library.displayBooks();
  
  library.updateBook(1, "JS: The Good Parts", "D. Crockford");
  library.displayBooks();
  
  library.deleteBook(2);
  library.displayBooks();

  class Book {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    findBookById(id) {
      return this.books.find(book => book.id === id);
    }
  
    displayBooks() {
      console.log("Library Books:");
      this.books.forEach(book => {
        console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
      });
    }
  
    updateBook(id, updatedTitle, updatedAuthor) {
      const book = this.findBookById(id);
      if (book) {
        book.title = updatedTitle;
        book.author = updatedAuthor;
        console.log(`Book with ID ${id} updated successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  
    deleteBook(id) {
      const index = this.books.findIndex(book => book.id === id);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book with ID ${id} deleted successfully.`);
      } else {
        console.log(`Book with ID ${id} not found.`);
      }
    }
  }
  
  // Contoh penggunaan
  const library = new Library();
  
  const book1 = new Book(1, "JavaScript: The Good Parts", "Douglas Crockford");
  const book2 = new Book(2, "Eloquent JavaScript", "Marijn Haverbeke");
  
  library.addBook(book1);
  library.addBook(book2);
  
  library.displayBooks();
  
  library.updateBook(1, "JS: The Good Parts", "D. Crockford");
  library.displayBooks();
  
  library.deleteBook(2);
  library.displayBooks();
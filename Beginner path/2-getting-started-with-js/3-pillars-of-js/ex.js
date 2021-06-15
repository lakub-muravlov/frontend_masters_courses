class Bookshelf {
  constructor() {
    this.favoriteBooks = [];
  }

  addFavoriteBook(name) {
    if (!name.includes("Great")) {
      this.favoriteBooks.push(name);
    }
  }
  printFavoriteBooks() {
    console.log(`Favorite Books: ${String(this.favoriteBooks.length)}`);
    for (let Book of this.favoriteBooks) {
      console.log(Book);
    }
  }
}

function loadBooks(theBookshelf) {
  fakeAjax(BOOK_API, function onBooks(bookNames) {
    for (let bookName of bookNames) {
      theBookshelf.addFavoriteBook(bookName);
    }
    theBookshelf.printFavoriteBooks();
  });
}

var myBooks = new Bookshelf();
loadBooks(myBooks);

var BOOK_API = "https://some.url/api";

function fakeAjax(url, cb) {
  setTimeout(function fakeLoadingDelay() {
    cb([
      "A Song of Ice and Fire",
      "The Great Gatsby",
      "Crime & Punishment",
      "Great Expectations",
      "You Don't Know JS",
    ]);
  }, 500);
}

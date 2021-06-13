var favoriteBooks = [];

function addFavoriteBook(name) {
  if (!name.includes("Great")) {
    favoriteBooks.push(name);
  }
}

function printFavoriteBooks(Books) {
  console.log(`Favorite Books: ${Books.length}`);
  for (let Book of Books) {
    console.log(Book);
  }
}

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

printFavoriteBooks(favoriteBooks);

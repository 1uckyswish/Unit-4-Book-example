const bookImg = document.querySelectorAll(".book-image img");
const bookTitle = document.querySelectorAll(".book-title");
const bookAuthor = document.querySelectorAll(".book-author");
const yearBook = document.querySelectorAll(".book-year");
const desBoook = document.querySelectorAll(".book-description");
const bookInput = document.querySelector("input");
const bookBtn = document.querySelector("button");

const apiKey = "AIzaSyBkVNpp07djnpcl_ueGOP6467hRX04BPAk";
const setBookInfo = (book) => {
 for(let i = 0; i < 10; i++){
  bookTitle[i].innerHTML = `Book Title: ${book.items[i].volumeInfo.title}`;
  bookAuthor[i].innerHTML = `Author: ${book.items[i].volumeInfo.authors[i]}`;
  bookImg[i].setAttribute("src", book.items[i].volumeInfo.imageLinks.thumbnail);
  yearBook[i].innerHTML = `Year Released: ${book.items[i].volumeInfo.publishedDate}`;
  desBoook[i].innerHTML = `Book Description: ${book.items[i].volumeInfo.description}`;
  console.log(book)
 }
}

const makeBookRequest = ()=>{
  const query = bookInput.value;
  const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`;
  fetch(url)
  .then(response => response.json())
  .then(data => {
    const book = data;
    console.log(book.items.volumeInfo); // process the data as needed
    setBookInfo(book);
  })
  .catch(error => {
    console.error(error);
  });
};

bookBtn.addEventListener("click", ()=>{
  makeBookRequest();
});

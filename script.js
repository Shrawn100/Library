let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.dataIndex = myLibrary.length;
  this.info = function info() {
    return `<p class=title>${title}</p><div>${author}<br>${pages} pages</div><div class="cardbtns"> ${
      this.read
        ? `<button type="button" class="readbtn green">Read</button>`
        : `<button type="button" class="readbtn red">Unread</button>`
    }<button class="x" type=button>Remove</button> </div>`;
  };
}

const hobbit = new Book("The Hobbit", "J.R.R Tolkien", "295", false);
console.log(myLibrary.length);
function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);

  myLibrary.push(newBook);
}

function generateListItems(arg) {
  let items = "";
  for (let i = 0; i < arg.length; i++) {
    items += `<div class=card data-index="${arg[i].dataIndex}">${arg[
      i
    ].info()}</div>`;
  }
  return items;
}

let article = document.querySelector(".article");

let borderOuter = document.querySelector(".borderOuter");
borderOuter.addEventListener("click", () => {
  if (event.target === borderOuter) {
    document.querySelectorAll(".input").forEach((input) => {
      input.value = "";
    });
    borderOuter.classList.add("hidden");
  }
});
let btn = document.querySelector("#new");

btn.addEventListener("click", () => {
  document.querySelectorAll(".input").forEach((input) => {
    input.value = "";
  });
  borderOuter.classList.remove("hidden");
});
console.log(document.querySelectorAll(".input"));

console.log(document.querySelectorAll(".input").length);

let titleInput = document.querySelector("#title");
let authorInput = document.querySelector("#author");
let pagesInput = document.querySelector("#pages");
let readInput = document.querySelector("#read");

let submission = document.querySelector(".submit");
submission.addEventListener("click", () => {
  title = titleInput.value;
  author = authorInput.value;
  pages = pagesInput.value;
  read = readInput.value;

  addBookToLibrary(title, author, pages, read);
  article.innerHTML = `<div>
  ${generateListItems(myLibrary)}

  </div>`;

  borderOuter.classList.add("hidden");
  readFlag = document.querySelectorAll(".readbtn");
  readFlag.forEach((flag) => {
    flag.addEventListener("click", () => {
      if (flag.classList.contains("green")) {
        flag.classList.remove("green");
        flag.classList.add("red");
      } else {
        flag.classList.remove("red");
        flag.classList.add("green");
      }
    });
  });
});
addBookToLibrary(1, 1, 1, true);
article.innerHTML = `<div>
  ${generateListItems(myLibrary)}

  </div>`;
console.log(myLibrary);

let readFlag = document.querySelectorAll(".readbtn");

readFlag.forEach((flag) => {
  flag.addEventListener("click", () => {
    if (flag.classList.contains("green")) {
      flag.classList.remove("green");
      flag.classList.add("red");
    } else {
      flag.classList.remove("red");
      flag.classList.add("green");
    }
  });
});

let removeButtons = document.querySelectorAll(".x");
article.addEventListener("click", (event) => {
  if (event.target.classList.contains("x")) {
    let dataIndex = event.target.parentNode.parentNode.dataset.index;
    let bookToRemove = myLibrary.find((book) => book.dataIndex == dataIndex);
    let bookIndex = myLibrary.indexOf(bookToRemove);
    myLibrary.splice(bookIndex, 1);
    article.innerHTML = `<div>
            ${generateListItems(myLibrary)}
        </div>`;
  }
});

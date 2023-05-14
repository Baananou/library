//load express
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

//load mongoose
const mongoose = require("mongoose");
require("./Book");
const Book = mongoose.model("Book");

// connect to db

mongoose
  .connect(
    "mongodb+srv://baananou:baananou@cluster0.jxxcths.mongodb.net/SOCIAL_MEDIA?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("this is our book Microservice main endpoint !");
});

// Create Book
app.post("/book", (req, res) => {
  var newBook = {
    title: req.body.title,
    author: req.body.author,
    pages: req.body.pages,
    category: req.body.category,
    available: req.body.available,
  };
  // create a new Book
  var book = new Book(newBook);
  book
    .save()
    .then(() => {
      console.log("New book created !");
    })
    .catch((err) => {
      if (err) {
        throw err;
      }
    });
  res.send(" A new book created with sucess");
});

// Fetch Books
app.get("/books", (req, res) => {
  Book.find()
    .then((books) => {
      res.json(books);
    })
    .catch((err) => {
      if (err) {
        throw err;
      }
    });
});

// Fetch Book by id
app.get("/book/:id", (req, res) => {
  Book.findById(req.params.id)
    .then((book) => {
      if (book) {
        res.json(book);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      if (err) {
        throw err;
      }
    });
});

app.delete("/book/:id", (req, res) => {
  Book.findByIdAndRemove(req.params.id)
    .then(() => {
      res.send("Book Remved With success !");
    })
    .catch((err) => {
      if (err) {
        throw err;
      }
    });
});

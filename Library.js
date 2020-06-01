// Created by Paul A. Gureghian in May 2020. //
// This JavaScript program creates a library catalog. //     

// Start of program. //

// Create a parent class. //

class Media {

  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  // Create getters & setters. //
  get title() {
    return this._title; 
  } 

  get isCheckedOut() {
    return this._isCheckedOut;
  }
  
  set isCheckedOut(value) {
    this._isCheckedOut = value;
  }

  get ratings() {
    return this._ratings;
  }

  // Create a method 'toggleCheckOutStatus'. //
  toggleCheckOutStatus() {
    this.isCheckedOut = !this.isCheckedOut;
  }

  // Create a method 'getAverageRating'. //
  getAverageRating() {

    let ratingsSum = this.ratings.reduce((accumulator, rating) => accumulator + rating);
    
    return ratingsSum / this.ratings.length;
  }

  // Create a method 'addRating'. //
  addRating(value) {

    this.ratings.push(value);
  }
}

// Add a sub-class named 'Book'. //
class Book extends Media {
  
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  // Add 'getters'. //
  get author() {
    this._author = author;
  }

  get pages() {
    this._pages = this.pages;
  }
}

// Add a sub-class named 'Movie'. //
class Movie extends Media {

  constructor(director, title, runtime) {
    super(title);
    this._director = director;
    this._runtime = runtime;
  }

  // Add 'getters'. //
  get director() {
    return this._director = this.director;
  }

  get runtime() {
    return this._runtime = this.runtime;
  }
 
}

// Instantiate the 'Book' class. // 
const myBook = new Book('Paul Gureghian', 'I code JavaScript', 500);
myBook.toggleCheckOutStatus();


// Log the value of 'isCheckedOut'. //
console.log(myBook.isCheckedOut);

// Add ratings. //
myBook.addRating(4);
myBook.addRating(5);
myBook.addRating(5);


// End of program. //
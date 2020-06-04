// Created by Paul A. Gureghian in June 2020. //
// This JavaScript program creates a school catalogue. //     

// Start of program. //

// Create a 'School' parent class. //
class School {

  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  // Create getters & setters. //
get name() {
  return this._name;  
}

get level() {
  return this._level;
}

get numberOfStudents() {
  return this._numberOfStudents;
}

set numberOfStudents(number) {
  
    if(value.isNan()) {
    console.log('Invalid input: numberOfStudents must be a number.');  
  }
  
  else {
    this._numberOfStudents = number;  
  }
}

// Create a method named 'quickFacts. //
quickFacts() {  
  console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level`)
}

}
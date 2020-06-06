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
  
    if (number.isNan()) {
    console.log('Invalid input: numberOfStudents must be a number.');  
  }
  
  else {
    this._numberOfStudents = number;  
  }
}

  // Create a method named 'quickFacts. //
  quickFacts() {  
    console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level`);
  }

  // Add a static method. //
  static pickSubstituteTeacher(substituteTeachers) {

    const randInt = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[randInt];
  }
}

// Create 'PrimarySchool' class. //
class PrimarySchool extends School {

  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, 'primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
    
  // Create a 'getter'. //
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

// Create 'HighSchool' class. // 
class HighSchool extends School {

  constructor(name, numberOfStudents, sportsTeams) {
    super(name, 'high', numberOfStudents);
    this._sportsTeams = sportsTeams;
  }

  // Create a 'getter'. //
  get sportsTeams() {
    return this._sportsTeams;
  }
}

// Instantiate the 'PrimarySchool' class. //
const Bassett = new PrimarySchool('Bassett', 500, 'Students must be picked up by a parent.');

// Call '.quickFacts()' on the 'Bassett' instance. //
Bassett.quickFacts();

// Call '.pickSubstituteTeacher' on 'School'. //
const sub = School.pickSubstituteTeacher(['Joe', 'Lou', 'Jim', 'James', 'Jason', 'Manu']);

// Instantiate the 'HighSchool' class. //
const Birmingham = new HighSchool('Birmingham', 600, ['Baseball', 'Basketball', 'Football', 'Hockey']);

// Log the value of 'sportsTeams' in 'Birmingham'. //
console.log(Birmingham.sportsTeams); 

// End of program. //
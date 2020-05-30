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

    // Create getters. //
    get title() {
      return this._title; 
    } 

    get isCheckedOut() {
      return this._isCheckedOut;
    }

    get ratings() {
      return this._ratings;
    }
















}

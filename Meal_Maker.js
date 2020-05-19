// Created by Paul A. Gureghian in May 2020. //
// This JavaScript program creates a three-course meal //
// Based upon what is available on a menu. //

// Start of program. //

// Create an object named "menu". //
const menu = {
  
    _courses: {
      
        appetizers: [],
        mains: [],
        desserts: [],
    },

    get appetizers() {
        return this._courses.appetizers;
    },

    get mains() {
        return this._courses.mains;
    },

    get desserts() {
        return this._courses.desserts;
    },


};
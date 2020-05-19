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

    set appetizers(appetizers) {
        this._courses.appetizers = appetizers;
    },

    set mains(mains) {
        this._courses.mains = mains;
    },

    set desserts(desserts) {
        this._courses.desserts = desserts;
    },

};
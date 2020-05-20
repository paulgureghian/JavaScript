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

    get courses() {

        return {

            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts,
        
        };    
    },

    addDishToCourse(courseName, dishName, dishPrice) {

        const dish = {
            name:  dishName,
            price: dishPrice, 
        };
    
        return this._courses[courseName].push(dish);
    
    },

    getRandomDishFromCourse(courseName) {

        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length); 
        return dishes[randomIndex]; 

    },
    
    generateRandomMeal() {

        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;
        return "Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}, and the total price is ${totalPrice}";
    }
};


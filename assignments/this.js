/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.If the function is regular function which is not the part of object that means it belong to the window(global).
* 2. Whenever a function is called by a before dot,the object of the dot gets"this".
* 3. Whenever a constructor function is used,the refers to the specific instance of the objects 
that is created and returned by the cunstructor function.
* 4.Whenever JS call or apply method is used this is explicity defined. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

 function myName(){
     return this;
 }
console.log(myName());
// Principle 2

// code example for Implicit Binding
let animal = {
    Name:"Elephant",
    Weight:500,
    Eat:"Grass",
    Height:5,
    food : function(){
        return ` The ${this.Name} like to eat ${this.Eat}`;
    }


}
console.log(animal.food());


// Principle 3

// code example for New Binding
function animals(food){
    this.food = "food",
    this.eat = function(){
    return(`This animal like to eat ${this.food}`);
    }
 
 }
 let Elephant = new animals("grass");
 console.log(Elephant)




// Principle 4

// code example for Explicit Binding
let person1 = {
fullName : function(){
   return `My Name is ${this.firstName} ${this.lastName}`
}
}

let person2 = {
    firstName : "Jonny",
    lastName : "Deo"
}

let Y =console.log( person1.fullName.call(person2));






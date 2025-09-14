// DATATYPES
// in javascript that are serveral data types can use to store different types of data, some common data type includ :
// number(e.g. 10,3.14), string(e.g "hello",'world'), booleans(e.g true, false), arrays(e.g [1,2,33]), objects(e.g{name: "john", age:30})

//Primitive and objects
//                     In javascript, there are two main of data : Primitive and objets

//Primitives
//          Primitives are the simplest and most basic types in javascript, They include:-->
//          Numbers,Strings,Booleans,Null(a spical value that reperesent an absence of value),Undefind(a spical value that represents an uninitialized variables)

//Primitives are immutable, which means that once they are created, they cannot be changed. For example:

let x = 10;
x = 20;

//in this exmple, that value of "x" is changed from 10 to 20. However, this does not chnages that value of the primitive itself, but rather create a new primitve with the value of 20.

//Objects 
//       objets are more complex data type in javasript and are used to represent real-world objeccts or absetract concept. Theyy are composed of key-value      pairs. where the key are string and the values can be any datatype including primmitive and other objets.
//       objects are mutable, which means that can be changed after they are create. for example 

let obj = {name:"john", age:30};
obj.age = 31; //the age property or obj is now 31

//in this example, the agr propertyy of the obj object is changed from 30 to 31. this changes the value of the object itself, rather than creating a new object.
//there are serveral other datatype in javascript that can classified as object, including arrays, function, and dates. these data type behave similary to objects in that they are mutable after they are created.


// operator and expression

// arithmetic operators (+,-,*,/,%)
// comparison operators (>,<,>=,<=,==,!=)
//logical operators (&&, ||, !)
//assignment operators (=, =+, -=, *=, |=)
//condition operators (?!)

// aritmetic operators 
// +
//used to add numbers or conccatente string

let a = 10;
let b = 20;
console.log (a+b);

let str1 = "hello "
let str2 = "world"
console.log(str1 + str2);
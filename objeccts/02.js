const tinderuser = new Object()
tinderuser.id = "123abc"
tinderuser.name = "Manish Suthar"
tinderuser.age = 18
tinderuser.email = "manish@gmail.com"

console.log(tinderuser)


//object in object

const regularUser = {
    email : "some@gmail.com",
    FullName : {
        UsereFullName : {
            FirstName : "Manish",
            LastName : "Suthar"
        }
    }
}

//How to access This kind of object
console.log(regularUser.FullName.UsereFullName.FirstName)

//assign

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj3 = {5:"a", 6:"b"}

//litbitt use this
const obj4 = Object.assign({}, obj1,obj2,obj3)
console.log(obj4);

//use thhis
const obj5 = {...obj1,...obj2,...obj3}
console.log(obj5);

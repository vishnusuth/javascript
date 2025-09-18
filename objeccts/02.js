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
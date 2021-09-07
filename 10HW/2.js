let user1 = {
    lastName: "admin",
    firstName: "admin@google.com",
};

let user2 = {
    lastName: "admin1",
    firstName: "admin1@google.com",
};

printObj = function (user){
    console.log(user.lastName + " " + user.firstName);
}

printObj(user1)
printObj(user2)
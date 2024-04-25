"use strict";
// class User {
//     public email: string;
//     private name: string; // By default public
//     city: string = "";
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name;
//     }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        // private _courseCount = 1;
        this._courseCount = 1;
        this.city = "Patna";
    }
    deleteToken() {
        console.log("Token deleted");
    }
    //get keyword for getter
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    //set keyword for setter and it should not have any return type.
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more that 1");
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const rahul = new User("r@rgmail.com", "Rahul");
// rahul.city = "Hyderabad";

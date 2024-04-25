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
    // private _courseCount = 1;
    protected _courseCount = 1;
    readonly city: string = "Patna";

    constructor(
        public email: string, 
        public name: string,
        // private userId: string
    ) {}

    private deleteToken() {
        console.log("Token deleted");
    }

    //get keyword for getter
    get getAppleEmail(): string {
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this._courseCount;
    }

    //set keyword for setter and it should not have any return type.
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more that 1")
        }
        this._courseCount = courseNum;
    }
}

class SubUser extends User {
    isFamily: boolean =  true;
    changeCourseCount() {
        this._courseCount = 4;
    }
}

const rahul = new User("r@rgmail.com", "Rahul");
// rahul.city = "Hyderabad";

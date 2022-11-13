//Primitives: numbers, strings, boolean
//More complex types: arrays,objects
//function types,parameters

//Primitives

let age: number;

age = 20.2;

let userName: string;

userName = "HasanovH";

let isDeveloper: boolean;

isDeveloper = true;

//More Complex types

let hobbies: string[];
hobbies = ["Sports", "Cooking"];

type Person = {
  name: string;
  age: number;
  isEmployee: boolean;
};

let person: Person;

person = {
  name: "Hasan",
  age: 29,
  isEmployee: true,
};

let people: Person[];

// Type inference

let course: "React - The Complete Guide";

// course = 12345

//union type

let course1: string | number = "React - The Complete Guide";

course1 = 1234;

//functions and types

function add(a: number, b: number) {
  return a + b;
}

function printLine(value: any): void {
  console.log(value);
}

//Generecis

function instertAtBeginning<T>(array: T[], value: T) {
  const newArr = [value, ...array];
  return newArr;
}

const demoArray = [1, 2, 3];
const updatedArray = instertAtBeginning(demoArray, -1);
const stringArray = instertAtBeginning(["a", "b"], "d");

stringArray[0].split("");

class Student {
  // firstName: string;
  // lastName: string;
  // age: number;
  // courses: string[]

  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    private courses: string[]
  ) {}

  enroll(courseName: string) {
    this.courses.push(courseName);
  }
  listCourses() {
    return this.courses.slice();
  }
}

const student = new Student("Hasan", "Hasanov", 20, ["Angular", "React"]);

student.enroll("TypeScript");
student.listCourses();

interface Human {
    firstName: string;
    age: number;

    greet: () => void
}

let max: Human
max = {
    firstName: "Hasan",
    age: 20,

    greet() {
        console.log(this.firstName + 'Says Hello')
    },
}

class Instructor implements Human {
    firstName: string;
    age:number;
    greet(){
        console.log('Hello!!!')
    }
}
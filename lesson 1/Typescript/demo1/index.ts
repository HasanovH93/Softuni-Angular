let isDone: boolean = false;

let decima: number = 6;

let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

let message: string = "";

let messages: string[] = ['Message 1', 'Message 2'];
let strictMessage: ['Message 1', number] = ['Message 1', 2.3];

enum Type {
    peugeot = 1,
    mercedes = 2,
    vw = 4
}

function sumNumbers(numbers: number[]){
    let result: number = 0;
    for(let num of numbers){
        result += num
    }
}
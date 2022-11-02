export abstract class Employee {
  salary: number;
  tasks: string[] = [];
  private currentWorkIndex = 0
  constructor(public name: string, public age: number) {}

  work(): void {

    console.log(this.tasks[this.currentWorkIndex])

    this.currentWorkIndex = (this.currentWorkIndex + 1) % this.tasks.length;
  }
  collectSalary(): void {
    console.log(`${this.name} received ${this.calculateSalary}}`)
  }
  protected abstract calculateSalary()
}

export class Junior extends Employee {
  tasks: string[] = [`${this.name} is working on a simple task`];

  calculateSalary(): number {
    return this.salary
  }
}

export class Seinior extends Employee {
  tasks: string[] = [
    `${this.name} is working on a complicated task`,
    `${this.name} is taking time off work.`,
    `${this.name} is supervising junior workers`,
  ];

  calculateSalary(): number {
    return this.salary
  }
}

export class Manager extends Employee {
    tasks: string[] = [
        `${this.name} scheduled a meeteing`,
        `${this.name} is preparing quertly report`,
      ];

      
  dividend: number;

 protected calculateSalary(): number {
     return this.salary + this.dividend
 }
}

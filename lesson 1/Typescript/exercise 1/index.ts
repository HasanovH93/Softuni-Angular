import { Manager } from "./employee";
import { Seinior } from "./employee";
import { Junior } from "./employee"

const junior = new Junior('Gosho', 20);

junior.work(); // simple task
junior.work(); // simple task
junior.work(); // simple task

const seinior = new Seinior("Peter", 50);

seinior.work()
seinior.work()
seinior.work()

const manager = new Manager('John', 30);

manager.work()
manager.work()
manager.work()
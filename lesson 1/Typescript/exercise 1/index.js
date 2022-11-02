"use strict";
exports.__esModule = true;
var employee_1 = require("./employee");
var employee_2 = require("./employee");
var employee_3 = require("./employee");
var junior = new employee_3.Junior('Gosho', 20);
junior.work(); // simple task
junior.work(); // simple task
junior.work(); // simple task
var seinior = new employee_2.Seinior("Peter", 50);
seinior.work();
seinior.work();
seinior.work();
var manager = new employee_1.Manager('John', 30);
manager.work();
manager.work();
manager.work();

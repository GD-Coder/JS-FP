'use strict'

const fs = require('fs')

class Employee {
  constructor (employee) {
    this.name = employee.name
    this.title = employee.title
    this.salary = employee.salary
  }
  promote (title, salary) {
    this.title = title
    this.salary = salary
  }
}
Employee.parseFromFilePath = function (filePath) {
  return new Employee(JSON.parse(fs.readFileSync(filePath)))
}
module.exports = {
  Employee
}

'use strict'

const fs = require('fs')

class Employee {
  constructor (emp) {
    this.name = emp.name
    this.title = emp.title
    this.salary = emp.salary
  }
  promote (title, salary) {
    this.title = title
    this.salary = salary
  }
}
Employee.parseFromFilePath = function (filePath) {
  let emp = new Employee(JSON.parse(fs.readFileSync(filePath, 'utf-8')))
  return emp
}
module.exports = {
  Employee
}

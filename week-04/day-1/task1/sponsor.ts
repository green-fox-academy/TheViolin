import { Person } from "./person";

'use strict'

class Sponsor extends Person{
  protected company: string;
  protected hiredStudents: number;

  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', company: string = 'Google') {
    super (name, age, gender);
    this.company = company;
    this.hiredStudents = 0;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name} a ${this.age} old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`)
  }
  hire() {
    return this.hiredStudents++;
  }
  getGoal() {
    console.log('Hire brilliant junior software developers.')
  }
}

export { Sponsor }
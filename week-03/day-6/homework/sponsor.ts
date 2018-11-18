'use strict'

class Sponsor {

  name: string;
  age: number;
  gender: string;
  company: string;
  hiredStudents: number;

  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', company: string = 'Google') {

    this.name = name;
    this.age = age;
    this.gender = gender;
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
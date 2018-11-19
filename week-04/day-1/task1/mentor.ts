import { Person } from "./person";

'use strict'

class Mentor extends Person {
  protected level: string;

  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', level: string = 'intermediate') {
    super (name, age, gender);
    this.level = level;
  }

  getGoal() {
    console.log('Educate brilliant junior software developers.')
  }
  introduce() {
    console.log((`Hi, I'm ${this.name} a ${this.age} old ${this.gender} ${this.level} mentor.`))
  }
}

export { Mentor };
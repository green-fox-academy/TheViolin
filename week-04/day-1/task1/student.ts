import { Person } from "./person";

'use strict'

class Student extends Person{
  protected previousOrganization: string;
  protected skippedDays: number;

  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', previousOrganization: string = 'The School of Life', skippedDays: number = 0) {
    super (name,age,gender)
    this.previousOrganization = previousOrganization;
    this.skippedDays = skippedDays;
  }

  getGoal() {
    console.log('Be a junior software developer.')
  }
  introduce() {
    console.log(`Hi, I\'m ${this.name} a ${this.age} old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`)
  }
  skipDays(numberOfDays: number) {
    return this.skippedDays += numberOfDays;
  }
}

export { Student };

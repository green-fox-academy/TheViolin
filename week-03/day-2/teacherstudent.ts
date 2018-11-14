// Create Student and Teacher classes
// Student
// learn()
// question(teacher) -> calls the teachers answer method
// Teacher
// teach(student) -> calls the students learn method
// answer()

class Student {
  name: string;
  infos: any;

  constructor(name: string) {
    this.name = name;
  }
  learn() {
    this.infos ++
  }
  questionTeacher(teacherName: Teacher, question: string): void {
    console.log(teacherName.answer());
  }
}

class Teacher {
  name: string;
  infos: string;

  constructor(name: string, infos: string) {
    this.name = name;
    this.infos = infos;
  }

  teach(studentName: Student): void {
    studentName.learn();
  }

  answer(): string {
    return 'I give you a hint';
  }
}


let kutya = new Student('Bodri');
let macska = new Student('Cirmi');
let oktopusz = new Teacher('Nene', 'random bs');
let kacsa = new Teacher('Donald', 'random bs v1.1');

kutya.questionTeacher(kacsa, 'What is this?');
console.log(kacsa.infos);
oktopusz.teach(macska);
console.log(oktopusz.infos);
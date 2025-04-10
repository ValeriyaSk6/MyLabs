import {Student} from './Student'

export class StudentList {
    listOfStudents: Student[] = [];
    addStudent(s: Student){
        this.listOfStudents.push(s);
    }
}
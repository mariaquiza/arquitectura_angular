import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: any;
  currentStudent = null;
  currentIndex = -1;
  name = '';

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.retrieveStudents();
  }

  retrieveStudents(): void {
    this.studentService.getAll().subscribe(
      data => {
        this.students = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  refreshList(): void {
    this.retrieveStudents();
    this.currentStudent = null;
    this.currentIndex = -1;
  }

  setActiveStudent(student, index): void {
    this.currentStudent = student;
    this.currentIndex = index;
  }

  removeAllStudents(): void {
    this.studentService.deleteAll().subscribe(
      response => {
        console.log(response);
        this.retrieveStudents();
      },
      error => {
        console.log(error);
      }
    );
  }

  searchName(): void {
    this.studentService.findByNameContaining(this.name).subscribe(
      data => {
        this.students = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

}

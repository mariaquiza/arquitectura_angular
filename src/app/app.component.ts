import { Component } from '@angular/core';
import { StudentService } from './services/student.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StudentClient';

  constructor(private studentService: StudentService){}
}

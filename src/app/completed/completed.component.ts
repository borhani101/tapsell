import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/services/task-service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {

  tasks = [];

  constructor(private _taskService: TaskService) { }

  DeleteTask(id) {
    this._taskService.DeleteTask(id).subscribe(data => {
      this.GetCompletedTasks();
    });
  }

  GetCompletedTasks() {
    this._taskService.GetCompletedTasks().subscribe(data => this.tasks = data);
  }

  ngOnInit() {
    this.GetCompletedTasks();
  }

}

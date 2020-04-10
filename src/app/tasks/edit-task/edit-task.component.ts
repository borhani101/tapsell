import { Component, OnInit } from '@angular/core';
import { ITasks } from 'src/models/ITasks';
import { TaskService } from 'src/services/task-service';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';


@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  mainList=null;
  taskId = "";
  tasks = [];

  task: ITasks = null;

  constructor(private _location: Location,private route: ActivatedRoute, private _taskService: TaskService) {
    this.route.queryParamMap.subscribe(params => (this.taskId = params.get("id")));
  }

  EditTask() {
    this._taskService.EditTask(this.taskId, this.task).subscribe(data => this.tasks.push(data));
    this._location.back();
  }

  ngOnInit() {
    this._taskService.GetById(this.taskId).subscribe(data => this.task = data);
  }

}

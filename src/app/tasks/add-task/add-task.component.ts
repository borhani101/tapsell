import { Component, OnInit } from '@angular/core';
import { ITasks } from 'src/models/ITasks';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/services/task-service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  returnUrl: string;
  listId = "";
  tasks = [];

  task: ITasks = {
    _id: null,
    title: "",
    description: "",
    done: false,
    date: new Date(),
    list: null
  }

  constructor(private _location: Location, private route: ActivatedRoute, private _taskService: TaskService) {
    this.route.queryParamMap.subscribe(params => (this.listId = params.get("id")));
  }

  AddTask() {
    this.task.list = this.listId;
    this._taskService.AddTask(this.task).subscribe(data => {
      this.tasks.push(data);
      this._location.back();
    });
  }

  ngOnInit() {
  }

}

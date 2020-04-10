import { Component, OnInit } from "@angular/core";
import { TaskService } from 'src/services/task-service';
import { ListService } from 'src/services/list-service';
import { ITasks } from 'src/models/ITasks';


@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private _taskService: TaskService, private _listService: ListService) { }

  mainList = null;
  tasks = [];
  doneTask: ITasks = null;
  todayDate = new Date();

  ngOnInit() {
    this.GetMainTasks();
  }

  GetMainTasks() {
    this._listService.GetMainList().subscribe(data => {
      this.mainList = data;
      this._taskService.GetTasksByListId(this.mainList._id).subscribe(data => this.tasks = data);
    });
  }

  DeleteTask(id) {
    this._taskService.DeleteTask(id).subscribe(data => {
      this.GetMainTasks();
    });
  }

  DoneTask(id) {
    this._taskService.GetById(id).subscribe(data => {
      this.doneTask = data;
      this.doneTask.done = !this.doneTask.done;
      this._taskService.EditTask(id, this.doneTask).subscribe(data => {
        this.GetMainTasks();
      });
    })
  }
}

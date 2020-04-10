import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TaskService } from 'src/services/task-service';
import { ListService } from 'src/services/list-service';
import { ITasks } from 'src/models/ITasks';

@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.css"]
})
export class TasksComponent implements OnInit {
  taskId = null;

  constructor(private route: ActivatedRoute, private _taskService: TaskService, private _listService: ListService) {
    this.route.queryParamMap.subscribe(params => (this.taskId = params.get("id")));
  }
  
  selectedList = null;
  tasks = [];
  selectedTask: ITasks = null;
  mainList = null;

  GetTasksForSelectedList() {
    this._listService.GetListById(this.taskId).subscribe(data => {
      this.selectedList = data;
      this._taskService.GetTasksByListId(this.selectedList._id).subscribe(data => this.tasks = data);
    });
  }

  DeleteTask(id) {
    this._taskService.DeleteTask(id).subscribe(data => {
      this.GetTasksForSelectedList();
    });
  }

  DoneTask(id) {
    this._taskService.GetById(id).subscribe(data => {
      this.selectedTask = data;
      this.selectedTask.done = !this.selectedTask.done;
      this._taskService.EditTask(id, this.selectedTask).subscribe(data => {
        this.GetTasksForSelectedList();
      });
    });
  }

  AddToDailyList(id) {
    this._taskService.GetById(id).subscribe(data => {
      this.selectedTask = data;
      this._listService.GetMainList().subscribe(data => {
        this.mainList = data;
        this.selectedTask.list = this.mainList._id;
        this._taskService.EditTask(id, this.selectedTask).subscribe(data => {
          this.GetTasksForSelectedList();
        });

      });
    });
  }

  ngOnInit() {
    this.GetTasksForSelectedList();
    
  }

}

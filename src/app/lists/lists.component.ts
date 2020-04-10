import { Component, OnInit } from "@angular/core";
import { ListService } from 'src/services/list-service';

@Component({
  selector: "app-lists",
  templateUrl: "./lists.component.html",
  styleUrls: ["./lists.component.css"]
})
export class ListsComponent implements OnInit {
  constructor(private _listService: ListService) { }

  lists = [];
  mainList = null;

  DeleteList(id) {
    this._listService.DeleteList(id).subscribe(data => {
      this.GetLists();
    });
  }

  ngOnInit() {
    this._listService.GetMainList().subscribe(data => this.mainList = data);

    this.GetLists();
  }

  GetLists = () => {
    this._listService.GetLists().subscribe(data => {
      this.lists = data.filter(x => x._id != this.mainList._id);
    });
  }

}

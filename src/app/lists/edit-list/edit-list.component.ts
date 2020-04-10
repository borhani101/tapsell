import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListService } from 'src/services/list-service';
import { ILists } from 'src/models/ILists';
import {Location} from '@angular/common';


@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.css']
})
export class EditListComponent implements OnInit {
  list: ILists = null;
  lists=[];

  EditList(){
     this._listService.EditList(this.listId, this.list).subscribe(data => this.lists.push(data));
     this._location.back();
  }

  listId = null;
  constructor(private _location:Location,private route: ActivatedRoute, private _listService: ListService) {
    this.route.queryParamMap.subscribe(params => (this.listId = params.get("id")));
  }

  ngOnInit() {
    this._listService.GetListById(this.listId).subscribe(data => this.list = data);
  }

}

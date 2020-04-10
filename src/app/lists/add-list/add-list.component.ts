import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListService } from 'src/services/list-service';
import { ILists } from 'src/models/ILists';
import {Location} from '@angular/common';


@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {
  lists=[];

  list: ILists = {
    _id: null,
    title: "",
    date: new Date(),
    isMain: false
  };

  AddList() {
    this._listService.AddList(this.list).subscribe(data => this.lists.push(data));
    this._location.back();
  }

  constructor(private _location: Location,private _listService: ListService) { }
 

  ngOnInit() {
  }

}

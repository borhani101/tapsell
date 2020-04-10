import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { ILists } from '../models/ILists';
import { Observable } from 'rxjs';
import { config } from 'src/utility/config';

@Injectable({
    providedIn: 'root'
})

export class ListService {

    GetLists(): Observable<ILists[]> {
        return this.http.get<ILists[]>(config.ApiUrl + "/lists");
    }

    GetListById(id): Observable<ILists> {
        return this.http.get<ILists>(config.ApiUrl + "/lists/" + id);
    }

    GetMainList(): Observable<ILists> {
        return this.http.get<ILists>(config.ApiUrl + "/mainList");
    }

    DeleteList(id): Observable<{}> {
        return this.http.delete(config.ApiUrl + "/lists/" + id);
    }

    AddList(list): Observable<ILists> {
        return this.http.post<ILists>(config.ApiUrl + "/lists", list);
    }

    EditList(id, list): Observable<ILists> {
        return this.http.put<ILists>(config.ApiUrl + "/lists/" + id, list);
    }

    constructor(private http: HttpClient) { }
}
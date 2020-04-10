import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { ITasks } from '../models/ITasks';
import { Observable, from } from 'rxjs';
import { config } from '../utility/config';
import { ILists } from 'src/models/ILists';

@Injectable({
    providedIn: 'root'
})

export class TaskService {

    GetTasks(): Observable<ITasks[]> {
        return this.http.get<ITasks[]>(config.ApiUrl + "/tasks");
    }

    GetById(id): Observable<ITasks> {
        return this.http.get<ITasks>(config.ApiUrl + "/tasks/" + id);
    }

    GetTasksByListId(listId): Observable<ITasks[]> {
        return this.http.get<ITasks[]>(config.ApiUrl + "/tasks/query/" + listId);
    }

    DeleteTask(id): Observable<{}> {
        return this.http.delete(config.ApiUrl + "/tasks/" + id);
    }

    AddTask(task): Observable<ITasks> {
        return this.http.post<ITasks>(config.ApiUrl + "/tasks", task);
    }

    EditTask(id, task): Observable<ITasks> {
        return this.http.put<ITasks>(config.ApiUrl + "/tasks/" + id, task);
    }
    GetCompletedTasks(): Observable<ITasks[]> {
        return this.http.get<ITasks[]>(config.ApiUrl + "/compeleted");
    }

    constructor(private http: HttpClient) { }
}
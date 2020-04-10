import { HomeComponent } from './home/home.component';

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListsComponent } from './lists/lists.component';
import { TasksComponent } from './tasks/tasks.component';
import { AddTaskComponent } from './tasks/add-task/add-task.component';
import { EditTaskComponent } from './tasks/edit-task/edit-task.component';
import { AddListComponent } from './lists/add-list/add-list.component';
import { EditListComponent } from './lists/edit-list/edit-list.component';
import { CompletedComponent } from './completed/completed.component';
import { LayoutComponent } from './layout/layout.component';



const routes: Routes = [

  
  { 
    path: '', 
    component: LayoutComponent,
    children: [
      {path: '', component : HomeComponent},
      {path: 'lists', component :ListsComponent },
      {path:'tasks',component:TasksComponent },
      {path:'add-task',component:AddTaskComponent},
      {path:'edit-task',component:EditTaskComponent},
      {path:'add-list',component:AddListComponent},
      {path:'edit-list',component:EditListComponent},
      {path:'completed-list',component:CompletedComponent},
      {path: '**', component: HomeComponent }
    ]
  },

  
];







@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: 'tasks', component: TaskListComponent },
    { path: 'tasks/create', component: TaskCreateComponent },
    { path: 'tasks/edit/:id', component: TaskEditComponent },
    { path: '', redirectTo: '/tasks', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
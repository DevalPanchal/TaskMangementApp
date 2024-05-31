import { Component } from '@angular/core';
import { Task, TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-create',
  standalone: true,
  imports: [],
  templateUrl: './task-create.component.html',
  styleUrl: './task-create.component.css'
})
export class TaskCreateComponent {
  task: Task = {id: 0, title: '', description: '', completed: false };

  constructor(private taskService: TaskService, private router: Router) {}

  createTask(): void {
    this.taskService.createTask(this.task).subscribe(() => this.router.navigate(['/tasks']));
  }
}

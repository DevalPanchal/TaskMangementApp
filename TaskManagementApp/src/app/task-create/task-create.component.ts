import { Component } from '@angular/core';
import { Task, TaskService } from '../task.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatToolbar } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-task-create',
  standalone: true,
  imports: [CommonModule, FormsModule, MatToolbar, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule],
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent {
  task: Task = { id: 0, title: '', description: '', completed: false };

  constructor(private taskService: TaskService, private router: Router) {}

  createTask(): void {
    this.taskService.createTask(this.task).subscribe(() => this.router.navigate(['/tasks']));
  }
}

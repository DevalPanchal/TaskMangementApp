import { Component, OnInit } from '@angular/core';
import { Task, TaskService } from '../task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-task-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, MatToolbar, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule, MatCheckboxModule],
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {
  task: Task = { id: 0, title: '', description: '', completed: false };

  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.taskService.getTask(id).subscribe(task => this.task = task);
  }

  updateTask(): void {
    this.taskService.updateTask(this.task.id, this.task).subscribe(() => this.router.navigate(['/tasks']));
  }
}

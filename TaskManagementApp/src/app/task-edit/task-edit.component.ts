import { Component } from '@angular/core';
import { Task, TaskService } from '../task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-edit',
  standalone: true,
  imports: [],
  templateUrl: './task-edit.component.html',
  styleUrl: './task-edit.component.css'
})
export class TaskEditComponent {
  task: Task = { id: 0, title: '', description: '', completed: false };

  constructor(private taskServices: TaskService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.taskServices.getTask(id).subscribe(task => this.task = task);
  }

  updateTask(): void {
    this.taskServices.updateTask(this.task.id, this.task).subscribe(() => this.router.navigate(['/tasks']));
  }
}

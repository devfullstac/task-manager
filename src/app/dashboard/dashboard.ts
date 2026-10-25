import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskCardComponent } from '../task-card/task-card'; // تعديل المسار هنا
import { Task } from './task.model'; // تأكد أن ملف task.model.ts موجود داخل مجلد dashboard

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule, TaskCardComponent],
  templateUrl: './dashboard.html', // قمنا بحذف كلمة .component
  styleUrl: './dashboard.css'       // قمنا بحذف كلمة .component

})
export class DashboardComponent {
  tasks: Task[] = [
    { id: 1, title: 'Learn @Input' },
    { id: 2, title: 'Master @Output' }
  ];

  newTaskTitle: string = '';

  addTask(): void {
    if (this.newTaskTitle.trim() !== '') {
      const newTask: Task = {
        id: Date.now(),
        title: this.newTaskTitle
      };
      this.tasks.push(newTask);
      this.newTaskTitle = '';
    }
  }

  removeTask(taskId: number): void {
    this.tasks = this.tasks.filter(t => t.id !== taskId);
  }
}

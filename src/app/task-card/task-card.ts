import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../dashboard/task.model';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [],
  templateUrl: './task-card.html',
  styleUrl: './task-card.css'

})
export class TaskCardComponent {
  @Input() task!: Task;
  @Output() deleteRequest = new EventEmitter<number>();

  onDelete(): void {
    this.deleteRequest.emit(this.task.id);
  }
}

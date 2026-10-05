import {Injectable, signal} from "@angular/core";
import {Task, TaskStatus} from "./task.model";

// @Injectable({
//   providedIn: 'root'
// })
export class TasksService {
  private tasks = signal<Task[]>([])

  public allTasks = this.tasks.asReadonly();

  public addTask(taskData: {title: string, description: string}) {
    const newTask: Task = {
      ...taskData,
      id: Math.random().toString(),
      status: 'OPEN'
    }
    this.tasks.update((oldTasks) => [...oldTasks, newTask])
  }

  public updateTaskStatus(taskId: string, newStatus: TaskStatus) {
    this.tasks.update((oldTasks) =>
      oldTasks.map((task) =>
        taskId === task.id? {...task, status: newStatus } : task)
    )
  }
}

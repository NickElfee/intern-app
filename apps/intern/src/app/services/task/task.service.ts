import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { GlobalState } from '../../+state/global.reducers';
import { filter, switchMapTo, take } from 'rxjs/operators';
import { TaskDto, ResultDto } from '@intern/data';
import { Observable } from 'rxjs/internal/Observable';
import { getAllTasks } from '../../+state/task/selectors/task.selectors';
import { AddTaskList } from '../../+state/task/actions/task.actions';
import { BackendService } from '../../shared/backend/backend.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private store$: Store<GlobalState>,
    private backendService: BackendService,
  ) { }

  public getAllTasks$(): Observable<TaskDto[]> {
    const checkStoreTasks$: Observable<TaskDto[]> = this.store$.select(getAllTasks);

    checkStoreTasks$.pipe(
      take(1),
      filter((task: TaskDto[]) => !!task),
      switchMapTo(this.backendService.get$<TaskDto[]>('/task', {}))
    ).subscribe((taskDtoList: TaskDto[]) => this.store$.dispatch(new AddTaskList(taskDtoList)));

    return checkStoreTasks$;
  }

  public getTaskResults$(taskId: string): Observable<ResultDto[]> {
    return this.backendService.get$<ResultDto[]>(`/task/${taskId}/results`);
  }
}

import { IsEnum, IsIn } from 'class-validator';
import { TaskStatus } from '../task.model';

export class UpdateTaskDto {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}

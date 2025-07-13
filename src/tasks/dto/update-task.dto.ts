import { IsString, IsIn } from 'class-validator';

export class UpdateTaskDto {
  @IsString()
  title: string;

  @IsIn(['pending', 'done'])
  status: 'pending' | 'done';
}

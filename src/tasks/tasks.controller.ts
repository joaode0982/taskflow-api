/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Body,
  Controller,
  Post,
  UseGuards,
  Request,
  Get,
  Req,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('tasks')
@ApiBearerAuth()
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() dto: CreateTaskDto, @Request() req: any) {
    const userId = req.user.sub;
    console.log('UserId no controller:', userId);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return this.tasksService.create(userId, dto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(@Req() req: { user: { id: string } }) {
    console.log('usuario autenticado', req.user);
    return this.tasksService.findAll(req.user.id);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  update(
    @Param('id') id: string,
    @Req() req: { user: { id: string } },
    @Body() data: UpdateTaskDto,
  ) {
    return this.tasksService.update(id, req.user.id, data);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string, @Req() req: { user: { id: string } }) {
    return this.tasksService.remove(id, req.user.id);
  }
}

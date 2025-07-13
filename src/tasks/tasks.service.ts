import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/users/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) {}

  async create(userId: string, dto: CreateTaskDto) {
    return this.prisma.task.create({
      data: {
        title: dto.title,
        description: dto.description,
        user: { connect: { id: userId } },
      },
    });
  }

  async findAll(userId: string) {
    return this.prisma.task.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async update(id: string, userId: string, data: UpdateTaskDto) {
    const task = await this.prisma.task.findFirst({
      where: { id, userId },
    });

    if (!task) {
      throw new NotFoundException('Task não encontrada.');
    }

    return this.prisma.task.update({
      where: { id },
      data,
    });
  }

  async remove(id: string, userId: string) {
    const task = await this.prisma.task.findFirst({
      where: { id, userId },
    });

    if (!task) {
      throw new NotFoundException('Task não encontrada.');
    }

    return this.prisma.task.delete({ where: { id } });
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserDto } from './dto';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async getUsers(): Promise<UserDto[]> {
    return this.prismaService.user.findMany({
      select: { id: true, username: true, createdAt: true },
    });
  }
}

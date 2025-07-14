import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from 'src/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {
    console.log('UsersService');
  }

  getUserById(id: string) {
    return this.usersRepository.findOne({
      where: {
        id,
      },
    });
  }

  createUser(body: CreateUserDto) {
    const user = this.usersRepository.create(body);
    return this.usersRepository.save(user);
  }

  async updateUser(id: string, body: UpdateUserDto) {
    const user = await this.usersRepository.findOne({
      where: {
        id,
      },
    });
    if (!user) {
      throw new Error('User not found');
    }
    return this.usersRepository.save({
      ...user,
      ...body,
    });
  }

  async deleteUser(id: string) {
    const user = await this.usersRepository.findOne({
      where: {
        id,
      },
    });
    if (!user) {
      throw new Error('User not found');
    }
    return this.usersRepository.remove(user);
  }
}

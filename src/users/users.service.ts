import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor() {
    console.log('UsersService');
  }

  getUserById(id: string) {
    return id;
  }

  createUser(body: CreateUserDto) {
    return body;
  }

  updateUser(id: string, body: UpdateUserDto) {
    return {
      id,
      ...body,
    };
  }

  deleteUser(id: string) {
    return {
      id,
    };
  }
}

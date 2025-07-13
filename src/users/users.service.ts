import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor() {
    console.log('UsersService');
  }

  getUsers() {
    return 'user';
  }

  getUserById(id: string) {
    return id;
  }
}

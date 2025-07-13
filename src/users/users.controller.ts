import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {
    console.log('UsersController');
  }

  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @Get('id')
  getUserById(@Param('id') id: string) {
    return this.usersService.getUserById(id);
  }
}

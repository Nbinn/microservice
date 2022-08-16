import { Body, Controller, Get, Post } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { User } from './dto/user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @Post('/')
  // createUser(@Body() user: User) {
  //   this.appService.createUser(user)
  // }
  @Post('/register')
  register(@Body() data: User) {
    return this.appService.register(data);
  }

  @Get('analytics')
  getAnalytics() {
    return this.appService.getAnalytics();
  }
}

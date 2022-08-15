import { Controller, Get, Post } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { UserEvent } from './user.event';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('user_created')
  HandleUser(data: UserEvent) {
    this.appService.HandleUser(data)
  }

  @MessagePattern({ cmd: 'get_analytics' })
  getAnalytics() {
    return this.appService.getAnalytics();
  }

}

import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { User } from './dto/user.dto';
import { RegisterService } from './register/register.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly registerService: RegisterService,
  ) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('user_created')
  HandleUser(data: User) {
    this.appService.HandleUser(data)
  }
  @EventPattern('register')
  register(data: User) {
    this.registerService.register(data)
  }
}

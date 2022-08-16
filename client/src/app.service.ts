import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { User } from './dto/user.dto';
import { UserEvent } from './user.event';


@Injectable()
export class AppService {
  private readonly users: any[] = []

  constructor(
    @Inject('CLIENT') private readonly client: ClientProxy,
    @Inject('ANALYTICS') private readonly analyticsClient: ClientProxy
  ) { }

  getHello(): string {
    return 'Hello World!';
  }

  // createUser(user: User) {
  //   this.client.emit('user_created', new UserEvent(user))
  //   this.analyticsClient.emit('user_created', new UserEvent(user.email))
  // }

  getAnalytics() {
    return this.analyticsClient.send({ cmd: 'get_analytics' }, {});
  }

  register(data: User) {
    this.users.push(data)
    console.log('data :>> ', data);
    this.client.emit('register', data)
  }
}



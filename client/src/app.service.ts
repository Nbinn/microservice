import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { User } from './user.dto';
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

  createUser(user: User) {
    this.users.push(user)
    this.client.emit('user_created', new UserEvent(user.email))
    this.analyticsClient.emit('user_created', new UserEvent(user.email))
  }

  getAnalytics() {
    return this.analyticsClient.send({ cmd: 'get_analytics' }, {});
  }
}

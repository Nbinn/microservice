import { Injectable } from '@nestjs/common';
import { UserEvent } from './user.event';

@Injectable()
export class AppService {

  private readonly analytics: any[] = []

  getHello(): string {
    return 'Hello World!';
  }
  HandleUser(data: UserEvent) {
    console.log('analytics', data)
    this.analytics.push({
      email: data.email,
      timestamp: new Date(),
      content: "content"
    })
  }
  getAnalytics() {
    return this.analytics;
  }
}

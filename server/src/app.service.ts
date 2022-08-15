import { Injectable } from '@nestjs/common';
import { UserEvent } from './user.event';
import { MailService } from './Mail/mail.service';
@Injectable()
export class AppService {

  constructor(private readonly mailService: MailService) { }

  getHello(): string {
    return 'Hello World!';
  }

  HandleUser(data: UserEvent) {
    console.log('UserCreated', data)
    this.mailService.sendUserConfirmation(data)
  }


}

import { Injectable } from '@nestjs/common';
import { User } from './dto/user.dto';
import { MailService } from './mail/mail.service';

@Injectable()
export class AppService {

  constructor(private readonly mailService: MailService) { }

  getHello(): string {
    return 'Hello World!';
  }

  HandleUser(data: User) {
    const verifyToken = Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, '')
      .substr(0, 5)
      .toUpperCase();
    console.log('verifyToken :>> ', verifyToken);
    // this.mailService.sendUserConfirmation(data, verifyToken)
  }


}

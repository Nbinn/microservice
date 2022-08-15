import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from "@nestjs/common";
import { UserEvent } from "src/user.event";

@Injectable()
export class MailService {
    constructor(private mailerService: MailerService) { }

    async sendUserConfirmation(user: UserEvent) {
        await this.mailerService.sendMail({

            to: user.email,
            subject: 'Welcome to Metabase! Confirm your Email',
            template: `${process.cwd()}/src/Mail/templates/test`,
            context: {
                name: user.email,
            },
        });
    }

}
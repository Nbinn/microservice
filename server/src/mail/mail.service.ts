import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from "@nestjs/common";
import { SentMessageInfo } from 'nodemailer';
import { User } from "src/dto/user.dto";
import { UserRegister } from "src/dto/user.register.dto";

@Injectable()
export class MailService {

    constructor(private mailerService: MailerService) { }

    async sendUserConfirmation(user: UserRegister, token: string) {
        const url = `${process.env.MAIL_VERIFY_HOST}/v0/auth/verify/${user.id}-${token.toLowerCase()}?redirectTo=${process.env.MAIL_VERIFY_CALLBACK
            }/login`;
        await this.mailerService.sendMail({
            to: user.email,
            subject: 'Welcome to Metabase! Confirm your Email',
            template: `${process.cwd()}/src/mail/templates/confirmation`,
            context: {
                name: user.username,
                url,
            },
        });
    }

    async sendPlayerVerify(player, token: string) {
        await this.mailerService.sendMail({
            to: player.email,
            subject: 'Welcome to Metabase! Confirm your Email',
            template: `${process.cwd()}/src/mail/templates/player-verify-email`,
            context: {
                name: player.name,
                token,
            },
        });
    }

    async sendResetPasswordMail(user: User, resetPasswordToken: string) {
        const url = `${process.env.MAIL_VERIFY_CALLBACK}/reset?token=${resetPasswordToken}`;
        await this.mailerService.sendMail({
            to: user.email,
            subject: 'Reset your Metabase Account',
            template: `${process.cwd()}/src/mail/templates/reset-password`,
            context: {
                name: user.username,
                url,
            },
        });
    }

    async sendMailOtp(user: UserRegister, otp: string): Promise<SentMessageInfo> {
        return await this.mailerService.sendMail({
            to: user.email,
            subject: 'Metabase Account Verification',
            template: `${process.cwd()}/src/mail/templates/otp-verification`,
            context: {
                otp,
            },
        });
    }


}
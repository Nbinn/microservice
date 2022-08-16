import { Injectable } from "@nestjs/common";
import { User } from "src/dto/user.dto";
import { UserRegister } from "src/dto/user.register.dto";
import { MailService } from "src/mail/mail.service";
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class RegisterService {

    constructor(private readonly mailService: MailService) { }

    register(data: User) {
        const id = uuidv4()
        const key = Math.random().toString(36).substring(0, 10);
        const { username, email } = data;
        const user: UserRegister = { email, username, key, id }

        const verifyToken = Math.random()
            .toString(36)
            .replace(/[^a-z]+/g, '')
            .substr(0, 5)
            .toUpperCase();

        this.mailService.sendUserConfirmation(user, verifyToken)

    }
}


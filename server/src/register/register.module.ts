import { Module } from "@nestjs/common";
import { MailModule } from "src/mail/mail.module";
import { RegisterController } from "./register.controller";
import { RegisterService } from "./register.service";

@Module({
    imports: [MailModule],
    exports: [RegisterService],
    providers: [RegisterService]
})
export class RegisterModule { }
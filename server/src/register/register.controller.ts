import { Controller, Post } from "@nestjs/common";
import { EventPattern } from "@nestjs/microservices";
import { User } from "src/dto/user.dto";
import { RegisterService } from "./register.service";

@Controller()
export class RegisterController {
    [x: string]: any;
    constructor(private readonly registerService: RegisterService) { }


}
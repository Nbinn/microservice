import { User } from "./dto/user.dto";

export class UserEvent {
    constructor(public readonly user: User) { }
}
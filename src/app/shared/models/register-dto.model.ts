export class RegisterDto {
    UserName?:string;
    PhoneNumber?:string;
    Email?:string;
    Password?:string;
    DateOfBirth?:string;

    constructor(init?: Partial<RegisterDto>) {
        Object.assign(this, init);
    }
}

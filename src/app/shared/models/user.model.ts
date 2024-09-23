export class User {
    id?: number;
    userName?: string;
    email?: string;
    phoneNumber?: string;
    passwordHash?: string;

    dateOfBirth?: Date;
    insertedDate?: Date;
    updatedDate?: string;
    updatedBy?: Date;

    constructor(init?: Partial<User>) {
        Object.assign(this, init);
    }
}

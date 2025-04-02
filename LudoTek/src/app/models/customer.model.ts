export class customer {
    id!: number;
    name!: string;
    mail!: string;
    phone!: string;

    constructor(id: number, name: string, mail: string, phone: string){
        this.id = id;
        this.name = name;
        this.mail = mail;
        this.phone = phone;
    }
}
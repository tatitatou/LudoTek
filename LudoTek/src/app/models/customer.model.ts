export class customer {
    customerId!: number;
    name!: string;
    mail!: string;
    phone!: string;

    constructor(id: number, name: string, mail: string, phone: string){
        this.customerId = id;
        this.name = name;
        this.mail = mail;
        this.phone = phone;
    }
}
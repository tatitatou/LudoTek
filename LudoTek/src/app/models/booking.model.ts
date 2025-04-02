export class booking {
    id!: number;
    bookingDate!: Date;
    bookingStatus!: string;
    customerId!: number;
    gameId!: number;

    constructor(id: number, bookingDate: Date, bookingStatus: string, customerId: number, gameId: number){
        this.id = id;
        this.bookingDate = bookingDate;
        this.bookingStatus = bookingStatus;
        this.customerId = customerId;
        this.gameId = gameId;
    }
}
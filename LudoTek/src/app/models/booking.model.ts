export class Booking {
    bookingId!: number;
    bookingDate!: Date;
    bookingStatus!: string;
    updated_at!: Date;
    created_at!: Date;
    customer?: { id: number; name: string, mail: string, phone: string };
    game?: { id: number; title: string };
  
    constructor(
        bookingId: number,
      bookingDate: Date,
      bookingStatus: string,
      ua: Date,
      ca: Date,
      customer?: { id: number; name: string, mail: string, phone: string },
      game?: { id: number; title: string }
    ) {
      this.bookingId = bookingId;
      this.bookingDate = bookingDate;
      this.bookingStatus = bookingStatus;
      this.customer = customer;
      this.game = game;
      this.updated_at = ua;
      this.created_at = ca;
    }
  }
  
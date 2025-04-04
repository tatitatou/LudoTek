export class Booking {
    bookingId!: number;
    bookingDate!: Date;
    bookingStatus!: string;
    customer?: { id: number; name: string, mail: string, phone: string };
    game?: { id: number; title: string };
  
    constructor(
        bookingId: number,
      bookingDate: Date,
      bookingStatus: string,
      customer?: { id: number; name: string, mail: string, phone: string },
      game?: { id: number; title: string }
    ) {
      this.bookingId = bookingId;
      this.bookingDate = bookingDate;
      this.bookingStatus = bookingStatus;
      this.customer = customer;
      this.game = game;
    }
  }
  
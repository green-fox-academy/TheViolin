import { Reservationy } from "./reservationy";

class Reservation implements Reservationy {

  getCodeBooking(): string {
    let letters = "ABCDEFGHIJKMNPQRSTUXYZ123456789";
    let text = "";
    for (var i = 0; i < 8; i++) {
      text += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    return text;
  }
  getDowBooking(): string {
    let week: string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    let randomDay = week[Math.floor(Math.random() * week.length)];
    return randomDay;
  }
}

export { Reservation };
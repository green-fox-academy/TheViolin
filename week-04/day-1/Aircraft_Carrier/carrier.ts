import { Aircraft } from "./aircraft";
import { F16 } from "./f-16";
import { F35 } from "./f-35";

export class Carrier {
  private aircrafts: Aircraft[] = [];
  private storeOfAmmo: number;
  private health: number;

  constructor(storeOfAmmo: number, health: number) {
    this.storeOfAmmo = storeOfAmmo;
    this.health = health;
  }

  add(aircraft: Aircraft): void {
    this.aircrafts.push(aircraft);
  }

  fill(): void {
    if (this.storeOfAmmo === 0) {
      throw 'Carrier is out of ammo';
    } else {
      this.aircrafts.forEach(aircraft => {
        if (aircraft.isPriority() && this.storeOfAmmo > 0) {
          this.storeOfAmmo = aircraft.refill(this.storeOfAmmo);
        }
      });
      this.aircrafts.forEach(aircraft => {
        if (!aircraft.isPriority() && this.storeOfAmmo > 0) {
          this.storeOfAmmo = aircraft.refill(this.storeOfAmmo);
        }
      });
    }
  }

  fight(opponent: Carrier): void {
    this.aircrafts.forEach(aircraft => {
      opponent.health -= aircraft.fight();
    });
  }

  getTotalDamage(): number {
    let damage: number = 0;
    this.aircrafts.forEach(aircraft => {
      damage += aircraft.getAllDamage();
    });
    return damage;
  }

  getStatus(): string {
    let status = `HP: ${this.health}, Aircraft count: ${this.aircrafts.length}, Ammo Storage: ${this.storeOfAmmo}, Total damage: ${this.getTotalDamage()}
    Aircrafts:`;

    this.aircrafts.forEach(aircraft => {
      status += `\r\n${aircraft.getStatus()}`;
    });
    return this.health >= 0 ? status : 'It\s dead Jim :(';
  }
}
let USS_MACSKA = new Carrier(200, 200);
let USS_KUTYA = new Carrier(500, 200);

for (let i = 0; i < 5; i++) {
  i % 2 === 0 ? USS_MACSKA.add(new F16()) : USS_MACSKA.add(new F35());
}
console.log(USS_MACSKA.getStatus());
USS_MACSKA.fight(USS_KUTYA);
console.log(USS_KUTYA.getStatus());
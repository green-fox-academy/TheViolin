'use strict'

export abstract class Aircraft {
  protected maxAmmo: number;
  protected baseDamage: number;
  protected currentAmmo: number = 6;

  constructor(maxAmmo: number, baseDamage: number) {
    this.maxAmmo = maxAmmo;
    this.baseDamage = baseDamage;
  }
  
  fight(): number {
    const damage: number = this.baseDamage * this.currentAmmo;
    this.currentAmmo = 0;
    return damage;

  }

  refill(ammoToFill: number): number {
    let remainingAmmo: number = 0;
    if (ammoToFill + this.currentAmmo > this.maxAmmo) {
      remainingAmmo = ammoToFill - (this.maxAmmo - this.currentAmmo);
      this.currentAmmo = this.maxAmmo;
    } else {
      this.currentAmmo += ammoToFill; 
    }
    return remainingAmmo;
  }

  getType(): string {

    return this.constructor.name;

  }

  getAllDamage(): number {
    return this.baseDamage * this.currentAmmo;
  }

  getStatus(): string {

    return `Type: ${this.getType()}, Ammo: ${this.currentAmmo}, Base Damage: ${this.baseDamage}, All Damage: ${this.getAllDamage()}`;

  }

  isPriority(): boolean {
    return this.getType() === 'F35';
  }
}

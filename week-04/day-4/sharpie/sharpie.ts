class Sharpie {

  color: string;
  width: number;
  inkAmount: number;

  constructor (color: string, width: number, inkAmount: number=100){
    this.color = color;
    this.width = width;
    this.inkAmount =inkAmount;
  }
  canUse(): number {
    return this.inkAmount -= 10;
}
}
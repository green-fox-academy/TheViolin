// We have a number of bunnies and each bunny has two big floppy ears.
// We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).

export{ };

function AllearsNumber(bunnies: number): number {
  if (bunnies < 1) { 
    return 0;
  }
  else {
    return 2+AllearsNumber(bunnies-1);
  }
}
console.log (AllearsNumber(10));
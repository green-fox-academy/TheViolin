abstract class Instrument {

  constructor(protected name: string) {
    this.name = name;
  }
  abstract play(): void;
}

export { Instrument }

const CROPS = {
  bumpertato: {
    cost: 2,
    maturity: 4,
    yield: 4,
  },
  learnip: {
    cost: 4,
    maturity: 6,
    yield: 6,
  },
  cobbob: {
    cost: 6,
    maturity: 8,
    yield: 8,
  },
  pupkin: {
    cost: 8,
    maturity: 10,
    yield: 10,
  },
  drawberry: {
    cost: 10,
    maturity: 12,
    yield: 12,
  },
};

export default class Crop {
  constructor(type) {
    if (type && type in CROPS) {
      this.name = `${type[0].toUpperCase}${type.slice(1)}`;
      this.cost = CROPS[type].cost;
      this.maturity = CROPS[type].maturity;
      this.yield = CROPS[type].yield;
    } else {
      this.name = 'empty';
      this.cost = this.maturity = this.yield = undefined;
    }
  }
}

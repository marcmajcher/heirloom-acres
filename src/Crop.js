const CROPS = {
  bumpertato: {
    id: 1,
    name: 'Bumpertato',
    cost: 2,
    maturity: 4,
    yield: 4,
  },
  learnip: {
    id: 2,
    name: 'Learnip',
    cost: 4,
    maturity: 6,
    yield: 6,
  },
  cobbob: {
    id: 3,
    name: 'Cobb-ob',
    cost: 6,
    maturity: 8,
    yield: 8,
  },
  pupkin: {
    id: 4,
    name: 'Pupkin',
    cost: 8,
    maturity: 10,
    yield: 10,
  },
  drawberry: {
    id: 5,
    name: 'Drawberry',
    cost: 10,
    maturity: 12,
    yield: 12,
  },
};

export default class Crop {
  constructor(type) {
    if (type && type in CROPS) {
      Object.assign(this, ...CROPS[type]);
    } else {
      this.name = 'empty';
      this.id = this.cost = this.maturity = this.yield = undefined;
    }
  }

  static cropInfo() {
    return CROPS;
  }

  static cropById(id) {
    return Object.values(CROPS).find((e) => (e.id === id));
  }
}

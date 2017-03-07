class Encounter {
  constructor() {
    this.monster = "";
    this.imgpath = app.GetAppPath();
    this.imgs = {
      redgarile: "",
      torglo: ""
    }
  }
  
  get Monster() { return this.monster; }
  
  set Monster(mob) { this.monster = mob; }
  
  DoEncounter(characterLVL) {
    if(characterLVL <= 14) {
      this.EasyEncounter();
    } else if(characterLVL >= 15 && characterLVL <= 24) {
      this.NormalEncounter();
    } else if(characterLVL >= 25) {
      this.HardEncounter();
    }
  }
    
  EasyEncounter() {
    var random = Randoms.MaxMin(2, 1);
    
    if(random === 1) {
      this.monster = new Character("Red Garile", Randoms.MaxMin(10, 7),
        Randoms.MaxMin(3, 1), Randoms.MaxMin(7, 5), this.imgs.redgarile);
    } else if(random === 2) {
      this.monster = new Character("Torglo", Randoms.MaxMin(10, 7),
        Randoms.MaxMin(4, 1), Randoms.MaxMin(8, 6), this.imgs.torglo);
    }
  };
  
  NormalEncounter() {
    var random = Randoms.MaxMin(2, 1);
    
    if(random === 1) {
      this.monster = new Character("Angry Red Garile", Randoms.MaxMin(18, 15),
        Randoms.MaxMin(5, 1), Randoms.MaxMin(9, 7), this.imgs.redgarile);
    } else if(random === 2) {
      this.monster = new Character("Angry Torglo", Randoms.MaxMin(18, 15),
        Randoms.MaxMin(6, 1), Randoms.MaxMin(10, 8), this.imgs.torglo);
    }
  };
  
  HardEncounter() {/***/};
    
}

class XPTable {
  static NextLevelXP(lvl) {
    return lvl * 17;
  }
}

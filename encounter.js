class Encounter {
  constructor() {
    this.monster = "";
  }
  
  get Monster() { return this.monster; }
  
  set Monster(mob) { this.monster = monster; }
  
  DoEncounter(characterLVL) {
    if(characterLVL <= 9) {
      this.EasyEncounter();
    } else if(characterLVL >= 10 && characterLVL <= 19) {
      this.NormalEncounter();
    } else if(characterLVL >= 20) {
      this.HardEncounter();
    }
  }
    
  EasyEncounter() {
    var random = Randoms.MaxMin(2, 1);
    
    if(random === 1) {
      this.monster = new Character("Lynx", Randoms.MaxMin(10, 7),
        Randoms.MaxMin(3, 1), Randoms.MaxMin(7, 5));
    } else if(random === 2) {
      this.monster = new Character("Skeleton", Randoms.MaxMin(10, 7),
        Randoms.MaxMin(4, 1), Randoms.MaxMin(8, 6));
    }
  }
  
  NormalEncounter() {/***/};
  HardEncounter() {/***/};
    
}

class XPTable {
  static LevelXP() {
    var table = new Array(11);
    table[0] = 0;
    table[1] = 10;
    table[2] = 20;
    table[3] = 40;
    table[4] = 70;
    table[5] = 110;
    table[6] = 160;
    table[7] = 220;
    table[8] = 290;
    table[9] = 370;
    table[10] = 460;
    
    return table;
  }
}

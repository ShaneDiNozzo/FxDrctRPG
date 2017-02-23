class Encounter {
  constructor() {
    this.mob = "";
  }
  
  get monster() { return this.mob; }
  
  set monster(mob) { this.mob = mob; }
  
  DoEncounter(characterXP) {
    if(characterXP <= 9) {
      this.EasyEncounter();
    } else if(characterXP >= 10 && characterXP <= 19) {
      this.NormalEncounter();
    } else if(characterXP >= 20) {
      this.HardEncounter();
    }
    showData();
  }
    
  EasyEncounter() {
    var random = Randoms.MaxMin(2, 1);
    
    if(random === 1) {
      this.mob = new Mob("Lynx", Randoms.MaxMin(10, 7), Randoms.MaxMin(3, 0), Randoms.MaxMin(7, 5));
    } else if(random === 2) {
      this.mob = new Mob("Skeleton", Randoms.MaxMin(10, 7), Randoms.MaxMin(4, 0), Randoms.MaxMin(8, 6));
    }
  }
  
  NormalEncounter() {/***/};
  HardEncounter() {/***/};
    
}

class Mob {
  constructor(name, hp, str, xp) {
    this.name = name;
    this.hp = hp;
    this.str = str;
    this.xp = xp;
  }
  
  get Name() { return this.name; }
  get HP()   { return this.hp;   }
  get STR()  { return this.str;  }
  get XP()   { return this.xp;   }
  
  set Name(name) { this.name = name; }
  set HP(hp)     { this.hp   = hp;   }
  set STR(str)   { this.str  = str;  }
  set XP(xp)     { this.xp   = xp;   }
  
  Hit() {
    return Randoms.Half(this.str);
  }
    
  GetHit(characterHit) {
    this.hp = this.hp - characterHit;
  }
}

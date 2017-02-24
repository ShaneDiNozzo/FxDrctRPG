class Encounter {
  constructor() {
    this.mob = "";
  }
  
  get monster() { return this.mob; }
  
  set monster(mob) { this.mob = mob; }
  
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
      this.mob = new Mob("Lynx", Randoms.MaxMin(10, 7), Randoms.MaxMin(3, 1), Randoms.MaxMin(7, 5));
    } else if(random === 2) {
      this.mob = new Mob("Skeleton", Randoms.MaxMin(10, 7), Randoms.MaxMin(4, 1), Randoms.MaxMin(8, 6));
    }
  }
  
  NormalEncounter() {/***/};
  HardEncounter() {/***/};
    
}

class Mob {
  constructor(name, maxhp, str, xp) {
    this.name = name;
    this.maxhp = maxhp;
    this.hp = maxhp;
    this.str = str;
    this.xp = xp;
    this.lastattack = 0;
  }
  
  get Name() { return this.name; }
  get MaxHP() { return this.maxhp; }
  get HP() { return this.hp; }
  get STR() { return this.str; }
  get XP() { return this.xp; }
  get LastAttack() { return this.lastattack; }
  
  set Name(name) { this.name = name; }
  set MaxHP(hp) { this.maxhp = hp; }
  set HP(hp) { this.hp = hp; }
  set STR(str) { this.str = str; }
  set XP(xp) { this.xp = xp; }
  set LastAttack(atk) { this.lastattack = atk; }
  
  Hit() {
    this.lastattack = Randoms.Half(this.str).toFixed(0);
    return this.lastattack;
  }
    
  GetHit(characterHit) {
    this.hp = this.hp - characterHit;
  }
  
  isDied() {
    if(this.hp <= 0) return true;
    return false;
  }
}

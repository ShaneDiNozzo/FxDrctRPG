class Character {
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
    
  GetHit(hit) {
    this.hp = this.hp - hit;
  }
  
  isDied() {
    if(this.hp <= 0) return true;
    return false;
  }
}

class Player extends Character {
  constructor(name) {
    super(name);
    this.name = name;
    this.maxhp = 20;
    this.hp = 20;
    this.str = 3;
    this.xp = 0;
    this.lvl = 1;
    this.requiredxp = XPTable.LevelXP()[this.lvl];
  }
  
  get RequiredXP() { return this.requiredxp; }
  get LVL() { return this.lvl; }
  
  set RequiredXP(xp) { this.requiredxp = xp; }
  set LVL(lvl) { this.lvl = lvl; }
  
  LevelUp() {
    if(this.xp >= this.requiredxp) {
      this.lvl = this.lvl + 1;
      this.maxhp = this.maxhp + 1;
      this.str = this.str + 1;
      this.hp = this.maxhp;
      this.requiredxp = XPTable.LevelXP()[this.lvl];
      return true;
    }
    return false;
  }
}

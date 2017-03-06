class Character {
  constructor(name, maxhp, str, xp, img) {
    this.name = name;
    this.maxhp = maxhp;
    this.hp = maxhp;
    this.str = str;
    this.xp = xp;
    this.lastattack = 0;
    this.img = img;
  }
  
  get Name() { return this.name; }
  get MaxHP() { return this.maxhp; }
  get HP() { return this.hp; }
  get STR() { return this.str; }
  get XP() { return this.xp; }
  get LastAttack() { return this.lastattack; }
  get Image() { return this.img; }
  
  set Name(name) { this.name = name; }
  set MaxHP(hp) { this.maxhp = hp; }
  set HP(hp) { this.hp = hp; }
  set STR(str) { this.str = str; }
  set XP(xp) { this.xp = xp; }
  set LastAttack(atk) { this.lastattack = atk; }
  set Image(img) { this.img = img; }
  
  Hit() {
    var percentage = Math.random();
    if(percentage <= 0.4) {
      this.lastattack = this.str * 2;
    } else {
      this.lastattack = Randoms.Half(this.str).toFixed(0);
    }
    
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
    this.maxhp = 25;
    this.hp = 25;
    this.str = 3;
    this.xp = 0;
    this.lvl = 1;
    //this.requiredxp = XPTable.LevelXP()[this.lvl];
    this.requiredxp = XPTable.NextLevelXP(this.lvl);
  }
  
  get RequiredXP() { return this.requiredxp; }
  get LVL() { return this.lvl; }
  
  set RequiredXP(xp) { this.requiredxp = xp; }
  set LVL(lvl) { this.lvl = lvl; }
  
  LevelUp() {
    if(this.xp >= this.requiredxp) {
      this.lvl = this.lvl + 1;
      if(this.lvl % 3 == 0) this.maxhp = this.maxhp + 2;
      if(this.lvl % 5 == 0) this.str = this.str + 2;
      this.hp = this.maxhp;
      //this.requiredxp = XPTable.LevelXP()[this.lvl];
      this.requiredxp = XPTable.NextLevelXP(this.lvl);
      return true;
    }
    return false;
  }
}

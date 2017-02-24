class Character {
  constructor(name) {
    this.name = name;
    this.maxhp = 20;
    this.hp = 20;
    this.str = 3;
    this.xp = 0;
    this.lvl = 1;
    this.requiredxp = XPTable.LevelXP()[this.lvl];
  }
  
  get Name() { return this.name; }
  get MaxHP() { return this.maxhp; }
  get HP() { return this.hp; }
  get STR() { return this.str; }
  get XP() { return this.xp; }
  get LVL() { return this.lvl; }
  get RequiredXP() { return this.requiredxp; }
  
  set Name(name) { this.name = name; }
  set MaxHP(hp) { this.maxhp = hp; }
  set HP(hp) { this.hp = hp; }
  set STR(str) { this.str = str; }
  set XP(xp) { this.xp = xp; }
  set LVL(lvl) { this.lvl = lvl; }
  set RequiredXP(xp) { this.requiredxp = xp; }
  
  Hit() {
    return Randoms.Half(this.str).toFixed(0);
  }
  
  GetHit(monsterHit) {
    this.hp = this.hp - monsterHit;
  }
  
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
  
  isDied() {
    if(this.hp <= 0) return true;
    return false;
  }
}
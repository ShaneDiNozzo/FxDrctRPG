class Character {
  constructor(name) {
    this.name = name;
    this.hp = 20;
    this.str = 3;
    this.xp = 0;
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
}
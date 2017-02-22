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
    Randoms.Half(this.str);
    //var minimum = 50 / 100 * this.str;
    //return Math.floor(Math.random() * (this.str - minimum + 1)) + minimum;
  }
  
  AddXP(xp) {
    this.xp = this.xp + xp;
  }
}
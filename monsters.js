class Encounter {
  constructor() {
    this.mobNames = ["Retooth", "Werewolf", "Mergareph"];
    this.mob = "";
  }
  
  get monster() { return this.mob; }
  
  set monster(mob) { this.mob = mob; }
  
  DoEncounter() {
    this.mob = new Mob(this.mobNames[Randoms.MaxMin(2, 0)], Randoms.Half(10), Randoms.Half(2));
    showData();
  }
}

class Mob {
  constructor(name, hp, str) {
    this.name = name;
    this.hp = hp;
    this.str = str;
  }
  
  get Name() { return this.name; }
  get HP()   { return this.hp;   }
  get STR()  { return this.str;  }
  
  set Name(name) { this.name = name; }
  set HP(hp)     { this.hp   = hp;   }
  set STR(str)   { this.str  = str;  }
  
  Hit() {
    return Randoms.Half(this.str);
    //var minimum = 50 / 100 * this.str;
    //return Math.floor(Math.random() * (this.str - minimum + 1)) + minimum;
    //return Math.floor(Math.random() * (this.str + 1));
  }
    
  GetHit(characterHit) {
    this.hp = this.hp - characterHit;
  }
}
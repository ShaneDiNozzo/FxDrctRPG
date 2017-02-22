
var nl = "\n";

function OnStart() {
  layMain = app.CreateLayout("linear", "VCenter, FillXY");
  
  chartr = new Character("Shane");
  mnr = new Encounter();
  
  
  btn = app.CreateButton("hit");
  btn.SetOnTouch(function() {
    //
  });
  layMain.AddChild(btn);
  
  txtCharacterName = app.CreateText(chartr.Name);
  layMain.AddChild(txtCharacterName);
  
  txtCharacterHP = app.CreateText(chartr.HP);
  layMain.AddChild(txtCharacterHP);
  
  app.AddLayout(layMain);
}

class Encounter {
  constructor() {
    this.mobNames = ["Retooth", "Werewolf", "Mergareph"];
    this.mob = "";
  }
  
  get monster() { return this.mob; }
  
  set monster(mob) { mob = this.mob }
  
  GetRandomMobName() {
    var minimum = 1;
    return Math.floor(Math.random() * (mobNames.length() - minimum + 1)) + minimum;
  }
  
  DoEncounter() {
    this.mob = new Mob(mobNames[GetRandomMobName], 10, 2);
  }
  
  MonsterName() {
    return this.mob.Name;
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
    var minimum = this.str - 5;
    return Math.floor(Math.random() * (this.str - minimum + 1)) + minimum;
  }
  
  GetHit(characterHit) {
    this.hp = this.hp - characterHit;
  }
}

class Character {
  constructor(name) {
    this.name = name;
    this.hp = 100;
    this.str = 10;
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
  
  Hit(foeHP) {
    var minimum = this.str - 5;
    return Math.floor(Math.random() * (this.str - minimum + 1)) + minimum;
  }
  
  GetHit(foeHit) {
    this.hp = this.hp - foeHit;
  }
  
  AddXP(xp) {
    this.xp = this.xp + xp;
  }
}
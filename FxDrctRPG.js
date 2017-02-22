app.LoadScript("progressbar.js");
app.LoadScript("character.js");
app.LoadScript("monsters.js");

var nl = "\n";

function OnStart() {
  layMain = app.CreateLayout("linear", "VCenter, FillXY");
  
  chartr = new Character("Shane");
  mnr = new Encounter();
  
  txtMobName = app.CreateText("");
  layMain.AddChild(txtMobName);
  
  txtMobHP = app.CreateText("");
  layMain.AddChild(txtMobHP);
  
  txtMobSTR = app.CreateText("");
  layMain.AddChild(txtMobSTR);
  
  btnEncounter = app.CreateButton("encounter");
  btnEncounter.SetOnTouch(function() {
    mnr.DoEncounter();
  });
  layMain.AddChild(btnEncounter);
  
  btn = app.CreateButton("hit");
  btn.SetOnTouch(function() {
    chartr.HP = chartr.HP - mnr.mob.Hit();
    if(chartr.HP <= 0) {
      txtCharacterHP.SetText("DIED!");
      txtCharacterHP.SetTextColor("red");
    } else {
      txtCharacterHP.SetText("HP: " + chartr.HP);
    }
    prgCharacterHP.Update(chartr.HP);
  });
  layMain.AddChild(btn);
  
  txtCharacterHP = app.CreateText("HP: " + chartr.HP);
  layMain.AddChild(txtCharacterHP);
  
  prgCharacterHP = new Progressbar(chartr.HP, 0.8);
  layMain.AddChild(prgCharacterHP.Create());
  prgCharacterHP.ForegroundColor = "red";
  prgCharacterHP.Update(chartr.HP);
  
  txtCharacterXP = app.CreateText("XP: " + chartr.XP);
  layMain.AddChild(txtCharacterXP);
  
  prgCharacterXP = new Progressbar(chartr.XP, 0.8);
  layMain.AddChild(prgCharacterXP.Create());
  prgCharacterXP.Update(chartr.XP);
  
  txtCharacterName = app.CreateText(chartr.Name, 0.8, -1, "Right");
  layMain.AddChild(txtCharacterName);
  
  txtCharacterLevel = app.CreateText("LVL: ", 0.8, -1, "Left");
  layMain.AddChild(txtCharacterLevel);
  
  app.AddLayout(layMain);
}



function showData() {
  txtMobName.SetText("Name: " + mnr.mob.Name);
  txtMobHP.SetText("HP: " + mnr.mob.HP);
  txtMobSTR.SetText("STR: " + mnr.mob.STR);
}

class Randoms {
  constructor(minimum, maximum) {
    this.minimum = minimum;
    this.maximum = maximum;
  }
  
  static Half(value) {
    var minimum = 50 / 100 * value;
    return Math.floor(Math.random() * (value - minimum + 1)) + minimum;
  }
  
  static MaxMin(maximum, minimum) {
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  }
}

class MobSpecies {
  constructor() {
    this.diffculty = "";
  }
  
  Lynx() {
    var name = "Lynx";
    var hp = Randoms.MaxMin(10, 7);
  }
}


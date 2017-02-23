app.LoadScript("progressbar.js");
app.LoadScript("character.js");
app.LoadScript("monsters.js");

var nl = "\n";

function OnStart() {
  layMain = app.CreateLayout("Linear", "VCenter, FillXY");
  
  chartr = new Character("Shane");
  mnr = new Encounter();
  
  txtMobName = app.CreateText("");
  layMain.AddChild(txtMobName);
  
  txtMobHP = app.CreateText("");
  layMain.AddChild(txtMobHP);
  
  prgMonsterHP = new Progressbar(0, 0.8);
  layMain.AddChild(prgMonsterHP.Create());
  prgMonsterHP.ForegroundColor = "red";
  
  txtMobSTR = app.CreateText("");
  layMain.AddChild(txtMobSTR);
  
  btnEncounter = app.CreateButton("encounter");
  btnEncounter.SetOnTouch(() => { mnr.DoEncounter(chartr.XP); });
  layMain.AddChild(btnEncounter);
  
  layButtonLine = app.CreateLayout("Linear", "Horizontal");
  layMain.AddChild(layButtonLine);
  
  btnAttack = app.CreateButton("Attack");
  btnAttack.SetOnTouch(function() {
    chartr.HP = chartr.HP - mnr.mob.Hit();
    mnr.mob.HP = mnr.mob.HP - chartr.Hit();
    if(chartr.HP <= 0) {
      txtCharacterHP.SetText("DIED!");
      txtCharacterHP.SetTextColor("red");
    } else {
      txtCharacterHP.SetText("HP: " + chartr.HP);
    }
    
    txtMobHP.SetText(mnr.mob.HP);
    if(mnr.mob.HP <= 0) {
      chartr.XP = chartr.XP + mnr.mob.XP;
      txtCharacterXP.SetText("XP: " + chartr.XP);
      mnr.DoEncounter(chartr.XP);
    }
    
    prgCharacterHP.Update(chartr.HP);
    prgCharacterXP.Update(chartr.XP);
    prgMonsterHP.Update(mnr.mob.HP);
  });
  layButtonLine.AddChild(btnAttack);
  
  btnSkill = app.CreateButton("Skill");
  layButtonLine.AddChild(btnSkill);
  
  btnInventory = app.CreateButton("Inventory");
  layButtonLine.AddChild(btnInventory);
  
  btnRun = app.CreateButton("Run!");
  layButtonLine.AddChild(btnRun);
  
  txtCharacterHP = app.CreateText("HP: " + chartr.HP);
  layMain.AddChild(txtCharacterHP);
  
  prgCharacterHP = new Progressbar(chartr.HP, 0.8);
  layMain.AddChild(prgCharacterHP.Create());
  prgCharacterHP.ForegroundColor = "red";
  prgCharacterHP.Update(chartr.HP);
  
  txtCharacterXP = app.CreateText("XP: " + chartr.XP);
  layMain.AddChild(txtCharacterXP);
  
  prgCharacterXP = new Progressbar(10, 0.8);
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
  prgMonsterHP.MaxValue = mnr.mob.HP;
  prgMonsterHP.CurrentValue = mnr.mob.HP;
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

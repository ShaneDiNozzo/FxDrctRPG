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
  
  txtMobLastAttack = app.CreateText("Last attack: ");
  layMain.AddChild(txtMobLastAttack);
  
  btnEncounter = app.CreateButton("encounter");
  btnEncounter.SetOnTouch(() => { 
    mnr.DoEncounter(chartr.LVL);
    showData();
  });
  layMain.AddChild(btnEncounter);
  
  layButtonLine = app.CreateLayout("Linear", "Horizontal");
  layMain.AddChild(layButtonLine);
  
  btnAttack = app.CreateButton("Attack");
  btnAttack.SetOnTouch(function() {
    chartr.GetHit(mnr.mob.Hit());
    txtMobLastAttack.SetText("Last attack: " + mnr.mob.LastAttack);
    mnr.mob.GetHit(chartr.Hit());
    if(chartr.isDied()) {
      txtCharacterHP.SetText("DIED!");
      txtCharacterHP.SetTextColor("red");
    } else {
      txtCharacterHP.SetText("HP: " + chartr.HP);
    }
    
    txtMobHP.SetText("HP: " + mnr.mob.HP);
    if(mnr.mob.isDied()) {
      chartr.XP = chartr.XP + mnr.mob.XP;
      if(chartr.LevelUp()) {
        prgCharacterHP.MaxValue = chartr.MaxHP;
        prgCharacterXP.MaxValue = XPTable.LevelXP()[chartr.LVL];
        txtRequiredXP.SetText("Required XP: " + chartr.RequiredXP);
        txtCharacterLevel.SetText("LVL: " + chartr.LVL);
        txtCharacterHP.SetText("HP: " + chartr.HP);
        txtCharacterSTR.SetText("STR: " + chartr.STR);
      }
      txtCharacterXP.SetText("XP: " + chartr.XP);
      mnr.DoEncounter(chartr.LVL);
      showData();
    }
    
    prgCharacterXP.Update(chartr.XP);
    prgCharacterHP.Update(chartr.HP);
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
  
  txtRequiredXP = app.CreateText("Required XP: " + chartr.RequiredXP);
  layMain.AddChild(txtRequiredXP);
  
  txtCharacterXP = app.CreateText("XP: " + chartr.XP);
  layMain.AddChild(txtCharacterXP);
  
  prgCharacterXP = new Progressbar(XPTable.LevelXP()[chartr.LVL], 0.8);
  layMain.AddChild(prgCharacterXP.Create());
  prgCharacterXP.Update(chartr.XP);
  
  txtCharacterName = app.CreateText(chartr.Name, 0.8, -1, "Right");
  layMain.AddChild(txtCharacterName);
  
  txtCharacterLevel = app.CreateText("LVL: " + chartr.LVL, 0.8, -1, "Left");
  layMain.AddChild(txtCharacterLevel);
  
  txtCharacterSTR = app.CreateText("STR: " + chartr.STR, 0.8, -1, "Left");
  layMain.AddChild(txtCharacterSTR);
  
  app.AddLayout(layMain);
}

class XPTable {
  static LevelXP() {
    var table = new Array(11);
    table[0] = 0;
    table[1] = 10;
    table[2] = 20;
    table[3] = 40;
    table[4] = 70;
    table[5] = 110;
    table[6] = 160;
    table[7] = 220;
    table[8] = 290;
    table[9] = 370;
    table[10] = 460;
    
    return table;
  }
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
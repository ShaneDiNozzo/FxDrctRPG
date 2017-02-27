app.LoadScript("ui.js");
app.LoadScript("character.js");
app.LoadScript("encounter.js");
app.LoadScript("misc.js");

var nl = "\n";
var strings = {
  hp: "HP: ",
  name: "Name: ",
  str: "Strength: ",
  lastattack: "Last attack: ",
  xp: "XP: ",
  level: "Level: ",
  requiredxp: "Required XP: "
}

function OnStart() {
  layMain = app.CreateLayout("Absolute", "FillXY");
  layMain.SetSize(1, -1);
  
  player = new Player("Shane");
  encounter = new Encounter();
  
  nmbMonster = new Namebar("", "blue");
  layMain.AddChild(nmbMonster.Create());
  
  layMonsterStuff = app.CreateLayout("Linear", null, null, "VCenter, Top");
  layMonsterStuff.SetSize(1, -1);
  layMonsterStuff.SetPosition(0, 0.05);
  //layMonsterStuff.SetBackColor("#FF00E1");
  layMain.AddChild(layMonsterStuff);
  
  prgMonsterHP = new Progressbar(0, 0.85);
  layMonsterStuff.AddChild(prgMonsterHP.Create());
  prgMonsterHP.ForegroundColor = "red";
  
  txtMonsterSTR = app.CreateText("");
  layMonsterStuff.AddChild(txtMonsterSTR);
  
  txtMonsterLastAttack = app.CreateText("");
  layMonsterStuff.AddChild(txtMonsterLastAttack);
  
  btnEncounter = app.CreateButton("encounter");
  btnEncounter.SetOnTouch(() => { 
    encounter.DoEncounter(player.LVL);
    showData();
  });
  layMonsterStuff.AddChild(btnEncounter);
  
  layPlayerStuff = app.CreateLayout("Linear", null, null, "VCenter, Bottom");
  layPlayerStuff.SetSize(1, -1);
  layPlayerStuff.SetPosition(0, 0.78);
  //layPlayerStuff.SetBackColor("green");
  layMain.AddChild(layPlayerStuff);
  
  layButtonLine = app.CreateLayout("Linear", "Horizontal");
  layPlayerStuff.AddChild(layButtonLine);
  
  btnAttack = app.CreateButton("Attack");
  btnAttack.SetOnTouch(function() {
    player.GetHit(encounter.monster.Hit());
    txtMonsterLastAttack.SetText(strings.lastattack +
      encounter.monster.LastAttack);
    encounter.monster.GetHit(player.Hit());
    if(player.isDied()) {
      prgCharacterHP.SetText("DIED!");
    } else {
      prgCharacterHP.SetText(strings.hp + player.HP);
    }
    
    prgMonsterHP.SetText(strings.hp + encounter.monster.HP);
    if(encounter.monster.isDied()) {
      player.XP = player.XP + encounter.monster.XP;
      if(player.LevelUp()) {
        prgCharacterHP.MaxValue = player.MaxHP;
        prgCharacterXP.MaxValue = XPTable.LevelXP()[player.LVL];
        txtRequiredXP.SetText(strings.requiredxp + player.RequiredXP);
        txtCharacterLevel.SetText(strings.level + player.LVL);
        prgCharacterHP.SetText(strings.hp + player.HP);
        txtCharacterSTR.SetText(strings.str + player.STR);
      }
      prgCharacterXP.SetText(strings.xp + player.XP);
      encounter.DoEncounter(player.LVL);
      showData();
    }
    
    prgCharacterXP.Update(player.XP);
    prgCharacterHP.Update(player.HP);
    prgMonsterHP.Update(encounter.monster.HP);
  });
  layButtonLine.AddChild(btnAttack);
  
  btnSkill = app.CreateButton("Skill");
  layButtonLine.AddChild(btnSkill);
  
  btnInventory = app.CreateButton("Inventory");
  layButtonLine.AddChild(btnInventory);
  
  btnRun = app.CreateButton("Run!");
  layButtonLine.AddChild(btnRun);
  
  prgCharacterHP = new Progressbar(player.HP, 0.85);
  layPlayerStuff.AddChild(prgCharacterHP.Create());
  prgCharacterHP.SetText(strings.hp + player.HP);
  prgCharacterHP.ForegroundColor = "red";
  prgCharacterHP.Update(player.HP);
  
  txtRequiredXP = app.CreateText(strings.requiredxp + player.RequiredXP);
  layPlayerStuff.AddChild(txtRequiredXP);
  
  txtCharacterName = app.CreateText(player.Name, 0.8, -1, "Right");
  layPlayerStuff.AddChild(txtCharacterName);
  
  txtCharacterLevel = app.CreateText(strings.level +
    player.LVL, 0.8, -1, "Left");
  layPlayerStuff.AddChild(txtCharacterLevel);
  
  txtCharacterSTR = app.CreateText(strings.str + player.STR, 0.8, -1, "Left");
  layPlayerStuff.AddChild(txtCharacterSTR);
  
  prgCharacterXP = new Progressbar(XPTable.LevelXP()[player.LVL], 1);
  layPlayerStuff.AddChild(prgCharacterXP.Create());
  prgCharacterXP.ForegroundColor = "grey";
  prgCharacterXP.SetText(strings.xp + player.XP);
  prgCharacterXP.Update(player.XP);
  
  app.AddLayout(layMain);
}

function showData() {
  nmbMonster.Name = encounter.monster.Name;
  prgMonsterHP.MaxValue = encounter.monster.HP;
  prgMonsterHP.SetText(strings.hp + encounter.monster.HP);
  prgMonsterHP.CurrentValue = encounter.monster.HP;
  txtMonsterSTR.SetText(strings.str + encounter.monster.STR);
}
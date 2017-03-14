class PlayerDetailsScreen {
  constructor(layMain) {
    this.layMain = layMain;
    this.layPlayerDetails = app.CreateLayout("Linear", "FillXY");
    this.txtPlayerName = "";
    this.txtPlayerSTR = "";
    this.txtPlayerMaxHP = "";
    this.txtPlayerLVL = "";
    this.txtPlayerXP = "";
    this.txtPlayerArmor = "";
  }
  
  Create() {
    this.layPlayerDetails.SetSize(0.7, 0.5);
    this.layPlayerDetails.SetMargins(0.15, 0.25);
    this.layPlayerDetails.SetBackColor("#1C1C1C");
    this.layPlayerDetails.SetPadding(0.02, 0.02, 0.02, 0.02);
    this.layPlayerDetails.SetVisibility("Hide");
    
    var txtPlayerInfo = app.CreateText("Player info", null, null, "Bold, Left");
    txtPlayerInfo.SetSize(0.66);
    this.layPlayerDetails.AddChild(txtPlayerInfo);
    
    this.layPlayerDetails.AddChild(this.separator());
  
    this.txtPlayerName = app.CreateText("", null, null, "Left");
    this.txtPlayerName.SetSize(0.5);
    this.layPlayerDetails.AddChild(this.txtPlayerName);
    
    this.txtPlayerSTR = app.CreateText("", null, null, "Left");
    this.txtPlayerSTR.SetSize(0.5);
    this.layPlayerDetails.AddChild(this.txtPlayerSTR);
    
    this.txtPlayerMaxHP = app.CreateText("", null, null, "Left");
    this.txtPlayerMaxHP.SetSize(0.5);
    this.layPlayerDetails.AddChild(this.txtPlayerMaxHP);
    
    this.txtPlayerLVL = app.CreateText("", null, null, "Left");
    this.txtPlayerLVL.SetSize(0.5);
    this.layPlayerDetails.AddChild(this.txtPlayerLVL);
    
    this.txtPlayerXP = app.CreateText("", null, null, "Left");
    this.txtPlayerXP.SetSize(0.5);
    this.layPlayerDetails.AddChild(this.txtPlayerXP);
    
    this.txtPlayerArmor = app.CreateText("", null, null, "Left");
    this.txtPlayerArmor.SetSize(0.5);
    this.layPlayerDetails.AddChild(this.txtPlayerArmor);
    
    this.txtPlayerWeapon = app.CreateText("", null, null, "Left");
    this.txtPlayerWeapon.SetSize(0.5);
    this.layPlayerDetails.AddChild(this.txtPlayerWeapon);
    
    this.layPlayerDetails.AddChild(this.separator());
    
    var btnCloseInventory = app.CreateButton("Close");
    btnCloseInventory.SetSize(0.66);
    btnCloseInventory.SetOnTouch(() => { this.layPlayerDetails.Animate("SlideToRight"); });
    this.layPlayerDetails.AddChild(btnCloseInventory);
    
    app.AddLayout(this.layPlayerDetails);
  }
  
  separator() {
    var separator = app.CreateLayout("Linear");
    separator.SetSize(0.66, 0.001);
    separator.SetMargins(null, 0.01, null, 0.01);
    separator.SetBackColor("white");
    
    return separator;
  }
  
  Show() {
    this.layPlayerDetails.Animate("SlideFromRight");
  }
  
  Update() {
    this.txtPlayerName.SetText(strings.name + player.Name);
    this.txtPlayerSTR.SetText(strings.str + player.STR);
    this.txtPlayerMaxHP.SetText(strings.maxhp + player.MaxHP);
    this.txtPlayerLVL.SetText(strings.level + player.LVL);
    this.txtPlayerXP.SetText(strings.xp + player.XP);
    this.txtPlayerArmor.SetText(strings.armor + player.Armor.name);
    this.txtPlayerWeapon.SetText(strings.weapon + player.Weapon.name);
  }
}
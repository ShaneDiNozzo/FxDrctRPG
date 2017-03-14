class Namebar {
  constructor(name, color) {
    this.name = name;
    this.layBar = app.CreateLayout("Linear", "FillXY, VCenter");
    this.color = color;
    this.txtName = "";
    this.txtNameColor = "white";
  }
  
  get Color() { return this.color; }
  get NameColor() { return this.txtNameColor; }
  get Name() { return this.name; }
  
  set Color(color) {
    this.color = color;
    this.layBar.SetBackColor(this.color);
  }
  set NameColor(color) {
    this.txtNameColor = color;
    this.txtName.SetTextColor(this.color);
  }
  set Name(name) {
    this.name = name;
    this.txtName.SetText(this.name);
  }
  
  Create() {
    this.layBar.SetSize(1, 0.05);
    this.layBar.SetBackColor(this.color);
    
    this.txtName = app.CreateText(this.name,null, null, "Bold");
    this.txtName.SetTextSize(20);
    this.txtName.SetTextColor(this.txtNameColor);
    this.layBar.AddChild(this.txtName);
    
    return this.layBar;
  }
}

class Progressbar {
  constructor(maxValue, width) {
    this.backColor = "black";
    this.foregroundColor = "white";
    this.maxValue = maxValue || 0;
    this.currentValue = "";
    this.width = width;
    this.layPool = app.CreateLayout("Linear");
    this.thickness = 0.03;
    this.barSize = 0;
    this.layBack = app.CreateLayout("Linear");
    this.layValue = app.CreateLayout("Linear", "VCenter");
    this.txt = "";
    this.txtColor = "grey";
    this.layTXT = app.CreateLayout("Linear", "VCenter");
  }
  
  get BackgroundColor() {return this.backColor; }
  get ForegroundColor() { return this.foregroundColor; }
  get MaxValue() { return this.maxValue; }
  get CurrentValue() { return this.currentValue; }
  get Thickness() { return this.thickness; }
  get LayoutPool() { return this.layPool; }
  get TextColor() { return this.txtColor; }
  
  set BackgroundColor(color) {
    this.backColor = color;
    this.layBack.SetBackColor(this.backColor);
  }
  set ForegroundColor(color) {
    this.foregroundColor = color;
    this.layValue.SetBackColor(this.foregroundColor); 
  }
  set MaxValue(value) { 
    this.maxValue = value;  
    this.Update(this.currentValue);
  }
  set CurrentValue(value) {
    this.currentValue = value;
    this.Update(value)
  }
  set Thickness(thickness) {
    this.thickness = thickness;
    this.layBack.SetSize(this.width, thickness);
    this.layValue.SetSize(this, thickness);
  }
  set TextColor(color) {
    this.txtColor = color;
    this.txt.SetTextColor(this.txtColor);
  }
  
  Create() {
    var layFrame = app.CreateLayout("Frame");
    
    this.layBack.SetSize(this.width, this.thickness);
    this.layBack.SetBackColor(this.backColor);
    
    this.layValue.SetSize(0, this.thickness);
    this.layValue.SetBackColor(this.foregroundColor);
    
    this.layTXT.SetSize(this.width, this.thickness);
    
    this.txt = app.CreateText("", null, null, "Center");
    this.txt.SetSize(this.width, -1);
    this.layTXT.AddChild(this.txt);
    
    layFrame.AddChild(this.layBack);
    layFrame.AddChild(this.layValue);
    layFrame.AddChild(this.layTXT);
    
    this.layPool.AddChild(layFrame);
    
    return this.layPool;
  }
  
  SetText(text) {
    this.txt.SetText(text);
  }
  
  Update(value) {
    if (value > this.maxValue) return;
    var spct = (value / this.maxValue * 100).toFixed(0);
    this.barSize = this.width * (spct / 100);
    this.layValue.SetSize(this.barSize, this.thickness);
    this.currentValue = value;
  }
}

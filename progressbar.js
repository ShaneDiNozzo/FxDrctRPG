class Progressbar {
  constructor(maxValue, width) {
    this.backColor = "black";
    this.foregroundColor = "white";
    this.maxValue = maxValue || 0;
    this.currentValue = "";
    this.width = width;
    this.layPool = app.CreateLayout("Linear");
    this.thickness = 0.006;
    this.barSize = 0;
    this.layBack = app.CreateLayout("Linear");
    this.layValue = app.CreateLayout("Linear");
  }
  
  get BackgroundColor() { return this.backColor }
  get ForegroundColor() { return this.foregroundColor }
  get MaxValue() { return this.maxValue }
  get CurrentValue() { return this.currentValue }
  get Thickness() { return this.thickness }
  get LayoutPool() { return this.layPool }
  
  set BackgroundColor(color) { this.layBack.SetBackColor(color); }
  set ForegroundColor(color) { this.layValue.SetBackColor(color); }
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
  
  Create() {
    var layFrame = app.CreateLayout("Frame");
    
    this.layBack.SetSize(this.width, this.thickness);
    this.layBack.SetBackColor(this.backColor);
    
    this.layValue.SetSize(0, this.thickness);
    this.layValue.SetBackColor(this.foregroundColor);
    
    layFrame.AddChild(this.layBack);
    layFrame.AddChild(this.layValue);
    
    this.layPool.AddChild(layFrame);
    
    return this.layPool;
  }
  
  Update(value) {
    if (value > this.maxValue) return;
    var spct = (value / this.maxValue * 100).toFixed(0);
    this.barSize = this.width * (spct / 100);
    this.layValue.SetSize(this.barSize, this.thickness);
    this.currentValue = value;
  }
}
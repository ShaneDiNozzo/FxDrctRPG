function Items() {
  this.equipmentHelper = {
    training: 0,
    bulestin: 1,
    tiatnium: 2,
    sgimetal: 3
  };
  
  this.armors = [
    training = { name: "Training armor", def: 1, hp: 1, str: 1 },
    bulestin = { name: "Bulestin armor", def: 2, hp: 2, str: 2 },
    tiatnium = { name: "Tiatnium armor", def: 3, hp: 3, str: 3 },
    sgimetal = { name: "Sgimetal armor", def: 4, hp: 4, str: 4 }
  ];
  
  this.weapons = [
    training = { name: "Training sword", str: 1 },
    bulestin = { name: "Bulestin sword", str: 2 },
    tiatnium = { name: "Tiatnium sword", str: 3 },
    sgimetal = { name: "Sgimetal sword", str: 4 }
  ];
  
  this.potions = [
    lvl1 = { name: "HP potion LVL1", hp: 15 },
    lvl2 = { name: "HP potion LVL2", hp: 25 },
    lvl3 = { name: "HP potion LVL3", hp: 35 }
  ];
}
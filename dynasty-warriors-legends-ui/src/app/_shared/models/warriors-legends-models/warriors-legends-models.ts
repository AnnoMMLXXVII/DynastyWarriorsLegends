
export class WarriorsLegendsDetails {
  asObservable(): any {
    throw new Error('Method not implemented.');
  }
  name: String = "";
  kingdom: string = "";
  image: string = "";
  state: string = "";
  weaponType: string = "";
  weapons: Weapon[] = [];
}

export class Weapon {
  asObservable(): any {
    throw new Error('Method not implemented.');
  }
  affinity: String = "";
  attributes: Attribute[] = [];
  images: WeaponImage[] = [];
  length: String = "";
  name: String = "";
  power: number = 0;
  rarity: String = "";
  star: number = 0;
  state: String = "";
  type: String = "";
}

export class Attribute {
  asObservable(): any {
    throw new Error('Method not implemented.');
  }
  name: String = "";
  state: String = "";
  level: number = 0;
}

export class WeaponImage {
  weaponImage: String = "";
}

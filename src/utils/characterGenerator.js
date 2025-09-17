import * as characterData from '../data/characterData.js';
import { rollDice, roll3d6, rolld10, rolld8, rolld6, rolld20 } from './dice.js';

export const generate = () => {
  // Roll attributes
  const vigor = roll3d6();
  const presence = roll3d6();
  const faith = roll3d6();
  const sand = rollDice(6, 2).total;
  
  // Roll characteristics
  const backgroundRoll = rolld10();
  const reputationRoll = rolld10();
  const fortitudeRoll = rolld10();
  const foibleRoll = rolld10();
  const issueRoll = rolld10();
  
  // Roll equipment
  const armorRoll = rollDice(5, 1).total;
  const weaponRoll = rolld8();
  const gearRolls = [rolld20(), rolld20(), rolld20()];
  
  // Get money and lead
  const isFirearm = [1, 2, 3, 8].includes(weaponRoll);
  const lead = isFirearm ? rollDice(4, 1).total + 1 : 0;
  const coin = rolld6();
  
  // Calculate inventory
  const inventory = Math.max(vigor, 10);
  const selectedArmor = characterData.armors[armorRoll - 1];
  const selectedWeapon = characterData.weapons[weaponRoll - 1];
  const selectedGear = gearRolls.map(roll => characterData.gear[Math.min(roll - 1, characterData.gear.length - 1)]);
  
  const load = selectedArmor.slots + selectedWeapon.slots + 
               selectedGear.reduce((sum, g) => sum + g.slots, 0) + 
               (lead > 0 ? 1 : 0);
  const reserve = inventory - load;
  
  return {
    attributes: { vigor, presence, faith, sand },
    characteristics: {
      background: characterData.backgrounds[backgroundRoll - 1],
      reputation: characterData.reputations[reputationRoll - 1],
      fortitude: characterData.fortitudes[fortitudeRoll - 1],
      foible: characterData.foibles[foibleRoll - 1],
      issue: characterData.issues[issueRoll - 1]
    },
    equipment: {
      armor: selectedArmor,
      weapon: selectedWeapon,
      gear: selectedGear,
      lead,
      coin
    },
    inventory: {
      total: inventory,
      load,
      reserve
    }
  };
};

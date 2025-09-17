// Dice rolling utilities
export const rollDice = (sides, count = 1) => {
  let total = 0;
  const rolls = [];
  for (let i = 0; i < count; i++) {
    const roll = Math.floor(Math.random() * sides) + 1;
    rolls.push(roll);
    total += roll;
  }
  return { total, rolls };
};

export const roll3d6 = () => rollDice(6, 3).total;
export const rolld10 = () => rollDice(10, 1).total;
export const rolld8 = () => rollDice(8, 1).total;
export const rolld6 = () => rollDice(6, 1).total;
export const rolld5 = () => rollDice(5, 1).total;
export const rolld4 = () => rollDice(4, 1).total;
export const rolld20 = () => rollDice(20, 1).total;

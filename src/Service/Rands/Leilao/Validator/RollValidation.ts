interface BonusRoll {
  bonus: number;
  points: number;
}

export function rollValidation(
  roll: number,
  condition1: BonusRoll,
  condition2: BonusRoll,
  condition3: BonusRoll
): BonusRoll {
  if (roll <= 2) return condition1;
  if (roll >= 3 && roll <= 8) return condition2;
  if (roll >= 9) return condition3;
  return { bonus: 0, points: 0 };
}

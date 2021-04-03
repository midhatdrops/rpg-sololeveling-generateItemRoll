export function durabilityTranslator(roll: number) {
  if (roll <= 2) {
    return { points: -5, durability: 3 };
  }
  if (roll >= 3 && roll <= 8) {
    return { points: 0, durability: 4 };
  }
  if (roll >= 9) {
    return { points: 5, durability: 5 };
  }
  return { points: 0, durability: 0 };
}

interface Durability {
  points: number;
  durability: number;
}

export function durabilityRand(): Durability {
  const roll = Math.floor(Math.random() * 10 + 1);
  if (roll <= 2) {
    return { points: -5, durability: 3 };
  }
  if (roll >= 3 && roll <= 8) {
    return { points: 0, durability: 8 };
  }
  if (roll >= 9) {
    return { points: 5, durability: 5 };
  }
  return { points: 0, durability: 0 };
}

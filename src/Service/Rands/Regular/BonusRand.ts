import { rollValidation } from '../Leilao/Validator/RollValidation';
import { DungeonsRank } from './dungeonsRank';

export function BonusRand(dgRank: string) {
  const rank = DungeonsRank[dgRank as keyof typeof DungeonsRank];
  const roll = Math.floor(Math.random() * 10 + 1);
  switch (rank) {
    case 2: {
      return rollValidation(
        roll,
        { bonus: 24, points: -10 },
        { bonus: 30, points: 0 },
        { bonus: 50, points: 0 }
      );
    }
    case 3: {
      return rollValidation(
        roll,
        { bonus: 50, points: 0 },
        { bonus: 60, points: 10 },
        { bonus: 100, points: 10 }
      );
    }
    case 4: {
      return rollValidation(
        roll,
        { bonus: 100, points: 10 },
        { bonus: 120, points: 20 },
        { bonus: 180, points: 20 }
      );
    }
    case 5: {
      return rollValidation(
        roll,
        { bonus: 180, points: 20 },
        { bonus: 250, points: 30 },
        { bonus: 340, points: 30 }
      );
    }
    default: {
      return rollValidation(
        roll,
        { bonus: 15, points: -10 },
        { bonus: 24, points: -10 },
        { bonus: 15, points: -10 }
      );
    }
  }
}

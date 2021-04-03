export function itemRankCalculator(totalPoints: number) {
  if (totalPoints <= -5) return 'Rank E';
  if (totalPoints > -5 && totalPoints < 15) return 'Rank D';
  if (totalPoints >= 15 && totalPoints < 25) return 'Rank C';
  if (totalPoints >= 25 && totalPoints < 35) return 'Rank B';
  if (totalPoints >= 35 && totalPoints < 45) return 'Rank A';
  if (totalPoints >= 45) return 'Rank S';
  return '';
}

export function TypeRand() {
  const roll = Math.floor(Math.random() * 9 + 1);
  switch (roll) {
    case 2:
      return 'Elmo';
    case 3:
      return 'Armadura';
    case 4:
      return 'Luva';
    case 5:
      return 'Bota';
    case 6:
      return 'Capa';
    case 7:
      return 'Anel';
    case 8:
      return 'Colar';
    case 9:
      return 'Runa';
    default:
      return 'Arma';
  }
}

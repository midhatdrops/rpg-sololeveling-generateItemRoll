export function conditionTranslator(equipType: string, roll: number) {
  if (equipType === 'Arma') {
    if (roll >= 1 && roll < 7) {
      return { points: 0, useCondition: 'Ser Arma da Classe' };
    }
    if (roll >= 7) {
      return { points: -5, useCondition: 'Ter Maestria com a Arma' };
    }
  } else {
    switch (roll) {
      case 2:
        return {
          points: -5,
          useCondition: 'Ter no mínimo o valor do bônus em Força bruta',
        };
      case 3:
        return {
          points: -5,
          useCondition: 'Ter no mínimo o valor do bônus em Agilidade bruta',
        };
      case 4:
        return {
          points: -5,
          useCondition: 'Ter no mínimo o valor do bônus em Sentidos bruto',
        };
      case 5:
        return {
          points: -5,
          useCondition: 'Ter no mínimo o valor do bônus em Inteligência bruta',
        };
      case 6:
        return {
          points: -5,
          useCondition: 'Ter no mínimo o valor do bônus em Vitalidade bruta',
        };
      case 7:
        return { points: 0, useCondition: 'Ter foco em Força' };
      case 8:
        return { points: 0, useCondition: 'Ter foco em Sentidos' };
      case 9:
        return { points: 0, useCondition: 'Ter foco em Agilidade' };
      case 10:
        return { points: 0, useCondition: 'Ter foco em Inteligência' };
      case 11:
        return { points: 0, useCondition: 'Ter foco em Vitalidade' };
      case 12:
        return {
          points: -5,
          useCondition: 'Enquanto equipado, receba DoT I Veneno',
        };
      case 13:
        return { points: -10, useCondition: 'Receba a penalidade' };
      default:
        return { points: 10, useCondition: 'N/A' };
    }
  }
  return { points: 0, useCondition: '' };
}

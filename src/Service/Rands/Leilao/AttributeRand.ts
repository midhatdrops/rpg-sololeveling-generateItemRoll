interface AttributeAffected {
  bonus: string;
  penality: string;
}

export function attributeRand(equipType: string): AttributeAffected {
  if (equipType === 'Arma') {
    return { bonus: '', penality: '' };
  } else {
    const roll = Math.floor(Math.random() * 9 + 1);
    if (roll === 1 || roll === 6) {
      return { bonus: 'Força', penality: 'Agilidade' };
    }
    if (roll === 2 || roll === 7) {
      return { bonus: 'Agilidade', penality: 'Vitalidade' };
    }
    if (roll === 3 || roll === 8) {
      return { bonus: 'Sentidos', penality: 'Inteligência' };
    }
    if (roll === 4 || roll === 9) {
      return { bonus: 'Inteligência', penality: 'Sentidos' };
    }
    if (roll === 5 || roll === 10) {
      return { bonus: 'Vitalidade', penality: 'Força' };
    }
  }

  return { bonus: '', penality: '' };
}

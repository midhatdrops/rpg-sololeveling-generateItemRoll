interface EffectAndDescription {
  points: number;
  effect: string;
  description: string;
}

export function effectRand(equipType: string): EffectAndDescription {
  if (equipType === 'Arma') {
    const roll = Math.floor(Math.random() * 13 + 1);
    switch (roll) {
      case 2:
        return { points: 5, effect: 'Afiada', description: '+20 de dano' };
      case 3:
        return {
          points: 5,
          effect: 'Toque de Fogo',
          description: 'Aplica DoT I (queimadura) uma vez por post',
        };
      case 4:
        return {
          points: 5,
          effect: 'Toque de Gelo',
          description: 'Aplica o efeito lentidão uma vez por post',
        };
      case 5:
        return {
          points: 5,
          effect: 'Toque de Vento',
          description: 'Aplica DoT I (sangramento) uma vez por post',
        };
      case 6:
        return {
          points: 5,
          effect: 'Toque Venenoso',
          description: 'Aplica DoT I (veneno) uma vez por post',
        };
      case 7:
        return {
          points: 10,
          effect: 'Obra Prima',
          description: '+ 50 de Dano',
        };
      case 8:
        return {
          points: 10,
          effect: 'Flamejante',
          description: 'Aplica DoT II (queimadura) uma vez por post',
        };
      case 9:
        return {
          points: 10,
          effect: 'Congelada',
          description: 'Aplica o efeito Imobilizar uma vez por post',
        };
      case 10:
        return {
          points: 10,
          effect: 'Sagrada',
          description: 'Cura 100 de HP do usuário uma vez por post',
        };
      case 11:
        return {
          points: 10,
          effect: 'Tenebrosa',
          description: 'Aplica o efeito Medo uma vez por post',
        };
      case 12:
        return {
          points: 10,
          effect: 'Vorpal',
          description: 'Aplica DoT II (sangramento) uma vez por post',
        };
      case 13:
        return {
          points: 10,
          effect: 'Necrótica',
          description: 'Aplica DoT II (veneno) uma vez por post',
        };
      default:
        return { points: -10, effect: 'N/A', description: 'Sem efeito' };
    }
  } else {
    const roll = Math.floor(Math.random() * 9 + 1);
    switch (roll) {
      case 2:
        return {
          points: 5,
          effect: 'Proteção',
          description: '10% de redução de dano físico',
        };
      case 3:
        return {
          points: 5,
          effect: 'Proteção Fogo',
          description: '10% de redução de dano de fogo',
        };
      case 4:
        return {
          points: 5,
          effect: 'Proteção Água',
          description: '10% de redução de dano de água',
        };
      case 5:
        return {
          points: 5,
          effect: 'Proteção Vento',
          description: '10% de redução de dano de vento',
        };
      case 6:
        return {
          points: 5,
          effect: 'Proteção Terra',
          description: '10% de redução de dano de terra',
        };
      case 7:
        return {
          points: 5,
          effect: 'Proteção Sombra',
          description: '10% de redução de dano de sombra',
        };
      case 8:
        return {
          points: 5,
          effect: 'Proteção Luz',
          description: '10% de redução de dano de luz',
        };
      case 9:
        return {
          points: 5,
          effect: 'Proteção Mágica',
          description: '10% de redução de dano mágico não elemental',
        };
      default:
        return { points: -10, effect: 'N/A', description: 'Sem efeito' };
    }
  }
}

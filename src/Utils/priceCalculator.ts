export function priceCalculator(rank: string, type: string) {
  if (type === 'Runa') {
    return 'G$ 100.000';
  }
  switch (rank) {
    case 'Rank E': {
      return 'G$ 2.700';
    }
    case 'Rank D': {
      return 'G$ 5.400';
    }
    case 'Rank C': {
      return 'G$ 10.800';
    }
    case 'Rank B': {
      return 'G$ 21.600';
    }
    case 'Rank A': {
      return 'G$ 43.200';
    }
  }
  return '';
}

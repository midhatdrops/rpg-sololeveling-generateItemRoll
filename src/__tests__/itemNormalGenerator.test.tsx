import { GenerateRegularRoll } from '../Service/GenerateRegularRoll';

describe('New Regular Item Genrator', () => {
  it('Should Generate a new Item', () => {
    const newItem = new GenerateRegularRoll('B');
    console.log(newItem);
    expect(newItem.getBonus).toBeGreaterThan(0);
  });
});

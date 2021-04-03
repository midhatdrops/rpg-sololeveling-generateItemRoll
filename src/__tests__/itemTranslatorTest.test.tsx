import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { TranslateGeneralRoll } from '../Service/RegularRoll/TranslateGeneralRoll';

describe('Translate rolls to itens', () => {
  it('Should translate an item', () => {
    const newItem = new TranslateGeneralRoll(9, 'A', 9, 5, 8, 8, 4);
    console.log(newItem);
    expect(newItem.getDurability).toBeGreaterThan(0);
  });
});

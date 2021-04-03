import React from 'react';
import { GenerateLeilaoRoll } from '../Service/GenerateLeilaoRoll';
import '@testing-library/jest-dom/extend-expect';

const newItem = new GenerateLeilaoRoll();
console.log(newItem);

describe('New Item Generation', () => {
  it('Should generate new item', () => {
    expect(newItem.getDurability).toBeGreaterThan(0);
  });
});

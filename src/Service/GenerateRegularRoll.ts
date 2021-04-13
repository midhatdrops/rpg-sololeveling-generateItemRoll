import { attributeRand } from './Rands/Leilao/AttributeRand';
import { BonusRand } from './Rands/Regular/BonusRand';
import { durabilityRand } from './Rands/Leilao/durabilityRand';
import { effectRand } from './Rands/Leilao/effectRand';
import { TypeRand } from './Rands/Leilao/typeRand';
import { ConditionsRand } from './Rands/Leilao/useConditions';
import { itemRankCalculator } from './Rands/Leilao/itemRankCalculator';

export class GenerateRegularRoll {
  private DgRank: string = '';
  private bonus: number = 0;
  private type: string = '';
  private affectedAtributte: string = '';
  private useConditions: string = '';
  private effect: string = '';
  private durability: number = 0;
  private itemRank: string = '';
  private penality: string = '';
  private effectDescription = '';
  private totalPoints: number = 0;
  private price: string = '';

  constructor(dgRank: string) {
    this.DgRank = dgRank;
    const type = TypeRand();
    const condition = ConditionsRand(type);
    const bonus = BonusRand(dgRank);
    const effect = effectRand(type);
    const durability = durabilityRand();
    const affectedAtributte = attributeRand(type);

    this.bonus = bonus.bonus;
    this.useConditions = condition.useCondition;
    this.type = type;
    this.affectedAtributte = affectedAtributte.bonus;
    this.effect = effect.effect;
    this.penality = affectedAtributte.penality;
    this.effectDescription = effect.description;
    this.durability = durability.durability;
    this.totalPoints =
      bonus.points + effect.points + durability.points + condition.points;
    this.itemRank = itemRankCalculator(this.totalPoints);
  }

  //getters

  get getDgRank() {
    return this.DgRank;
  }

  get getPrice() {
    return this.price;
  }
  get getBonus() {
    return this.bonus;
  }

  get getType() {
    return this.type;
  }
  get getAffectedAtributte() {
    return this.affectedAtributte;
  }

  get getUseCondition() {
    return this.useConditions;
  }

  get getEffect() {
    return this.effect;
  }

  get getDurability() {
    return this.durability;
  }

  get getItemRank() {
    return this.itemRank;
  }

  get getPenality() {
    return this.penality;
  }

  get getEffectDescription() {
    return this.effectDescription;
  }
}

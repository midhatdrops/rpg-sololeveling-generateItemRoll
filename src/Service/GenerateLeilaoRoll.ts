import { attributeRand } from './Rands/Leilao/AttributeRand';
import { bonusRand } from './Rands/Leilao/bonusRand';
import { durabilityRand } from './Rands/Leilao/durabilityRand';
import { effectRand } from './Rands/Leilao/effectRand';
import { TypeRand } from './Rands/Leilao/typeRand';
import { ConditionsRand } from './Rands/Leilao/useConditions';
import { itemRankCalculator } from './Rands/Leilao/itemRankCalculator';

export interface InterfaceGenerateLeilaoRoll {
  bonus?: number;
  type?: string;
  affectedAtributte?: string;
  useCondition?: string;
  effect?: string;
  durability?: number;
  penality?: string;
  effectDescription?: string;
  itemRank?: string;
}

export class GenerateLeilaoRoll {
  private bonus: number = 0;
  private type: string = '';
  private affectedAtributte: string = '';
  private useCondition: string = '';
  private effect: string = '';
  private durability: number = 0;
  private penality: string = '';
  private effectDescription: string = '';
  private itemRank: string = '';
  private totalPoints: number = 0;

  constructor() {
    const bonus = bonusRand();
    const type = TypeRand();
    const affectedAtributte = attributeRand();
    const effect = effectRand(type);
    const useConditions = ConditionsRand(type);
    const durability = durabilityRand();

    this.affectedAtributte = affectedAtributte.bonus;
    this.bonus = bonus.bonus;
    this.effect = effect.effect;
    this.useCondition = useConditions.useCondition;
    this.durability = durability.durability;
    this.totalPoints =
      bonus.points + effect.points + durability.points + useConditions.points;
    this.penality = affectedAtributte.penality;
    this.type = type;
    this.effectDescription = effect.description;

    console.log(
      bonus.points,
      effect.points,
      durability.points,
      useConditions.points
    );

    this.itemRank = itemRankCalculator(this.totalPoints);
  }

  //Getters
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
    return this.useCondition;
  }

  get getEffect() {
    return this.effect;
  }

  get getDurability() {
    return this.durability;
  }

  get getPenality() {
    return this.penality;
  }

  get getEffectDescription() {
    return this.effectDescription;
  }

  get getItemRank() {
    return this.itemRank;
  }

  get getTotalPonts() {
    return this.totalPoints;
  }
}

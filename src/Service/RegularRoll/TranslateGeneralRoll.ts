import { itemRankCalculator } from '../Rands/Leilao/itemRankCalculator';
import { attributeTranslator } from './translators/attributeTranslator';
import { bonusTranslator } from './translators/bonusTranslator';
import { conditionTranslator } from './translators/conditionTranslator';
import { durabilityTranslator } from './translators/durabilityTranslator';
import { effectTranslator } from './translators/effectTranslator';
import { typeTranslator } from './translators/typeTranslator';

export class TranslateGeneralRoll {
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

  constructor(
    bonusRoll: number,
    dgRank: string,
    typeRoll: number,
    durabilityRoll: number,
    effectRoll: number,
    attributeRoll: number,
    conditionsRoll: number
  ) {
    const type = typeTranslator(typeRoll, dgRank);
    const attribute = attributeTranslator(attributeRoll, type);
    const bonus = bonusTranslator(dgRank, bonusRoll);
    const effect = effectTranslator(effectRoll, type);
    const durability = durabilityTranslator(durabilityRoll);
    const conditions = conditionTranslator(type, conditionsRoll);

    this.DgRank = dgRank;
    this.type = type;
    this.bonus = bonus.bonus;
    this.effect = effect.effect;
    this.effectDescription = effect.description;
    this.durability = durability.durability;
    this.penality = attribute.penality;
    this.affectedAtributte = attribute.bonus;
    this.useConditions = conditions.useCondition;

    this.totalPoints =
      bonus.points + effect.points + durability.points + conditions.points;
    this.itemRank = itemRankCalculator(this.totalPoints);
  }

  get getDgRank() {
    return this.DgRank;
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

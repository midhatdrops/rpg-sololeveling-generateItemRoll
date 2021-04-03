import React from 'react';
import './styles/FormRoll1.css';
import { LabelAndInput } from './LabelAndInput';

export interface FormRoll1 {
  bonus: number;
  type: string;
  affectedAtributte: string;
  useCondition: string;
  effect: string;
  durability: number;
}

export const FormRoll1: React.FC<FormRoll1> = ({
  bonus,
  type,
  affectedAtributte,
  useCondition,
  effect,
  durability,
}) => {
  return (
    <div className="FormRoll1">
      <LabelAndInput title="Bônus" value={bonus} />
      <LabelAndInput title="Tipo" value={type} />
      <LabelAndInput title="Atributo Afetado" value={affectedAtributte} />
      <LabelAndInput title="Condições de Uso" value={useCondition} />
      <LabelAndInput title="Efeito" value={effect} />
      <LabelAndInput
        title="Durabilidade"
        value={`${durability}/${durability} Dungeons`}
      />
    </div>
  );
};

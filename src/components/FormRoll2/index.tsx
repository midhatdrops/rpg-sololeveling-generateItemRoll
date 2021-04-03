import React from 'react';
import './styles/FormRoll2.css';
import { LabelAndInput } from '../FormRoll1/LabelAndInput';

interface FormRoll2 {
  penality: string;
  effectDescription: string;
  itemRank: string;
  handleRoll: () => void;
  handleGenerateCode: () => void;
}

export const FormRoll2: React.FC<FormRoll2> = ({
  penality,
  effectDescription,
  itemRank,
  handleRoll,
  handleGenerateCode,
}) => {
  return (
    <div className="FormRoll2">
      <LabelAndInput title="Penalidade" value={penality} />
      <LabelAndInput title="Descrição de Efeito" value={effectDescription} />
      <LabelAndInput title="Rank do Item" value={itemRank} />
      <button
        className="GenerateCodeButton"
        onClick={() => handleGenerateCode()}
      >
        Gerar Código
      </button>
      <button className="GenerateCodeButton" onClick={() => handleRoll()}>
        Rolar Novamente
      </button>
    </div>
  );
};

import React from 'react';
import './InputTranslator.css';

interface InterfaceTranslatorInputs {
  dgRankInput: (value: React.SetStateAction<string>) => void;
  bonusRoll: (value: React.SetStateAction<number>) => void;
  typeRoll: (value: React.SetStateAction<number>) => void;
  attributeRoll: (value: React.SetStateAction<number>) => void;
  conditionRoll: (value: React.SetStateAction<number>) => void;
  effectRoll: (value: React.SetStateAction<number>) => void;
  durabilityRoll: (value: React.SetStateAction<number>) => void;
}

export const TranslatorInputs: React.FC<InterfaceTranslatorInputs> = ({
  dgRankInput,
  bonusRoll,
  typeRoll,
  attributeRoll,
  conditionRoll,
  effectRoll,
  durabilityRoll,
}) => {
  return (
    <>
      <label className="LabelTranslator">Escolha o rank da DG</label>
      <input
        list="dgRanks"
        className="InputTranslator"
        onChange={(e) => dgRankInput(e.target.value)}
      />
      <datalist id="dgRanks">
        <option value="E" />
        <option value="D" />
        <option value="C" />
        <option value="B" />
        <option value="A" />
      </datalist>

      <label className="LabelTranslator">Insira o Roll do Bônus</label>
      <input
        type="number"
        min="1"
        max="10"
        className="InputTranslator"
        onChange={(e) => bonusRoll(Number.parseInt(e.target.value))}
      />

      <label className="LabelTranslator">Insira o Roll do Tipo</label>
      <input
        type="number"
        min="1"
        max="9"
        className="InputTranslator"
        onChange={(e) => typeRoll(Number.parseInt(e.target.value))}
      />

      <label className="LabelTranslator">Insira o Roll do Atributo</label>
      <input
        type="number"
        min="1"
        max="10"
        className="InputTranslator"
        onChange={(e) => attributeRoll(Number.parseInt(e.target.value))}
      />

      <label className="LabelTranslator">Insira o Roll da Condição</label>
      <input
        type="number"
        min="1"
        max="13"
        className="InputTranslator"
        onChange={(e) => conditionRoll(Number.parseInt(e.target.value))}
      />

      <label className="LabelTranslator">Insira o Roll do Efeito</label>
      <input
        type="number"
        min="1"
        max="13"
        className="InputTranslator"
        onChange={(e) => effectRoll(Number.parseInt(e.target.value))}
      />

      <label className="LabelTranslator">Insira o Roll de Durabilidade</label>
      <input
        type="number"
        min="1"
        max="13"
        className="InputTranslator"
        onChange={(e) => durabilityRoll(Number.parseInt(e.target.value))}
      />
    </>
  );
};

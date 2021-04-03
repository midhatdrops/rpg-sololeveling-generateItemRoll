import React, { useState } from 'react';
import { TranslatorInputs } from '../../components/Regular/TranslatorInput';
import { generatePostCode } from '../../Utils/generatePostCode';
import { TranslateGeneralRoll } from '../../Service/RegularRoll/TranslateGeneralRoll';
import './translator.css';
import { Navbar } from '../../components/navbar';

export function Translator() {
  const [dgRank, SetDgRank] = useState('');
  const [bonusRoll, SetBonusRoll] = useState(1);
  const [typeRoll, SetTypeRoll] = useState(1);
  const [attributeRoll, SetAttributeRoll] = useState(1);
  const [conditionRoll, SetConditionRoll] = useState(1);
  const [effectRoll, SetEffectRoll] = useState(1);
  const [durabilityRoll, SetDurabilityRoll] = useState(1);
  const [code, SetCode] = useState('');
  function handleGenerateCode() {
    const newItem = new TranslateGeneralRoll(
      bonusRoll,
      dgRank,
      typeRoll,
      durabilityRoll,
      effectRoll,
      attributeRoll,
      conditionRoll
    );
    const newCode = generatePostCode(newItem);
    SetCode(newCode);
    const copyCode = document.createElement('textarea');
    copyCode.style.width = '100px';
    copyCode.value = newCode;
    document.body.appendChild(copyCode);
    copyCode.select();
    document.execCommand('copy');
    alert('Código copiado !');
    document.body.removeChild(copyCode);
  }
  return (
    <div className="Translator">
      <Navbar />
      <div className="inputArea1">
        <TranslatorInputs
          dgRankInput={SetDgRank}
          bonusRoll={SetBonusRoll}
          attributeRoll={SetAttributeRoll}
          typeRoll={SetTypeRoll}
          conditionRoll={SetConditionRoll}
          durabilityRoll={SetDurabilityRoll}
          effectRoll={SetEffectRoll}
        />
      </div>
      <div className="GenerateCodeArea">
        <button
          className="GenerateCodeButton"
          onClick={() => handleGenerateCode()}
        >
          GenerateCode
        </button>
        {code}
      </div>
    </div>
  );
}

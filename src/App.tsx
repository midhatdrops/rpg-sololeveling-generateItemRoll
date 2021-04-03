// import React, { ButtonHTMLAttributes, useState } from 'react';
// import './style/app.css';
// import { FormRoll1 } from './components/FormRoll1';
// import { FormRoll2 } from './components/FormRoll2';
// import { GeneratedCode } from './components/GeneratedCode';
// import { LogoHeader } from './components/LogoHeader';
// import { generatePostCode } from './Utils/generatePostCode';

// import {
//   GenerateLeilaoRoll,
//   InterfaceGenerateLeilaoRoll,
// } from './Service/GenerateLeilaoRoll';

// function App() {
//   const [newItem, SetNewItem] = useState(new GenerateLeilaoRoll());
//   const [code, SetCode] = useState('');
//   function handleGenerateCode() {
//     const newCode = generatePostCode(newItem);
//     SetCode(newCode);
//     const copyCode = document.createElement('textarea');
//     copyCode.style.width = '100px';
//     copyCode.value = newCode;
//     document.body.appendChild(copyCode);
//     copyCode.select();
//     document.execCommand('copy');
//     alert('Código copiado !');
//     document.body.removeChild(copyCode);
//   }
//   function handleRoll(): void {
//     const model = new GenerateLeilaoRoll();
//     SetNewItem(model);
//   }

//   return (
//     <div className="App">
//       {/* <LogoHeader /> */}
//       <FormRoll1
//         bonus={newItem.getBonus}
//         type={newItem.getType}
//         affectedAtributte={newItem.getAffectedAtributte}
//         durability={newItem.getDurability}
//         effect={newItem.getEffect}
//         useCondition={newItem.getUseCondition}
//       />
//       <FormRoll2
//         effectDescription={newItem.getEffectDescription}
//         itemRank={newItem.getItemRank}
//         penality={newItem.getPenality}
//         handleRoll={handleRoll}
//         handleGenerateCode={handleGenerateCode}
//       />
//       <GeneratedCode code={code} />
//     </div>
//   );
// }

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Leilao } from './pages/leilao';
import { Translator } from './pages/translator/translator';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/rpg-sololeveling-generateitemroll"
          component={Translator}
        />
        <Route
          path="/rpg-sololeveling-generateitemroll/leilao"
          component={Leilao}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

import { GenerateLeilaoRoll } from '../Service/GenerateLeilaoRoll';
import { GenerateRegularRoll } from '../Service/GenerateRegularRoll';
import { TranslateGeneralRoll } from '../Service/RegularRoll/TranslateGeneralRoll';

export function generatePostCode(
  newItem: GenerateLeilaoRoll | GenerateRegularRoll | TranslateGeneralRoll
) {
  //prettier-ignore
  return `<center><small>[b]SUBSTITUIR O NOME PELO LEILOEIRO[/b] escreveu:</small>
  TEXTO DE DESCRIÇÃO
  <img src="URL DA IMAGEM" style="width: 80%; height: auto;" alt="Nome do item"/>
  [b]Descrição:[/b] INSERIR DESCRIÇÃO

  [b]Nome:[/b]
  [b]Rank do Item:[/b] ${newItem.getItemRank}
  [b]Tipo do Item:[/b] ${newItem.getType}
  [b]Bônus:[/b]${newItem.getBonus}
  [b]Atributo Bonificado:[/b] ${newItem.getAffectedAtributte}
  [b]Condição de Uso:[/b] ${newItem.getUseCondition}
  [b]Efeito:[/b] ${newItem.getEffect}
  [b]Descrição do efeito:[/b] ${newItem.getEffectDescription}
  [b]Penalidade:[/b] ${newItem.getPenality}
  [b]Durabilidade:[/b]${newItem.getDurability}
  [b]Valor:[/b] Definir
  </center>`
}

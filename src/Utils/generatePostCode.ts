import { GenerateLeilaoRoll } from '../Service/GenerateLeilaoRoll';

export function generatePostCode(newItem: GenerateLeilaoRoll) {
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

// Informações detalhadas sobre a classe Bucaneiro para o sistema Ghanor RPG

// Definição do objeto bucaneiro com os dados da classe
const bucaneiro = {
  "id": "bucaneiro",
  "name": "Bucaneiro",
  "description": "Aventureiros marítimos que combinam perícia em combate naval com um espírito livre e sedento por aventuras. Mestres na navegação e em lutar com agilidade e astúcia.",
  "flavor_text": "Os bucaneiros são os lobos do mar, navegadores experientes que conhecem os segredos dos oceanos e dos portos ao redor do mundo. Sua vida é uma busca constante por liberdade, riquezas e histórias para contar em tavernas portuárias.",
  "cultural_text": "Em Ghanor, bucaneiros são vistos com uma mistura de admiração e receio. Enquanto alguns servem como mercadores legítimos ou caçadores de recompensas navais, outros recorrem à pirataria, formando tripulações que desafiam leis e fronteiras marítimas.",
  "base_stats": {
    "hit_points": {
      "base": 14,
      "per_level": 3,
      "bonus": "Constituição"
    },
    "mana_points": {
      "per_level": 3,
      "bonus": "Carisma"
    }
  },
  "proficiencies": {
    "weapons": [
      "Armas simples",
      "Armas marciais leves",
      "Armas de fogo"
    ],
    "armor": [
      "Armaduras leves"
    ]
  },
  "skills": {
    "fixed": [
      "Acrobacia (Des)",
      "Jogatina (Car)"
    ],
    "choices": {
      "amount": 4,
      "from": [
        "Atletismo (For)",
        "Enganação (Car)",
        "Fortitude (Con)",
        "Intimidação (Car)",
        "Ladinagem (Des)",
        "Luta (For)",
        "Navegação (Int)",
        "Percepção (Sab)",
        "Pontaria (Des)",
        "Reflexos (Des)"
      ]
    }
  },
  "abilities": {
    "1": [
      {
        "name": "Audácia",
        "type": "active",
        "effects": {
          "description": "Recebe +2 em testes de perícia e testes de ataque quando realiza ações arriscadas ou improváveis",
          "cost": "2 PM",
          "duration": "1 rodada"
        }
      },
      {
        "name": "Especialidade Marítima",
        "type": "passive",
        "effects": {
          "description": "Recebe +5 em testes relacionados a navios e navegação, e pode realizar manobras impressionantes em combate naval"
        }
      }
    ],
    "20": [
      {
        "name": "Senhor dos Mares",
        "type": "passive",
        "effects": {
          "description": "Pode usar qualquer poder de Bucaneiro sem gastar PM e criticaliza com 18-20 quando usa armas de uma mão ou de fogo"
        }
      }
    ]
  },
  "powers": {
    "progression": {
      "start_level": 2,
      "frequency": "every_level"
    },
    "list": [
      {
        "name": "Aumento de Atributo",
        "type": "attribute",
        "effects": {
          "description": "+1 em um atributo",
          "reselectable": true
        }
      },
      {
        "name": "Combate com Duas Armas",
        "type": "combat",
        "effects": {
          "description": "Reduz a penalidade por lutar com duas armas em 2",
          "passive": true
        }
      },
      {
        "name": "Contatos no Porto",
        "type": "social",
        "effects": {
          "description": "Em qualquer cidade portuária, pode encontrar informantes e contatos que oferecem informações ou itens com 20% de desconto"
        }
      },
      {
        "name": "Pistoleiro",
        "type": "combat",
        "effects": {
          "description": "Pode recarregar armas de fogo como ação livre e ignora a penalidade de -2 por usar armas de fogo em combate corpo a corpo"
        }
      },
      {
        "name": "Sorte de Marujo",
        "type": "passive",
        "effects": {
          "description": "Uma vez por cena, pode rolar novamente um teste recém realizado e ficar com o melhor resultado",
          "cost": "3 PM"
        }
      }
    ]
  }
};

// Certificando-se de que processarClasse está definido antes de chamá-lo
if (typeof processarClasse === 'function') {
  // Processar a classe para o formato esperado pelo sistema
  processarClasse('bucaneiro', bucaneiro);
} else {
  // Se a função não estiver disponível, adicionar um listener para quando estiver
  document.addEventListener('DOMContentLoaded', function() {
    if (typeof processarClasse === 'function') {
      processarClasse('bucaneiro', bucaneiro);
    } else {
      console.error('Função processarClasse não encontrada para processamento da classe Bucaneiro');
    }
  });
} 
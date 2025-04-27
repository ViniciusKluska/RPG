// Informações detalhadas sobre a classe Nobre para o sistema Ghanor RPG

// Definição do objeto nobre com os dados da classe
const nobre = {
  "id": "nobre",
  "name": "Nobre",
  "description": "Membros da aristocracia ou líderes políticos que utilizam influência, conhecimento e recursos para alcançar seus objetivos. São mestres da diplomacia, estratégia e comando.",
  "flavor_text": "Os nobres representam o poder político e social em Ghanor. De príncipes a governadores de províncias, eles carregam o fardo da liderança e da responsabilidade pelo bem-estar de seus súditos, embora nem todos estejam à altura do desafio.",
  "cultural_text": "Em Ghanor, a nobreza forma a estrutura de poder da sociedade, desde pequenos barões locais até os membros da corte real. Embora a maioria governe por herança, alguns alcançam posições de nobreza por mérito ou serviços prestados à coroa.",
  "base_stats": {
    "hit_points": {
      "base": 12,
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
      "Armas marciais de uma mão",
      "Armas de duelo"
    ],
    "armor": [
      "Armaduras leves e médias"
    ]
  },
  "skills": {
    "fixed": [
      "Diplomacia (Car)",
      "Nobreza (Int)"
    ],
    "choices": {
      "amount": 6,
      "from": [
        "Atuação (Car)",
        "Cavalgar (Des)",
        "Conhecimento (Int)",
        "Enganação (Car)",
        "Guerra (Int)",
        "História (Int)",
        "Intuição (Sab)",
        "Intimidação (Car)",
        "Jogatina (Car)",
        "Luta (For)",
        "Percepção (Sab)"
      ]
    }
  },
  "abilities": {
    "1": [
      {
        "name": "Autoridade",
        "type": "active",
        "effects": {
          "description": "Pode dar ordens que devem ser obedecidas por aqueles que o reconhecem como autoridade",
          "cost": "2 PM",
          "save": "Vontade CD Car",
          "duration": "Cena"
        }
      },
      {
        "name": "Educação Privilegiada",
        "type": "passive",
        "effects": {
          "description": "Recebe +2 em todos os testes de perícias baseadas em Inteligência e pode rolar testes mesmo sem treinamento"
        }
      }
    ],
    "20": [
      {
        "name": "Liderança Lendária",
        "type": "passive",
        "effects": {
          "description": "Aliados dentro de sua aura recebem ações adicionais e imunidade a efeitos de medo, além de regeneração de 5 PV por rodada"
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
        "name": "Aura de Comando",
        "type": "aura",
        "effects": {
          "description": "Aliados em alcance curto recebem +1 em testes de ataque e resistência",
          "cost": "2 PM",
          "duration": "Cena"
        }
      },
      {
        "name": "Conexões Privilegiadas",
        "type": "social",
        "effects": {
          "description": "Pode pedir favores a autoridades locais e tem acesso a lugares restritos mediante sua posição social"
        }
      },
      {
        "name": "Duelo de Honra",
        "type": "combat",
        "effects": {
          "description": "Em combate um contra um, recebe +2 em ataques e CA",
          "cost": "1 PM",
          "duration": "Cena"
        }
      },
      {
        "name": "Fortuna",
        "type": "passive",
        "effects": {
          "description": "Começa o jogo com o dobro do dinheiro inicial e recebe 50% a mais de recompensas financeiras"
        }
      }
    ]
  }
};

// Certificando-se de que processarClasse está definido antes de chamá-lo
if (typeof processarClasse === 'function') {
  // Processar a classe para o formato esperado pelo sistema
  processarClasse('nobre', nobre);
} else {
  // Se a função não estiver disponível, adicionar um listener para quando estiver
  document.addEventListener('DOMContentLoaded', function() {
    if (typeof processarClasse === 'function') {
      processarClasse('nobre', nobre);
    } else {
      console.error('Função processarClasse não encontrada para processamento da classe Nobre');
    }
  });
} 
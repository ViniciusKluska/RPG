// Informações detalhadas sobre a classe Cavaleiro para o sistema Ghanor RPG

// Definição do objeto cavaleiro com os dados da classe
const cavaleiro = {
  "id": "cavaleiro",
  "name": "Cavaleiro",
  "description": "Guerreiros nobres e honrados que juram proteger um reino, uma fé ou um ideal. Mestres em combate montado e especializados no uso de armaduras pesadas e técnicas defensivas.",
  "flavor_text": "Os cavaleiros representam a honra e o dever acima de tudo. Treinados desde jovens nas artes da guerra, seguem um rigoroso código de conduta que guia suas ações. Sua coragem e lealdade são lendárias e inspiram aqueles ao seu redor.",
  "cultural_text": "Em Ghanor, cavaleiros formam a espinha dorsal dos exércitos reais e das ordens militares. São figuras respeitadas na sociedade, muitas vezes recebendo títulos de nobreza e terras por seus serviços. Ordens de cavalaria protegem rotas de comércio e fronteiras.",
  "base_stats": {
    "hit_points": {
      "base": 16,
      "per_level": 4,
      "bonus": "Constituição"
    },
    "mana_points": {
      "per_level": 2,
      "bonus": "Carisma"
    }
  },
  "proficiencies": {
    "weapons": [
      "Todas as armas marciais"
    ],
    "armor": [
      "Todas as armaduras",
      "Escudos"
    ]
  },
  "skills": {
    "fixed": [
      "Cavalgar (Des)",
      "Luta (For)"
    ],
    "choices": {
      "amount": 3,
      "from": [
        "Adestramento (Car)",
        "Atletismo (For)",
        "Diplomacia (Car)",
        "Fortitude (Con)",
        "Guerra (Int)",
        "Intimidação (Car)",
        "Nobreza (Int)",
        "Percepção (Sab)"
      ]
    }
  },
  "abilities": {
    "1": [
      {
        "name": "Código de Honra",
        "type": "passive",
        "effects": {
          "description": "Segue um rígido código de conduta, recebendo +2 em testes de resistência contra efeitos mentais"
        }
      },
      {
        "name": "Montaria Especial",
        "type": "companion",
        "effects": {
          "description": "Recebe uma montaria treinada que compartilha um vínculo especial com o cavaleiro",
          "bonuses": "A montaria tem +2 em todos os atributos e deslocamento +3m"
        }
      }
    ],
    "20": [
      {
        "name": "Campeão da Justiça",
        "type": "passive",
        "effects": {
          "description": "Uma vez por dia, quando reduzido a 0 PV, pode continuar lutando por 1 rodada e recupera 50 PV"
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
        "name": "Carga de Cavalaria",
        "type": "combat",
        "effects": {
          "description": "Quando faz uma investida montada, causa dano dobrado",
          "cost": "2 PM"
        }
      },
      {
        "name": "Escudo Protetor",
        "type": "combat",
        "effects": {
          "description": "Enquanto empunhar um escudo, recebe +2 de resistência a dano",
          "cost": "1 PM",
          "duration": "Cena"
        }
      },
      {
        "name": "Inspirar Coragem",
        "type": "support",
        "effects": {
          "description": "Aliados em alcance médio recebem +1 em testes de ataque e resistência",
          "cost": "2 PM",
          "duration": "Cena"
        },
        "prerequisites": {
          "level": 6
        }
      },
      {
        "name": "Vínculo da Montaria",
        "type": "passive",
        "effects": {
          "description": "Você e sua montaria compartilham PM e rolam iniciativa juntos"
        }
      }
    ]
  }
};

// Certificando-se de que processarClasse está definido antes de chamá-lo
if (typeof processarClasse === 'function') {
  // Processar a classe para o formato esperado pelo sistema
  processarClasse('cavaleiro', cavaleiro);
} else {
  // Se a função não estiver disponível, adicionar um listener para quando estiver
  document.addEventListener('DOMContentLoaded', function() {
    if (typeof processarClasse === 'function') {
      processarClasse('cavaleiro', cavaleiro);
    } else {
      console.error('Função processarClasse não encontrada para processamento da classe Cavaleiro');
    }
  });
} 
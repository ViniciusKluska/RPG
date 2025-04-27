// Informações detalhadas sobre a classe Mago para o sistema Ghanor RPG

// Definição do objeto mago com os dados da classe
const mago = {
  "id": "mago",
  "name": "Mago",
  "description": "O mago é uma figura de poder e mistério, mestre de segredos antigos. Com seus feitiços, pode controlar diversos aspectos da realidade, desde manifestar chamas e relâmpagos até alterar a forma de objetos e criaturas.",
  "flavor_text": "Por seu enorme poder, a magia é uma força temida e cobiçada. Aqueles que se arvoram por conhecimento e poder arcano têm um caminho árduo a percorrer, muitas vezes perigoso, quase sempre solitário. Mesmo assim, tornar-se capaz de controlar e moldar o mundo ao seu bel prazer usando as artes místicas ainda é o sonho de muitos, e o destino de poucos.",
  "cultural_text": "A maioria dos conjuradores ocupa uma posição de destaque na sociedade, agindo como conselheiros para regentes ou sendo eles mesmos figuras de autoridade política. Muitas são as fontes de poder de um mago, e os meios para acessar a magia seguem tradições obscuras que se ramificaram e se transformaram ao longo das eras.",
  "base_stats": {
    "hit_points": {
      "base": 8,
      "per_level": 2,
      "bonus": "Constituição"
    },
    "mana_points": {
      "per_level": 5,
      "bonus": "Inteligência"
    }
  },
  "proficiencies": {},
  "skills": {
    "fixed": [
      "Misticismo (Int)",
      "Vontade (Sab)"
    ],
    "choices": {
      "amount": 2,
      "from": [
        "Conhecimento (Int)",
        "Diplomacia (Car)",
        "Enganação (Car)",
        "Guerra (Int)",
        "Iniciativa (Des)",
        "Intimidação (Car)",
        "Intuição (Sab)",
        "Investigação (Int)",
        "Nobreza (Int)",
        "Ofício (Int)",
        "Percepção (Sab)"
      ]
    }
  },
  "abilities": {
    "1": [
      {
        "name": "Magias",
        "type": "spellcasting",
        "effects": {
          "description": "Pode lançar magias arcanas",
          "initial_spells": "Três magias de 1º círculo",
          "spells_per_level": "Uma nova magia por nível",
          "circles": {
            "1": "Nível 1",
            "2": "Nível 5",
            "3": "Nível 9",
            "4": "Nível 13",
            "5": "Nível 17"
          },
          "spellcasting": {
            "attribute": "Inteligência"
          }
        }
      },
      {
        "name": "Tradição Arcana",
        "type": "choice",
        "effects": {
          "description": "Escolha uma tradição arcana que define sua fonte de poder",
          "options": [
            {
              "name": "Abissal",
              "price": "Teste de Vontade (CD 15 + PM) ao usar aprimoramentos ou perde PM"
            },
            {
              "name": "Elemental",
              "price": "Escolha um tipo de dano (ácido, eletricidade, fogo ou frio). Não pode aprender magias dos outros tipos"
            },
            {
              "name": "Erudita",
              "price": "Precisa memorizar magias através de estudo diário do grimório"
            },
            {
              "name": "Onírica",
              "price": "Recupera apenas PV ou PM por descanso"
            },
            {
              "name": "Rústica",
              "price": "Precisa de fetiche para lançar magias"
            }
          ]
        }
      }
    ],
    "20": [
      {
        "name": "Alta Arcana",
        "type": "passive",
        "effects": {
          "description": "Reduz custo de magias pela metade"
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
        "name": "Conhecimento Mágico",
        "type": "magic",
        "effects": {
          "description": "Aprende duas magias de qualquer círculo que possa lançar",
          "reselectable": true
        }
      },
      {
        "name": "Conhecimento Proibido",
        "type": "magic",
        "effects": {
          "description": "Aprende uma magia de qualquer tradição"
        },
        "prerequisites": {
          "skills": [
            "Treinado em Conhecimento"
          ]
        }
      }
    ]
  }
};

// Certificando-se de que processarClasse está definido antes de chamá-lo
if (typeof processarClasse === 'function') {
  // Processar a classe para o formato esperado pelo sistema
  processarClasse('mago', mago);
} else {
  // Se a função não estiver disponível, adicionar um listener para quando estiver
  document.addEventListener('DOMContentLoaded', function() {
    if (typeof processarClasse === 'function') {
      processarClasse('mago', mago);
    } else {
      console.error('Função processarClasse não encontrada para processamento da classe Mago');
    }
  });
} 
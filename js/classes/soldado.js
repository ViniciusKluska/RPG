// Informações detalhadas sobre a classe Soldado para o sistema Ghanor RPG

// Definição do objeto soldado com os dados da classe
const soldado = {
  "id": "soldado",
  "name": "Soldado",
  "description": "Guerreiros treinados nas artes da guerra que servem em exércitos regulares ou como mercenários. Especializados em combate organizado e táticas militares.",
  "flavor_text": "Os soldados são a força vital de qualquer nação. Passam por rigoroso treinamento para dominar armas, táticas e estratégias de guerra. Sua disciplina e tenacidade os tornam formidáveis em campo de batalha.",
  "cultural_text": "Em Ghanor, soldados formam a base dos exércitos reais e das forças de defesa das cidades. De sentinelas urbanas a infantaria pesada, eles garantem a paz e defendem as fronteiras contra invasores e criaturas perigosas.",
  "base_stats": {
    "hit_points": {
      "base": 16,
      "per_level": 4,
      "bonus": "Constituição"
    },
    "mana_points": {
      "per_level": 2,
      "bonus": "Inteligência"
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
      "Luta (For)",
      "Fortitude (Con)"
    ],
    "choices": {
      "amount": 4,
      "from": [
        "Adestramento (Car)",
        "Atletismo (For)",
        "Cavalgar (Des)",
        "Guerra (Int)",
        "Iniciativa (Des)",
        "Intimidação (Car)",
        "Ofício (Int)",
        "Percepção (Sab)",
        "Pontaria (Des)",
        "Reflexos (Des)"
      ]
    }
  },
  "abilities": {
    "1": [
      {
        "name": "Treinamento Militar",
        "type": "passive",
        "effects": {
          "description": "Pode usar armas com propriedade pesada sem penalidades e recebe +2 em testes de luta quando usa armas marciais"
        }
      },
      {
        "name": "Especialização em Armas",
        "type": "choice",
        "effects": {
          "description": "Escolha um grupo de armas (espadas, machados, martelos, lanças, etc.). Você recebe +2 em testes de ataque e +1d4 de dano com estas armas",
          "options": [
            {
              "name": "Espadas",
              "price": "Inclui espadas curtas, longas, montantes, etc."
            },
            {
              "name": "Machados",
              "price": "Inclui machados de uma mão, de batalha, grandes, etc."
            },
            {
              "name": "Martelos",
              "price": "Inclui maças, martelos de guerra, marretas, etc."
            },
            {
              "name": "Lanças",
              "price": "Inclui lanças, alabardas, piques, etc."
            },
            {
              "name": "Arcos",
              "price": "Inclui arcos curtos, longos e compostos"
            }
          ]
        }
      }
    ],
    "20": [
      {
        "name": "Mestre de Armas",
        "type": "passive",
        "effects": {
          "description": "Dobra a margem de crítico com todas as armas (geralmente para 19-20) e pode realizar ataques especiais sem gastar PM"
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
        "name": "Ataque Poderoso",
        "type": "combat",
        "effects": {
          "description": "Pode receber -2 em testes de ataque para causar +4 de dano",
          "passive": true
        }
      },
      {
        "name": "Durão",
        "type": "passive",
        "effects": {
          "description": "Recebe +5 PV e +2 em testes de Fortitude"
        }
      },
      {
        "name": "Golpe Devastador",
        "type": "combat",
        "effects": {
          "description": "Causa dano duplo em um ataque corpo a corpo",
          "cost": "4 PM"
        },
        "prerequisites": {
          "level": 5
        }
      },
      {
        "name": "Tática Militar",
        "type": "aura",
        "effects": {
          "description": "Aliados em alcance curto recebem +1 em testes de ataque e dano",
          "cost": "2 PM",
          "duration": "Cena"
        },
        "prerequisites": {
          "skills": [
            "Treinado em Guerra"
          ]
        }
      }
    ]
  }
};

// Certificando-se de que processarClasse está definido antes de chamá-lo
if (typeof processarClasse === 'function') {
  // Processar a classe para o formato esperado pelo sistema
  processarClasse('soldado', soldado);
} else {
  // Se a função não estiver disponível, adicionar um listener para quando estiver
  document.addEventListener('DOMContentLoaded', function() {
    if (typeof processarClasse === 'function') {
      processarClasse('soldado', soldado);
    } else {
      console.error('Função processarClasse não encontrada para processamento da classe Soldado');
    }
  });
} 
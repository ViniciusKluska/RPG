// Informações detalhadas sobre a classe Bárbaro para o sistema Ghanor RPG

// Definição do objeto barbaro com os dados da classe
const barbaro = {
  "id": "barbaro",
  "name": "Bárbaro",
  "description": "Guerreiros selvagens que canalizam sua fúria interior para se tornarem máquinas de combate imparáveis. Enquanto estiver enfurecido, um bárbaro ignora ferimentos que derrubariam outros combatentes.",
  "flavor_text": "Os bárbaros são guerreiros que abraçam sua fúria interior, um poder primal que lhes concede força, resistência e velocidade sobre-humanas. Durante o combate, entram em um estado de fúria que os torna praticamente insensíveis à dor e multiplicam sua força.",
  "cultural_text": "Em Ghanor, bárbaros geralmente vêm de tribos nômades das planícies do norte ou das montanhas, onde a sobrevivência depende da força e do espírito indomável. Muitos são vistos com desconfiança em áreas civilizadas devido à sua natureza imprevisível.",
  "base_stats": {
    "hit_points": {
      "base": 16,
      "per_level": 4,
      "bonus": "Constituição"
    },
    "mana_points": {
      "per_level": 2,
      "bonus": "Sabedoria"
    }
  },
  "proficiencies": {
    "weapons": [
      "Todas as armas corpo a corpo"
    ],
    "armor": [
      "Armaduras leves e médias"
    ]
  },
  "skills": {
    "fixed": [
      "Atletismo (For)",
      "Intimidação (Car)"
    ],
    "choices": {
      "amount": 2,
      "from": [
        "Adestramento (Car)",
        "Luta (For)",
        "Fortitude (Con)",
        "Percepção (Sab)",
        "Sobrevivência (Sab)"
      ]
    }
  },
  "abilities": {
    "1": [
      {
        "name": "Fúria",
        "type": "active",
        "effects": {
          "description": "Entra em estado de fúria, ganhando +2 em ataques corpo a corpo e testes de Força, além de redução de dano 2",
          "cost": "2 PM",
          "duration": "3 rodadas"
        }
      },
      {
        "name": "Instinto Selvagem",
        "type": "passive",
        "effects": {
          "description": "Recebe +2 em testes de Percepção e Sobrevivência, e sempre age no primeiro turno de combate"
        }
      }
    ],
    "20": [
      {
        "name": "Fúria Suprema",
        "type": "passive",
        "effects": {
          "description": "Redução de dano aumenta para 5 durante a Fúria, e você pode usar Fúria como ação livre"
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
          "description": "Causa +2 de dano com ataques corpo a corpo durante a Fúria"
        }
      },
      {
        "name": "Resistência à Dor",
        "type": "combat",
        "effects": {
          "description": "Redução de dano aumenta em +1 durante a Fúria",
          "reselectable": true
        }
      },
      {
        "name": "Golpe Devastador",
        "type": "combat",
        "effects": {
          "description": "Gasta 2 PM para causar dano dobrado em um ataque corpo a corpo"
        },
        "prerequisites": {
          "level": 5
        }
      },
      {
        "name": "Vigor Inabalável",
        "type": "passive",
        "effects": {
          "description": "Recupera 2 PV por nível ao terminar um descanso curto"
        }
      }
    ]
  }
};

// Certificando-se de que processarClasse está definido antes de chamá-lo
if (typeof processarClasse === 'function') {
  // Processar a classe para o formato esperado pelo sistema
  processarClasse('barbaro', barbaro);
} else {
  // Se a função não estiver disponível, adicionar um listener para quando estiver
  document.addEventListener('DOMContentLoaded', function() {
    if (typeof processarClasse === 'function') {
      processarClasse('barbaro', barbaro);
    } else {
      console.error('Função processarClasse não encontrada para processamento da classe Bárbaro');
    }
  });
} 
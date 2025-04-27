// Informações detalhadas sobre a classe Druida para o sistema Ghanor RPG

// Definição do objeto druida com os dados da classe
const druida = {
  "id": "druida",
  "name": "Druida",
  "description": "Guardiões da natureza que canalizam a magia da terra, dos animais e das plantas. Podem se comunicar com criaturas naturais e assumir formas animais para explorar, lutar ou sobreviver.",
  "flavor_text": "Os druidas são os protetores do equilíbrio natural, vivendo em harmonia com a terra e todos os seus elementos. Dominam magias elementais e possuem um vínculo único com as criaturas selvagens, sendo respeitados e temidos em terras civilizadas.",
  "cultural_text": "Em Ghanor, druidas frequentemente vivem isolados em florestas antigas, montanhas remotas ou pântanos misteriosos. Formam círculos que defendem territórios específicos contra ameaças. São frequentemente consultados por comunidades rurais sobre colheitas e fenômenos naturais.",
  "base_stats": {
    "hit_points": {
      "base": 12,
      "per_level": 3,
      "bonus": "Constituição"
    },
    "mana_points": {
      "per_level": 4,
      "bonus": "Sabedoria"
    }
  },
  "proficiencies": {
    "weapons": [
      "Adagas",
      "Arcos",
      "Cajados",
      "Foices"
    ],
    "armor": [
      "Armaduras leves não metálicas",
      "Escudos não metálicos"
    ]
  },
  "skills": {
    "fixed": [
      "Sobrevivência (Sab)",
      "Natureza (Int)"
    ],
    "choices": {
      "amount": 4,
      "from": [
        "Adestramento (Car)",
        "Atletismo (For)", 
        "Cavalgar (Des)",
        "Cura (Sab)",
        "Fortitude (Con)",
        "Intuição (Sab)",
        "Misticismo (Int)",
        "Percepção (Sab)",
        "Vontade (Sab)"
      ]
    }
  },
  "abilities": {
    "1": [
      {
        "name": "Magias",
        "type": "spellcasting",
        "effects": {
          "description": "Pode lançar magias prímais (naturais)",
          "initial_spells": "Três magias de 1º círculo",
          "spells_per_level": "Uma nova magia por nível",
          "circles": {
            "1": "Nível 1",
            "3": "Nível 5",
            "5": "Nível 9",
            "7": "Nível 13",
            "9": "Nível 17"
          },
          "spellcasting": {
            "attribute": "Sabedoria"
          }
        }
      },
      {
        "name": "Forma Selvagem",
        "type": "active",
        "effects": {
          "description": "Pode se transformar em um animal de tamanho pequeno, médio ou grande",
          "cost": "3 PM",
          "duration": "Cena"
        }
      }
    ],
    "20": [
      {
        "name": "Mestre da Natureza",
        "type": "passive",
        "effects": {
          "description": "Pode usar Forma Selvagem como ação livre, transforma-se em qualquer animal e ganha imunidade a elementos naturais"
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
        "name": "Companheiro Animal",
        "type": "companion",
        "effects": {
          "description": "Ganha um animal companheiro que obedece a comandos simples"
        }
      },
      {
        "name": "Conhecimento Natural",
        "type": "spells",
        "effects": {
          "description": "Aprende duas magias adicionais da lista de druida",
          "reselectable": true
        }
      },
      {
        "name": "Forma Elemental",
        "type": "active",
        "effects": {
          "description": "Pode se transformar em um elemental pequeno ou médio",
          "cost": "5 PM",
          "duration": "Cena"
        },
        "prerequisites": {
          "level": 8
        }
      },
      {
        "name": "Vínculo com a Terra",
        "type": "passive",
        "effects": {
          "description": "Recupera 2 PM por rodada enquanto estiver em contato direto com a terra"
        },
        "prerequisites": {
          "level": 6
        }
      }
    ]
  }
};

// Certificando-se de que processarClasse está definido antes de chamá-lo
if (typeof processarClasse === 'function') {
  // Processar a classe para o formato esperado pelo sistema
  processarClasse('druida', druida);
} else {
  // Se a função não estiver disponível, adicionar um listener para quando estiver
  document.addEventListener('DOMContentLoaded', function() {
    if (typeof processarClasse === 'function') {
      processarClasse('druida', druida);
    } else {
      console.error('Função processarClasse não encontrada para processamento da classe Druida');
    }
  });
} 
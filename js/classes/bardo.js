// Informações detalhadas sobre a classe Bardo para o sistema Ghanor RPG

// Definição do objeto bardo com os dados da classe
const bardo = {
  "id": "bardo",
  "name": "Bardo",
  "description": "Artistas que vagam pelo mundo movidos por uma curiosidade insaciável e um desejo de descobrir, ou testemunhar, histórias para imortalizar com sua arte. Sejam poetas, músicos ou atores em um circo, bardos possuem um espírito livre e criativo.",
  "flavor_text": "Bardos estão sempre indo de um lugar a outro e se sentem confortáveis em qualquer ambiente, de uma taverna esfumaçada em um porto aos mais finos salões da nobreza. Em suas andanças, bardos aprendem de tudo um pouco, o que permite que reúnam um grande repertório de habilidades.",
  "cultural_text": "A versatilidade de um bardo permite que ele desempenhe vários papéis, de conselheiro a historiador, de mensageiro a espião. Fiéis ao seu desejo de experimentar o mundo, muitos bardos acabam fazendo de tudo um pouco.",
  "base_stats": {
    "hit_points": {
      "base": 12,
      "per_level": 3,
      "bonus": "Constituição"
    },
    "mana_points": {
      "per_level": 4,
      "bonus": "Carisma"
    }
  },
  "proficiencies": {
    "weapons": [
      "Armas marciais"
    ]
  },
  "skills": {
    "fixed": [
      "Atuação (Car)",
      "Reflexos (Des)"
    ],
    "choices": {
      "amount": 6,
      "from": [
        "Acrobacia (Des)",
        "Cavalgar (Des)",
        "Conhecimento (Int)",
        "Diplomacia (Car)",
        "Enganação (Car)",
        "Furtividade (Des)",
        "Iniciativa (Des)",
        "Intuição (Sab)",
        "Investigação (Int)",
        "Ladinagem (Des)",
        "Percepção (Sab)"
      ]
    }
  },
  "abilities": {
    "1": [
      {
        "name": "Inspiração",
        "type": "active",
        "effects": {
          "description": "Concede bônus em testes de perícias para você e aliados",
          "cost": "2 PM e uma ação padrão",
          "duration": "Cena"
        }
      },
      {
        "name": "Magias",
        "type": "spellcasting",
        "effects": {
          "description": "Pode lançar magias arcanas",
          "initial_spells": "Duas magias de 1º círculo",
          "spells_per_level": "Uma nova magia a cada nível par",
          "circles": {
            "1": "Nível 1",
            "2": "Nível 6",
            "3": "Nível 10",
            "4": "Nível 14"
          },
          "spellcasting": {
            "attribute": "Carisma"
          }
        }
      }
    ],
    "20": [
      {
        "name": "Artista Completo",
        "type": "passive",
        "effects": {
          "description": "Inspiração como ação livre e habilidades com metade do custo"
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
        "name": "Arte Mágica",
        "type": "passive",
        "effects": {
          "description": "CD de habilidades de bardo +2 durante Inspiração"
        }
      },
      {
        "name": "Aumentar Repertório",
        "type": "spells",
        "effects": {
          "description": "Aprende duas magias adicionais",
          "reselectable": true
        }
      },
      {
        "name": "Aumento de Atributo",
        "type": "attribute",
        "effects": {
          "description": "+1 em um atributo",
          "reselectable": true
        }
      },
      {
        "name": "Esgrima Mágica",
        "type": "combat",
        "effects": {
          "description": "Usa Atuação em vez de Luta para armas leves/uma mão durante Inspiração"
        }
      },
      {
        "name": "Estrelato",
        "type": "social",
        "effects": {
          "description": "Bônus em perícias de Carisma aumenta para +5 ao impressionar",
          "special": "Pode ser reconhecido mais facilmente"
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
  processarClasse('bardo', bardo);
} else {
  // Se a função não estiver disponível, adicionar um listener para quando estiver
  document.addEventListener('DOMContentLoaded', function() {
    if (typeof processarClasse === 'function') {
      processarClasse('bardo', bardo);
    } else {
      console.error('Função processarClasse não encontrada para processamento da classe Bardo');
    }
  });
} 
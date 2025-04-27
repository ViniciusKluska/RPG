// Informações detalhadas sobre a classe Clérigo para o sistema Ghanor RPG

// Definição do objeto clerigo com os dados da classe
const clerigo = {
  "id": "clerigo",
  "name": "Clérigo",
  "description": "Servos devotados dos deuses que canalizam poder divino para curar aliados, proteger os inocentes e combater as forças das trevas. Combinam habilidades de combate com poderosas magias divinas.",
  "flavor_text": "Os clérigos são o elo entre os mortais e os deuses. Através de orações, rituais e fé inabalável, canalizam o poder divino para realizar milagres, curar ferimentos e proteger os fiéis. Sua devoção é recompensada com dons sobrenaturais.",
  "cultural_text": "Em Ghanor, clérigos formam a base da hierarquia religiosa em templos e santuários. São respeitados como conselheiros espirituais, mediadores e curadores. Muitos viajam pelo mundo para espalhar a fé de sua divindade ou combater influências malignas.",
  "base_stats": {
    "hit_points": {
      "base": 14,
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
      "Armas simples",
      "Arma favorita da divindade"
    ],
    "armor": [
      "Armaduras leves",
      "Armaduras médias",
      "Escudos"
    ]
  },
  "skills": {
    "fixed": [
      "Religião (Sab)",
      "Vontade (Sab)"
    ],
    "choices": {
      "amount": 4,
      "from": [
        "Cura (Sab)",
        "Diplomacia (Car)",
        "Fortitude (Con)",
        "História (Int)",
        "Intuição (Sab)",
        "Luta (For)",
        "Misticismo (Int)",
        "Nobreza (Int)",
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
          "description": "Pode lançar magias divinas",
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
        "name": "Canalizar Energia",
        "type": "active",
        "effects": {
          "description": "Canaliza energia divina para curar ou ferir",
          "cost": "2 PM",
          "healing": "1d8+1 por nível (máximo 5d8+5)",
          "area": "Raio de 9m"
        }
      }
    ],
    "20": [
      {
        "name": "Avatar Divino",
        "type": "active",
        "effects": {
          "description": "Assume forma divina, ganhando resistência a dano 10, imunidade a efeitos mentais e habilidades especiais baseadas na divindade",
          "cost": "10 PM",
          "duration": "1 minuto"
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
        "name": "Bênção da Cura",
        "type": "healing",
        "effects": {
          "description": "Cura adicional 1d8+2 PV quando lança magias de cura"
        }
      },
      {
        "name": "Conhecimento Divino",
        "type": "spells",
        "effects": {
          "description": "Aprende duas magias adicionais da lista de clérigo",
          "reselectable": true
        }
      },
      {
        "name": "Expulsar Mortos-Vivos",
        "type": "active",
        "effects": {
          "description": "Afasta ou destrói mortos-vivos em área de 9m",
          "cost": "3 PM",
          "save": "Vontade CD Sab"
        }
      },
      {
        "name": "Símbolo Sagrado Poderoso",
        "type": "passive",
        "effects": {
          "description": "+2 na CD de magias divinas quando empunhando símbolo sagrado"
        }
      }
    ]
  }
};

// Certificando-se de que processarClasse está definido antes de chamá-lo
if (typeof processarClasse === 'function') {
  // Processar a classe para o formato esperado pelo sistema
  processarClasse('clerigo', clerigo);
} else {
  // Se a função não estiver disponível, adicionar um listener para quando estiver
  document.addEventListener('DOMContentLoaded', function() {
    if (typeof processarClasse === 'function') {
      processarClasse('clerigo', clerigo);
    } else {
      console.error('Função processarClasse não encontrada para processamento da classe Clérigo');
    }
  });
} 
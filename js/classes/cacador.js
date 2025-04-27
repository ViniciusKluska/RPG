// Informações detalhadas sobre a classe Caçador para o sistema Ghanor RPG

// Definição do objeto cacador com os dados da classe
const cacador = {
  "id": "cacador",
  "name": "Caçador",
  "description": "Habilidosos rastreadores e especialistas em sobrevivência, caçadores possuem uma conexão profunda com a natureza selvagem. São mestres no uso de arcos e no combate à distância.",
  "flavor_text": "Os caçadores conhecem os segredos das terras selvagens, estudam o comportamento de suas presas e aprendem a sobreviver em ambientes hostis. Sua paciência e habilidade com armas de longo alcance os tornam temíveis adversários.",
  "cultural_text": "Em Ghanor, caçadores frequentemente servem como batedores para exércitos, guias para viajantes e protetores de aldeias fronteiriças. Muitos vivem nos limites da civilização, agindo como primeira linha de defesa contra ameaças das terras selvagens.",
  "base_stats": {
    "hit_points": {
      "base": 14,
      "per_level": 3,
      "bonus": "Constituição"
    },
    "mana_points": {
      "per_level": 3,
      "bonus": "Sabedoria"
    }
  },
  "proficiencies": {
    "weapons": [
      "Armas simples",
      "Armas marciais à distância"
    ],
    "armor": [
      "Armaduras leves e médias"
    ]
  },
  "skills": {
    "fixed": [
      "Sobrevivência (Sab)",
      "Pontaria (Des)"
    ],
    "choices": {
      "amount": 4,
      "from": [
        "Adestramento (Car)",
        "Atletismo (For)",
        "Cavalgar (Des)",
        "Fortitude (Con)",
        "Furtividade (Des)",
        "Natureza (Int)",
        "Percepção (Sab)",
        "Reflexos (Des)"
      ]
    }
  },
  "abilities": {
    "1": [
      {
        "name": "Marca do Caçador",
        "type": "active",
        "effects": {
          "description": "Marca um alvo como ação de movimento, recebendo +2 em testes de ataque e +1d6 de dano contra ele",
          "cost": "1 PM",
          "duration": "Cena"
        }
      },
      {
        "name": "Explorador Natural",
        "type": "passive",
        "effects": {
          "description": "Escolha um tipo de terreno (floresta, montanha, planície, etc.). Você recebe +5 em Sobrevivência e Furtividade nesse terreno"
        }
      }
    ],
    "20": [
      {
        "name": "Predador Supremo",
        "type": "passive",
        "effects": {
          "description": "Seus ataques críticos contra alvos marcados causam o triplo de dano e seus inimigos nunca recebem bônus por cobertura contra seus ataques à distância"
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
          "description": "Obtém um animal companheiro leal que segue seus comandos"
        }
      },
      {
        "name": "Ervas Medicinais",
        "type": "healing",
        "effects": {
          "description": "Pode preparar ervas que curam 2d6+2 PV ou removem uma condição negativa",
          "cost": "2 PM",
          "uses": "Uma vez por dia por aliado"
        }
      },
      {
        "name": "Tiro Preciso",
        "type": "combat",
        "effects": {
          "description": "Ignora penalidades por distância e cobertura parcial em um ataque à distância",
          "cost": "1 PM"
        }
      },
      {
        "name": "Tiro Rápido",
        "type": "combat",
        "effects": {
          "description": "Pode fazer um ataque adicional com arma à distância com -2 no teste de ataque",
          "cost": "2 PM"
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
  processarClasse('cacador', cacador);
} else {
  // Se a função não estiver disponível, adicionar um listener para quando estiver
  document.addEventListener('DOMContentLoaded', function() {
    if (typeof processarClasse === 'function') {
      processarClasse('cacador', cacador);
    } else {
      console.error('Função processarClasse não encontrada para processamento da classe Caçador');
    }
  });
} 
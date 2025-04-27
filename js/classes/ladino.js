// Informações detalhadas sobre a classe Ladino para o sistema Ghanor RPG

// Definição do objeto ladino com os dados da classe
const ladino = {
  "id": "ladino",
  "name": "Ladino",
  "description": "Especialistas em furtividade, armadilhas e habilidades sociais. Mestres na arte de evitar detecção, abrir fechaduras e encontrar/desarmar armadilhas, além de desferir ataques precisos em pontos vulneráveis.",
  "flavor_text": "Os ladinos são habilidosos oportunistas que prosperam usando sua astúcia, agilidade e conhecimento do comportamento humano. Enquanto alguns seguem o caminho do crime, outros usam seus talentos para exploração, espionagem ou como caçadores de tesouro.",
  "cultural_text": "Em Ghanor, ladinos podem ser encontrados em todas as camadas sociais, dos becos sombrios às cortes nobres. Muitos trabalham em guildas organizadas, oferecendo serviços que vão de espionagem a roubos por encomenda, enquanto outros atuam como detetives e investigadores.",
  "base_stats": {
    "hit_points": {
      "base": 12,
      "per_level": 3,
      "bonus": "Constituição"
    },
    "mana_points": {
      "per_level": 3,
      "bonus": "Inteligência"
    }
  },
  "proficiencies": {
    "weapons": [
      "Armas simples",
      "Armas leves",
      "Armas de precisão"
    ],
    "armor": [
      "Armaduras leves"
    ]
  },
  "skills": {
    "fixed": [
      "Furtividade (Des)",
      "Ladinagem (Des)"
    ],
    "choices": {
      "amount": 6,
      "from": [
        "Acrobacia (Des)",
        "Atletismo (For)",
        "Atuação (Car)",
        "Cavalgar (Des)",
        "Conhecimento (Int)",
        "Diplomacia (Car)",
        "Enganação (Car)",
        "Intuição (Sab)",
        "Investigação (Int)",
        "Jogatina (Car)",
        "Percepção (Sab)"
      ]
    }
  },
  "abilities": {
    "1": [
      {
        "name": "Ataque Furtivo",
        "type": "passive",
        "effects": {
          "description": "Causa +2d6 de dano ao acertar um alvo desprevenido ou flanqueado",
          "scaling": "Aumenta para +3d6 no nível 5, +4d6 no nível 9, +5d6 no nível 13 e +6d6 no nível 17"
        }
      },
      {
        "name": "Especialista",
        "type": "passive",
        "effects": {
          "description": "Escolhe 4 perícias treinadas e recebe +2 em todos os testes dessas perícias"
        }
      }
    ],
    "20": [
      {
        "name": "Mestre das Sombras",
        "type": "passive",
        "effects": {
          "description": "Pode se tornar invisível como ação de movimento, ataque furtivo máximo contra alvos desprevenidos"
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
        "name": "Evasão",
        "type": "passive",
        "effects": {
          "description": "Se passar em um teste de Reflexos que reduziria o dano pela metade, não sofre dano algum"
        }
      },
      {
        "name": "Gatuno",
        "type": "passive",
        "effects": {
          "description": "Recebe +2 em testes de Ladinagem e pode abrir fechaduras como ação de movimento"
        }
      },
      {
        "name": "Olhar Aguçado",
        "type": "passive",
        "effects": {
          "description": "Sempre pode rolar novamente 1s em testes de Percepção e recebe +2 para encontrar armadilhas"
        }
      },
      {
        "name": "Sombra",
        "type": "active",
        "effects": {
          "description": "Pode se esconder mesmo sendo observado",
          "cost": "2 PM",
          "duration": "1 rodada"
        }
      }
    ]
  }
};

// Certificando-se de que processarClasse está definido antes de chamá-lo
if (typeof processarClasse === 'function') {
  // Processar a classe para o formato esperado pelo sistema
  processarClasse('ladino', ladino);
} else {
  // Se a função não estiver disponível, adicionar um listener para quando estiver
  document.addEventListener('DOMContentLoaded', function() {
    if (typeof processarClasse === 'function') {
      processarClasse('ladino', ladino);
    } else {
      console.error('Função processarClasse não encontrada para processamento da classe Ladino');
    }
  });
} 
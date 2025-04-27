// Informações detalhadas sobre a raça Aberrante para o sistema Ghanor RPG

const aberrante = {
  nome: 'Aberrante',
  descricao: "O Devorador de Mundos foi destruído, mas seu corpo colossal até hoje verte um óleo negro capaz de alterar o corpo de quem o toca. Aberrantes são pessoas que tocaram esse óleo, uma substância mágica imprevisível originada do sangue da criatura que transformava o vivo e verde em aridez estéril. Os efeitos do sangue mágico sobre cada criatura variam - algumas sofrem pequenas alterações, enquanto outras são modificadas de forma tão profunda que se tornam irreconhecíveis. Aberrantes não são uma raça no sentido tradicional, não possuindo cultura nem comunidades próprias. Cada aberrante é um indivíduo singular, frequentemente encontrando seu lugar entre aventureiros, onde suas peculiaridades são mais facilmente aceitas.",
  tracosFisicos: {
    altura: 'Variável, dependendo das mutações',
    compleicao: 'Extremamente variável',
    longevidade: 'Desconhecido',
    aparencia: 'Única para cada indivíduo, desde alterações sutis até transformações profundas, características determinadas pelas mutações escolhidas'
  },
  tracosCulturais: {
    sociedade: 'Sem cultura ou comunidade própria. Aberrantes com alterações discretas vivem disfarçados entre seus povos originais, os mais transformados vivem isolados ou como nômades, muitos encontram aceitação na vida de aventureiro',
    governo: 'Inexistente como grupo racial',
    religioes: 'Variadas, geralmente mantendo as crenças de sua cultura original',
    idiomas: ['Comum', 'Um idioma adicional conforme origem']
  },
  bonusAtributos: {
    tipo: 'fixo',
    fixos: [
      { atributo: 'CAR', valor: -2 }
    ]
  },
  habilidadesRaciais: [
    {
      nome: 'Mutações',
      tipo: 'escolha',
      descricao: 'O óleo negro provoca mutações únicas em cada indivíduo.',
      mecanica: 'Escolha 4 mutações da lista a seguir. Pode trocar poderes de classe por mutações adicionais.'
    }
  ],
  mutacoes: [
    {
      nome: 'Ascético',
      descricao: 'Desenvolve uma conexão mística com sua nova natureza.',
      mecanica: '+1 em Sabedoria e +3 Pontos de Mana'
    },
    {
      nome: 'Couro Rochoso',
      descricao: 'A pele se torna similar à couraça do Devorador.',
      mecanica: '+2 na Defesa'
    },
    {
      nome: 'Magia Bizarra',
      descricao: 'Manifesta poderes mágicos imprevisíveis.',
      mecanica: 'Aprende uma magia arcana de 1º círculo à escolha, usando Inteligência ou Carisma. Custo -1 PM se aprender novamente'
    },
    {
      nome: 'Metamorfose',
      descricao: 'Ganha controle limitado sobre sua forma.',
      mecanica: 'Aprende a magia Disfarce Ilusório, usando Carisma'
    },
    {
      nome: 'Mordida',
      descricao: 'Desenvolve mandíbulas poderosas.',
      mecanica: 'Arma natural de mordida (1d6, crítico x2, perfuração), e pode gastar 1 PM para fazer um ataque adicional após um ataque corpo a corpo'
    },
    {
      nome: 'Musculoso',
      descricao: 'Músculos se desenvolvem de forma sobrenatural.',
      mecanica: '+1 em Força e +5 na capacidade de carga'
    },
    {
      nome: 'Resistente',
      descricao: 'Torna-se mais resistente a danos físicos e mágicos.',
      mecanica: '+1 em Constituição e +2 em testes de resistência contra magia'
    },
    {
      nome: 'Sentidos Aguçados',
      descricao: 'Desenvolve sentidos sobre-humanos.',
      mecanica: 'Visão no escuro e +2 em testes de Percepção'
    },
    {
      nome: 'Veloz',
      descricao: 'Movimentos se tornam mais rápidos e fluidos.',
      mecanica: '+1 em Destreza e +3m de deslocamento'
    },
    {
      nome: 'Venenoso',
      descricao: 'Desenvolve glândulas que produzem toxinas.',
      mecanica: '+5 em testes de resistência contra venenos e pode gastar 1 PM como ação de movimento para envenenar sua arma (1d12 de dano, até acertar ou fim da cena)'
    }
  ],
  pericias: ['Percepção', 'Sobrevivência', 'Furtividade'],
  tamanho: 'Médio',
  deslocamento: '9m'
};

// Certificando-se de que processarRaca está definido antes de chamá-lo
if (typeof processarRaca === 'function') {
  // Processar a raça para o formato esperado pelo sistema
  processarRaca('aberrante', aberrante);
} else {
  // Se a função não estiver disponível, adicionar um listener para quando estiver
  document.addEventListener('DOMContentLoaded', function() {
    if (typeof processarRaca === 'function') {
      processarRaca('aberrante', aberrante);
    } else {
      console.error('Função processarRaca não encontrada para processamento da raça Aberrante');
    }
  });
} 
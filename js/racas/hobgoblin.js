// Informações detalhadas sobre a raça Hobgoblin para o sistema Ghanor RPG

const hobgoblin = {
  nome: 'Hobgoblin',
  descricao: "Humanoides monstruosos e agressivos, hobgoblins viveram por muitas gerações como mercenários, sempre a serviço de algum tipo de senhor ou senhora. Temidos e odiados por seus anos a serviço de Zamir, estes seres agora travam um outro tipo de batalha, para serem aceitos como parte dos povos de Ghanor e dos reinos. Por muito tempo, foram vistos como criaturas puramente sádicas e opressoras. Porém, conforme mais hobgoblins convivem com outros povos, percebe-se que há mais neles do que se pode ver à superfície. Embora aqueles que serviam a Zamir e outros tiranos realmente fossem violentos e cruéis, recentemente muitos hobgoblins têm demonstrado que este povo também pode gerar indivíduos corajosos, leais e até heroicos.",
  tracosFisicos: {
    altura: 'Mais altos que humanos',
    compleicao: 'Robustos e musculosos',
    longevidade: 'Até 80 anos',
    aparencia: 'Pele amarelada coberta por pelagem castanha curta, face lisa e sem pelos com focinho animalesco, orelhas bestiais e presas inferiores proeminentes, dedos grossos com unhas afiadas semelhantes a garras'
  },
  tracosCulturais: {
    sociedade: 'Organização militar e hierárquica, passado como mercenários, buscando nova aceitação',
    governo: 'Estrutura hierárquica militar com líderes fortes',
    religioes: 'Veneração de figuras de autoridade e divindades de guerra',
    idiomas: ['Comum', 'Goblin']
  },
  bonusAtributos: {
    tipo: 'fixo',
    fixos: [
      { atributo: 'FOR', valor: 1 },
      { atributo: 'DES', valor: 1 },
      { atributo: 'CON', valor: 1 },
      { atributo: 'CAR', valor: -1 }
    ]
  },
  habilidadesRaciais: [
    {
      nome: 'Couro Duro',
      tipo: 'defesa',
      descricao: 'Sua pele resistente e musculatura densa proporcionam proteção natural.',
      mecanica: 'Redução de dano igual à Constituição (limitado pelo nível)'
    },
    {
      nome: 'Dependência de Liderança',
      tipo: 'social',
      descricao: 'Necessidade instintiva de seguir uma figura de liderança.',
      mecanica: 'Escolhe outro personagem como líder (geralmente o de maior Carisma), tende a ouvir seus conselhos, nunca age antes do líder e sofre -1 em testes quando distante do líder (além de alcance médio)'
    },
    {
      nome: 'Militarista',
      tipo: 'combate',
      descricao: 'Anos de tradição militar resultaram em aptidão natural para o combate.',
      mecanica: 'Recebe um poder de combate à escolha'
    },
    {
      nome: 'Natureza Bestial',
      tipo: 'misto',
      descricao: 'Seus traços bestiais e físico imponente inspiram medo natural.',
      mecanica: 'Visão no escuro e usa Constituição em Intimidação (em vez de Carisma)'
    }
  ],
  pericias: ['Intimidação', 'Guerra', 'Atletismo'],
  tamanho: 'Médio',
  deslocamento: '9m'
};

// Processar a raça para o formato esperado pelo sistema
processarRaca('hobgoblin', hobgoblin); 
// Informações detalhadas sobre a raça Anão para o sistema Ghanor RPG

const anao = {
  nome: 'Anão',
  descricao: "Habitantes das profundezas, anões são um povo antigo, de tradições tão rígidas quanto o aço que forjam. Exímios ferreiros, mineradores e guerreiros, são reconhecidos pela dedicação com que usam suas ferramentas e pela coragem com que brandem suas armas. A marca de um anão é a determinação — ou teimosia, segundo alguns. Este é um povo obstinado e taciturno, que tem o trabalho como pilar de sua cultura. Ao longo das gerações, esta seriedade se expandiu para outros aspectos de suas vidas, às vezes levando a consequências extremas, como o ditado anão que diz que 'nenhum túnel é fundo o bastante'.",
  tracosFisicos: {
    altura: 'Baixos e atarracados',
    compleicao: 'Robustos e pesados, mais densos que humanos',
    longevidade: 'Até 150 anos',
    aparencia: 'Longos cabelos e barbas adornados com tranças, anéis e correntes finamente trabalhadas'
  },
  tracosCulturais: {
    sociedade: 'Cidadelas subterrâneas distantes de outras raças',
    governo: 'Estrutura baseada em clãs e tradições ancestrais',
    religioes: 'Culto aos ancestrais e divindades da forja e da terra',
    idiomas: ['Comum', 'Anão']
  },
  bonusAtributos: {
    tipo: 'fixo',
    fixos: [
      { atributo: 'CON', valor: 2 },
      { atributo: 'INT', valor: 1 },
      { atributo: 'CAR', valor: -1 }
    ]
  },
  habilidadesRaciais: [
    {
      nome: 'Busca pela Perfeição',
      tipo: 'perícia',
      descricao: 'Reflete a dedicação anã ao trabalho e sua busca pela excelência em seus ofícios.',
      mecanica: '+2 em testes de Ofício; pode fabricar itens superiores com uma melhoria se treinado'
    },
    {
      nome: 'Devagar e Sempre',
      tipo: 'movimento',
      descricao: 'Mesmo carregando peso ou usando armadura pesada, anões mantêm seu ritmo constante.',
      mecanica: 'Deslocamento de 6m que não é reduzido por armadura ou carga'
    },
    {
      nome: 'Moldado nas Rochas',
      tipo: 'misto',
      descricao: 'Séculos vivendo nas profundezas tornaram os anões naturalmente adaptados à escuridão e resistentes como as rochas que os cercam.',
      mecanica: 'Visão no escuro e +1 PV por nível'
    }
  ],
  pericias: ['Ofício', 'Atletismo', 'Percepção'],
  tamanho: 'Médio',
  deslocamento: '6m'
};

// Processar a raça para o formato esperado pelo sistema
processarRaca('anao', anao); 
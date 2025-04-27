// Informações detalhadas sobre a raça Elfo para o sistema Ghanor RPG

const elfo = {
  nome: 'Elfo',
  descricao: "Seres mágicos e ancestrais, elfos possuem uma história rica e antiga, marcada por grandes triunfos... E também por grandes tragédias, que deixaram feridas permanentes em sua sociedade. Tão marcante quanto a aparência de um elfo é o seu espírito. Estes são seres místicos, que possuem uma ligação inata com a natureza. Essa conexão exerceu uma profunda influência na história deste povo, sendo ao mesmo tempo fonte de sua força e de suas fraquezas. Por gerações, a Pedra da Utopia permitiu que descartassem sentimentos negativos, vivendo em harmonia. Agora, com a pedra destruída, reaprendem dolorosamente a lidar com o lado sombrio de suas almas.",
  tracosFisicos: {
    altura: 'Ligeiramente mais baixos que humanos',
    compleicao: 'Esguios e leves',
    longevidade: 'Até 300 anos',
    aparencia: 'Traços belos e delicados com ângulos suaves, orelhas longas e pontudas, cores que lembram madeiras e folhas da floresta, movimentos ágeis e graciosos'
  },
  tracosCulturais: {
    sociedade: 'Cidades em grandes florestas protegidas por natureza e magia',
    governo: 'Estruturas ancestrais com forte conexão mística',
    religioes: 'Culto à natureza e forças elementais',
    idiomas: ['Comum', 'Élfico']
  },
  bonusAtributos: {
    tipo: 'fixo',
    fixos: [
      { atributo: 'SAB', valor: 2 },
      { atributo: 'DES', valor: 1 },
      { atributo: 'CON', valor: -1 }
    ]
  },
  habilidadesRaciais: [
    {
      nome: 'Armas da Floresta',
      tipo: 'combate',
      descricao: 'A maestria élfica com o arco é lendária, sendo parte integral de sua cultura e tradições.',
      mecanica: 'Todos os arcos são considerados armas simples para elfos, +2 em rolagens de dano com arcos'
    },
    {
      nome: 'Magia Antiga',
      tipo: 'magia',
      descricao: 'A conexão mística dos elfos com a natureza influencia sua forma de canalizar a magia.',
      mecanica: '+1 PM por nível e usa Sabedoria para Misticismo e magias arcanas (em vez de Inteligência)'
    },
    {
      nome: 'Passo Leve',
      tipo: 'misto',
      descricao: 'Movem-se com graça sobrenatural, quase flutuando sobre o solo.',
      mecanica: '+2 em testes de Furtividade e deslocamento de 12m (em vez de 9m)'
    },
    {
      nome: 'Sentidos Élficos',
      tipo: 'percepção',
      descricao: 'Seus sentidos aguçados são resultado de séculos vivendo em harmonia com a natureza.',
      mecanica: 'Visão na penumbra e +2 em testes de Percepção'
    },
    {
      nome: 'Sentimentos Conflitantes',
      tipo: 'penalidade',
      descricao: 'A perda da Pedra da Utopia deixou os elfos despreparados para lidar com emoções negativas.',
      mecanica: '-5 em testes de Diplomacia e -5 em testes de resistência de Vontade; estes efeitos são anulados por uma dose de turlin durante uma cena'
    }
  ],
  pericias: ['Percepção', 'Furtividade', 'Misticismo', 'Conhecimento (Natureza)'],
  tamanho: 'Médio',
  deslocamento: '12m'
};

// Processar a raça para o formato esperado pelo sistema
processarRaca('elfo', elfo); 
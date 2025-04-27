// Informações detalhadas sobre a raça Meio-Elfo para o sistema Ghanor RPG

const meioElfo = {
  nome: 'Meio-Elfo',
  descricao: "No passado, antes dos elfos tentarem esconder seus sentimentos na Pedra da Utopia, a relação entre este povo e a humanidade era diferente, mais amigável e mais próxima. Desta amizade surgiram os primeiros filhos de humanos e elfos. Mais do que mestiços, meio-elfos são herdeiros de uma linhagem élfica que remonta ao distante passado dessa raça. Mesmo hoje, passado tanto tempo desde a época em que estas duas raças conviveram em harmonia, a herança de sangue dos meio-elfos surge de tempos em tempos em famílias compostas apenas por humanos ou elfos. Um meio-elfo reúne algumas das características mais marcantes dos humanos e elfos que serviram como seus antepassados, resultando em indivíduos de beleza marcante, dotados de presença e altivez quase divina.",
  tracosFisicos: {
    altura: 'Similar a humanos',
    compleicao: 'Variável, combinando traços humanos e élficos',
    longevidade: 'Até 150 anos',
    aparencia: 'Beleza diáfana dos elfos com traços suaves, orelhas pontudas e compridas, beleza inumana quase divina, grande variedade de características físicas tendendo às tonalidades humanas'
  },
  tracosCulturais: {
    sociedade: 'Vivem integrados em sociedades humanas ou élficas, surgem ocasionalmente em famílias puramente humanas ou élficas',
    governo: 'Adaptam-se à estrutura política do local onde vivem',
    religioes: 'Diversas, geralmente com uma visão mais mística ou filosófica',
    idiomas: ['Comum', 'Élfico']
  },
  bonusAtributos: {
    tipo: 'misto',
    fixos: [
      { atributo: 'CAR', valor: 2 }
    ],
    flexiveis: {
      quantidade: 1,
      valor: 1,
      restricoes: 'Escolha um atributo diferente'
    }
  },
  habilidadesRaciais: [
    {
      nome: 'Longa Infância',
      tipo: 'antecedentes',
      descricao: 'O desenvolvimento único dos meio-elfos proporciona experiências variadas durante seu crescimento.',
      mecanica: 'Escolhe uma origem adicional, recebe o benefício mas não os itens desta segunda origem'
    },
    {
      nome: 'Sentidos Ancestrais',
      tipo: 'percepção',
      descricao: 'A herança élfica manifesta-se através de sentidos sobrenaturalmente aguçados.',
      mecanica: 'Visão na penumbra e +2 em testes de Intuição e Percepção'
    }
  ],
  pericias: ['Percepção', 'Intuição', 'Misticismo'],
  tamanho: 'Médio',
  deslocamento: '9m'
};

// Processar a raça para o formato esperado pelo sistema
processarRaca('meioElfo', meioElfo); 
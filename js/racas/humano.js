// Informações detalhadas sobre a raça Humano para o sistema Ghanor RPG

const humano = {
  nome: 'Humano',
  descricao: 'Humanos são a raça mais populosa de Ghanor e dos reinos. Adaptáveis e versáteis, possuem potencial para se sobressair em qualquer área, o que os permitiu resistir aos momentos mais sombrios da história do mundo. Ao longo da história dos reinos, a humanidade foi duramente atingida por episódios terríveis, do primeiro devorador de mundos ao longo domínio de Zamir, passando pela marcha dos mortos-vivos em Kottar. Nas últimas décadas, entretanto, os humanos têm prosperado, suas cidades e reinos crescendo livres dos tiranos do passado.',
  tracosFisicos: {
    altura: 'Variável',
    compleicao: 'Variável',
    longevidade: 'Até 90 anos',
    aparencia: 'Grande variedade na aparência e no porte físico'
  },
  tracosCulturais: {
    sociedade: 'Diversificada, com diferentes costumes e organizações',
    governo: 'Diversos sistemas políticos, adaptáveis a diferentes situações',
    religioes: 'Ampla variedade de crenças e práticas religiosas',
    idiomas: ['Comum', 'Um idioma adicional à escolha']
  },
  bonusAtributos: {
    tipo: 'flexivel',
    flexiveis: {
      quantidade: 3,
      valor: 1,
      restricoes: 'Deve escolher três atributos diferentes, máximo +1 por atributo'
    }
  },
  habilidadesRaciais: [
    {
      nome: 'Versátil',
      tipo: 'perícia',
      descricao: 'Reflete a capacidade humana de se adaptar e se destacar em qualquer área.',
      mecanica: 'Recebe duas perícias adicionais de livre escolha. Pode trocar uma dessas perícias por um poder geral.'
    },
    {
      nome: 'Determinação Humana',
      tipo: 'poder',
      descricao: 'A determinação dos humanos os permite superar adversidades quando mais necessário.',
      mecanica: 'Uma vez por dia, pode rolar novamente um teste de atributo, perícia ou salvaguarda e ficar com o melhor resultado'
    },
    {
      nome: 'Adaptação Cultural',
      tipo: 'social',
      descricao: 'Humanos se integram facilmente a diferentes culturas e costumes.',
      mecanica: '+2 em testes de Diplomacia e podem aprender um idioma adicional'
    },
    {
      nome: 'Ambição Inata',
      tipo: 'experiência',
      descricao: 'A ambição natural dos humanos os impulsiona a aprender e evoluir rapidamente.',
      mecanica: '+10% de experiência ganha em aventuras'
    }
  ],
  pericias: ['Qualquer duas perícias à escolha'],
  tamanho: 'Médio',
  deslocamento: '9m'
};

// Processar a raça para o formato esperado pelo sistema
processarRaca('humano', humano); 
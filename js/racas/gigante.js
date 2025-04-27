// Informações detalhadas sobre a raça Gigante para o sistema Ghanor RPG

const gigante = {
  nome: 'Gigante',
  descricao: "Ferozes, incansáveis e fisicamente poderosos, gigantes são limitados apenas por suas próprias mentes simplórias e animalescas. Em contraste com seus corpos impressionantes, a mente de um gigante é extremamente rudimentar. São seres primitivos, que vivem de caça e coleta, tendo mais em comum com ursos selvagens do que com outros povos humanoides. Apesar de todas essas limitações, podem se tornar aliados fiéis para aqueles que tiverem a paciência (e a coragem) de transformá-los em amigos.",
  tracosFisicos: {
    altura: '3 metros ou mais, continuando a crescer ao longo da vida',
    compleicao: 'Ombros e peito excepcionalmente largos, braços grossos e musculosos, cabeça proporcionalmente pequena',
    longevidade: 'Até 120 anos',
    aparencia: 'Olhos minúsculos que alternam entre expressão ingênua e brilho selvagem, cabelos e barba desgrenhados, vestem-se com peles de criaturas costuradas de forma tosca'
  },
  tracosCulturais: {
    sociedade: 'Praticamente inexistente, sem estrutura social complexa, estilo de vida primitivo baseado em caça e coleta',
    governo: 'Ausente, incapazes de manter organização política',
    religioes: 'Crenças primitivas, geralmente adoração a fenômenos naturais ou espíritos animais',
    idiomas: ['Comum (rudimentar)', 'Gigante']
  },
  bonusAtributos: {
    tipo: 'fixo',
    fixos: [
      { atributo: 'FOR', valor: 3 },
      { atributo: 'CON', valor: 2 },
      { atributo: 'INT', valor: -2 },
      { atributo: 'SAB', valor: -1 },
      { atributo: 'CAR', valor: -1 }
    ]
  },
  habilidadesRaciais: [
    {
      nome: 'Grandão',
      tipo: 'tamanho',
      descricao: 'Seu tamanho impressionante lhe confere força extraordinária, mas requer equipamento especial.',
      mecanica: 'Tamanho Grande, soma o valor de Força nos Pontos de Vida, pode usar armas normais ou aumentadas, requer armaduras especialmente feitas para seu tamanho'
    },
    {
      nome: 'Primitivo',
      tipo: 'penalidade',
      descricao: 'Sua natureza primitiva dificulta interações sociais e o uso de equipamento complexo.',
      mecanica: '-5 em testes de Diplomacia, Intuição e Ofício, -5 em ataques com armas marciais ou exóticas'
    }
  ],
  pericias: ['Atletismo', 'Intimidação', 'Sobrevivência'],
  tamanho: 'Grande',
  deslocamento: '9m'
};

// Processar a raça para o formato esperado pelo sistema
processarRaca('gigante', gigante); 
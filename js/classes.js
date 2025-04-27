// Arquivo que disponibiliza as classes para o sistema Ghanor RPG
// Define o objeto global que será preenchido pelos arquivos de cada classe

// Definimos o objeto classesInfo que será usado pelo sistema
window.classesInfo = {};

// Função para mapear códigos de atributos para nomes completos
function mapearCodigoAtributo(codigo) {
  const mapeamento = {
    'FOR': 'forca',
    'DES': 'destreza',
    'CON': 'constituicao',
    'INT': 'inteligencia',
    'SAB': 'sabedoria',
    'CAR': 'carisma'
  };
  
  return mapeamento[codigo] || codigo.toLowerCase();
}

// Função para processar cada classe e formatá-la para o sistema
function processarClasse(classeKey, classe) {
  // Extrair informações básicas
  const classeProcessada = {
    nome: classe.name,
    descricao: classe.description,
    dadoVida: `d${classe.base_stats.hit_points.base}`,
    pontoVidaInicial: classe.base_stats.hit_points.base,
    pontosPorNivel: classe.base_stats.hit_points.per_level,
    pontosManaPorNivel: classe.base_stats.mana_points.per_level,
    atributoPrincipal: mapearCodigoAtributo(classe.base_stats.mana_points.bonus),
    textoFlavor: classe.flavor_text,
    textoCultural: classe.cultural_text
  };
  
  // Processar perícias
  classeProcessada.pericias = {
    fixas: classe.skills.fixed || [],
    escolhas: {
      quantidade: classe.skills.choices?.amount || 0,
      lista: classe.skills.choices?.from || []
    }
  };
  
  // Processar habilidades iniciais
  classeProcessada.habilidadesIniciais = classe.abilities["1"].map(habilidade => {
    if (habilidade.type === "choice") {
      return {
        nome: habilidade.name,
        tipo: "escolha",
        descricao: habilidade.effects.description,
        opcoes: habilidade.effects.options.map(opcao => ({
          nome: opcao.name,
          preco: opcao.price
        }))
      };
    } else {
      return {
        nome: habilidade.name,
        tipo: habilidade.type,
        descricao: habilidade.effects.description || ""
      };
    }
  });
  
  // Processar poderes disponíveis
  classeProcessada.poderes = classe.powers.list.map(poder => ({
    nome: poder.name,
    tipo: poder.type,
    descricao: poder.effects.description,
    requisitos: poder.prerequisites ? Object.values(poder.prerequisites).flat() : []
  }));
  
  // Processar habilidade final (nível 20)
  if (classe.abilities["20"]) {
    classeProcessada.habilidadeFinal = {
      nome: classe.abilities["20"][0].name,
      descricao: classe.abilities["20"][0].effects.description
    };
  }
  
  // Adicionar ao objeto global classesInfo
  window.classesInfo[classeKey] = classeProcessada;
  
  // Emitir um evento para notificar que uma classe foi carregada
  document.dispatchEvent(new CustomEvent('classeCarregada', { 
    detail: { classe: classeKey } 
  }));
  
  console.log(`Classe '${classeKey}' processada com sucesso`);
  
  return classeProcessada;
}

// Notificar quando todas as classes estão carregadas
document.addEventListener('DOMContentLoaded', function() {
  // Esperar um momento para garantir que todos os scripts foram carregados
  setTimeout(() => {
    // Disparar um evento personalizado para notificar outros scripts
    document.dispatchEvent(new CustomEvent('classesCarregadas', { 
      detail: { 
        classes: Object.keys(window.classesInfo) 
      } 
    }));
    console.log("Classes carregadas:", Object.keys(window.classesInfo));
  }, 500);
}); 
// Arquivo que disponibiliza as raças para o sistema Ghanor RPG
// Define o objeto global que será preenchido pelos arquivos de cada raça

// Definimos o objeto racasInfo que será usado pelo sistema
window.racasInfo = {};

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

// Função para corrigir caracteres especiais com codificação incorreta
function corrigirAcentuacao(texto) {
  if (!texto) return '';
  
  // Mapeamento de caracteres incorretos para seus equivalentes corretos
  const correcoes = {
    'Ã£': 'ã',
    'Ã¡': 'á',
    'Ã¢': 'â',
    'Ã©': 'é',
    'Ãª': 'ê',
    'Ã­': 'í',
    'Ã³': 'ó',
    'Ã´': 'ô',
    'Ãº': 'ú',
    'Ã§': 'ç',
    'Ã‡': 'Ç',
    'Ãµ': 'õ',
    'Ã"': 'Ó',
    'Ã€': 'À',
    'Ã‰': 'É',
    'Ãš': 'Ú',
    'Ã ': 'à'
  };
  
  let resultado = texto;
  
  for (const [incorreto, correto] of Object.entries(correcoes)) {
    resultado = resultado.replace(new RegExp(incorreto, 'g'), correto);
  }
  
  return resultado;
}

// Função para processar cada raça e formatá-la para o sistema
function processarRaca(racaKey, raca) {
  // Adicionar ao objeto global racasInfo
  window.racasInfo[racaKey] = raca;
  
  // Converter o formato de bonusAtributos para o formato esperado pelo sistema
  const bonusFormatados = {};
  
  if (raca.bonusAtributos && raca.bonusAtributos.tipo === 'fixo') {
    if (raca.bonusAtributos.fixos && Array.isArray(raca.bonusAtributos.fixos)) {
      raca.bonusAtributos.fixos.forEach(bonus => {
        // Converter os códigos de atributos (FOR, DES, etc.) para os nomes completos em minúsculo
        const atributoMapeado = mapearCodigoAtributo(bonus.atributo);
        bonusFormatados[atributoMapeado] = bonus.valor;
      });
    }
  } else if (raca.bonusAtributos && raca.bonusAtributos.tipo === 'flexivel') {
    // Para atributos flexíveis, deixamos para a interface permitir a escolha
    // e aplicamos apenas o placeholder para a implementação futura
    bonusFormatados.flexivel = true;
  } else if (raca.bonusAtributos && raca.bonusAtributos.tipo === 'misto') {
    // Aplicar os bônus fixos do tipo misto
    if (raca.bonusAtributos.fixos && Array.isArray(raca.bonusAtributos.fixos)) {
      raca.bonusAtributos.fixos.forEach(bonus => {
        const atributoMapeado = mapearCodigoAtributo(bonus.atributo);
        bonusFormatados[atributoMapeado] = bonus.valor;
      });
    }
    
    // Marcar que também possui bônus flexíveis
    if (raca.bonusAtributos.flexiveis) {
      bonusFormatados.flexivel = true;
    }
  }
  
  // Substituir o formato antigo pelo novo formato compatível
  raca.bonusAtributos = bonusFormatados;
  
  // Criar o array de habilidades no formato esperado
  if (raca.habilidadesRaciais && Array.isArray(raca.habilidadesRaciais)) {
    raca.habilidades = raca.habilidadesRaciais.map(habilidade => 
      `${habilidade.nome}: ${habilidade.descricao ? habilidade.descricao + ' - ' : ''}${habilidade.mecanica}`
    );
  } else {
    raca.habilidades = [];
  }
  
  // Adaptar o objeto de mutações para o aberrante
  if (racaKey === 'aberrante' && raca.mutacoes && Array.isArray(raca.mutacoes)) {
    const mutacoesFormatadas = raca.mutacoes.map(mutacao => 
      `${mutacao.nome}: ${mutacao.descricao} (${mutacao.mecanica})`
    );
    raca.habilidades = raca.habilidades || [];
    raca.habilidades.push(...mutacoesFormatadas);
  }
  
  // Emitir um evento para notificar que uma raça foi carregada
  document.dispatchEvent(new CustomEvent('racaCarregada', { 
    detail: { raca: racaKey } 
  }));
  
  console.log(`Raça '${racaKey}' processada com sucesso`);
  
  return raca;
}

// Notificar quando todas as raças estão carregadas
document.addEventListener('DOMContentLoaded', function() {
  // Esperar um momento para garantir que todos os scripts foram carregados
  setTimeout(() => {
    // Disparar um evento personalizado para notificar outros scripts
    document.dispatchEvent(new CustomEvent('racasCarregadas', { 
      detail: { 
        racas: Object.keys(window.racasInfo) 
      } 
    }));
    console.log("Raças carregadas:", Object.keys(window.racasInfo));
  }, 500);
}); 
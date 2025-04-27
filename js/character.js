document.addEventListener('DOMContentLoaded', function() {
  // Referências aos elementos DOM
  const form = document.getElementById('ficha-ghanor');
  const racaSelect = document.getElementById('raca');
  const classeSelect = document.getElementById('classe');
  const raceDetails = document.getElementById('race-details');
  const classDetails = document.getElementById('class-details');
  const nivelInput = document.getElementById('nivel');
  const pvTotalInput = document.getElementById('pv-total');
  const pvAtualInput = document.getElementById('pv-atual');
  
  // Atributos e seus modificadores
  const atributos = [
    { nome: 'forca', valor: document.getElementById('forca'), mod: document.getElementById('forca-mod') },
    { nome: 'destreza', valor: document.getElementById('destreza'), mod: document.getElementById('destreza-mod') },
    { nome: 'constituicao', valor: document.getElementById('constituicao'), mod: document.getElementById('constituicao-mod') },
    { nome: 'inteligencia', valor: document.getElementById('inteligencia'), mod: document.getElementById('inteligencia-mod') },
    { nome: 'sabedoria', valor: document.getElementById('sabedoria'), mod: document.getElementById('sabedoria-mod') },
    { nome: 'carisma', valor: document.getElementById('carisma'), mod: document.getElementById('carisma-mod') }
  ];
  
  // Estado de aplicação
  let atributosBase = {
    forca: 10,
    destreza: 10,
    constituicao: 10,
    inteligencia: 10,
    sabedoria: 10,
    carisma: 10
  };
  
  let racaAtual = '';
  let classeAtual = '';
  
  // Inicializar atributos
  atributos.forEach(atributo => {
    atributo.valor.value = atributosBase[atributo.nome];
  });
  
  // Escutar o evento de carregamento das raças concluído
  document.addEventListener('racasCarregadas', function(event) {
    console.log('Evento racasCarregadas detectado:', event.detail.racas);
    
    // Verificar se o objeto racasInfo está disponível e tem dados
    if (window.racasInfo && Object.keys(window.racasInfo).length > 0) {
      console.log('racasInfo está disponível:', Object.keys(window.racasInfo));
      
      // Se a raça já estiver selecionada, atualizar as informações
      const racaSelecionada = racaSelect.value;
      if (racaSelecionada && window.racasInfo[racaSelecionada]) {
        renderizarInfoRaca(racaSelecionada);
        aplicarBonusRaca(racaSelecionada);
      }
    } else {
      console.warn('racasInfo não está disponível ou está vazio');
    }
  });
  
  // Escutar eventos de erro no carregamento das raças
  document.addEventListener('racasErro', function(event) {
    console.error('Erro ao carregar raças:', event.detail.erro);
  });
  
  // Calcular modificador de atributo
  function calcularModificador(valor) {
    return Math.floor((valor - 10) / 2);
  }
  
  // Atualizar modificadores de atributos
  function atualizarModificadores() {
    atributos.forEach(atributo => {
      const valor = parseInt(atributo.valor.value) || 0;
      const modificador = calcularModificador(valor);
      atributo.mod.textContent = (modificador >= 0) ? `+${modificador}` : modificador;
    });
  }
  
  // Aplicar bônus de raça aos atributos
  function aplicarBonusRaca(raca) {
    // Primeiro, restaurar os valores base
    atributos.forEach(atributo => {
      atributo.valor.value = atributosBase[atributo.nome];
    });
    
    // Se uma raça foi selecionada, aplicar seus bônus
    if (raca && window.racasInfo && window.racasInfo[raca]) {
      console.log('Aplicando bônus da raça:', raca);
      const bonusAtributos = window.racasInfo[raca].bonusAtributos;
      
      if (bonusAtributos) {
        for (const [atributo, bonus] of Object.entries(bonusAtributos)) {
          // Ignorar o atributo 'flexivel' que é apenas um marcador
          if (atributo === 'flexivel') continue;
          
          const atributoElement = atributos.find(a => a.nome === atributo);
          if (atributoElement) {
            const valorAtual = parseInt(atributoElement.valor.value) || 0;
            atributoElement.valor.value = valorAtual + bonus;
          }
        }
      } else {
        console.warn(`Raça ${raca} não possui bonusAtributos definidos`);
      }
    } else {
      console.warn(`Raça ${raca} não encontrada em racasInfo ou racasInfo não está disponível`);
    }
    
    // Atualizar modificadores após aplicar os bônus
    atualizarModificadores();
  }
  
  // Renderizar informações da raça
  function renderizarInfoRaca(raca) {
    if (!raca || !window.racasInfo || !window.racasInfo[raca]) {
      raceDetails.innerHTML = '<p class="select-prompt">Selecione uma raça para ver suas informações</p>';
      return;
    }
    
    const racaInfo = window.racasInfo[raca];
    let html = `<div class="race-details">
                  <h4>${racaInfo.nome}</h4>
                  <p>${racaInfo.descricao}</p>
                  
                  <h4>Bônus de Atributos:</h4>
                  <ul class="bonus-list">`;
    
    if (racaInfo.bonusAtributos) {
      for (const [atributo, bonus] of Object.entries(racaInfo.bonusAtributos)) {
        // Ignorar o atributo 'flexivel' que é apenas um marcador
        if (atributo === 'flexivel') {
          html += `<li><span class="bonus-flexible">Bônus Flexível: Escolha os atributos</span></li>`;
          continue;
        }
        
        const nomeAtributo = atributo.charAt(0).toUpperCase() + atributo.slice(1);
        const bonusClass = bonus >= 0 ? 'bonus-positive' : 'bonus-negative';
        const sinal = bonus >= 0 ? '+' : '';
        html += `<li><span class="${bonusClass}">${nomeAtributo}: ${sinal}${bonus}</span></li>`;
      }
    } else {
      html += `<li>Nenhum bônus definido</li>`;
    }
    
    html += `</ul>
              
              <h4>Habilidades Raciais:</h4>
              <ul class="abilities-list">`;
    
    if (racaInfo.habilidades && racaInfo.habilidades.length > 0) {
      racaInfo.habilidades.forEach(habilidade => {
        html += `<li>${habilidade}</li>`;
      });
    } else {
      html += `<li>Nenhuma habilidade disponível</li>`;
    }
    
    html += `</ul>
              
              <h4>Perícias Sugeridas:</h4>
              <ul class="skills-list">`;
    
    if (racaInfo.pericias && racaInfo.pericias.length > 0) {
      racaInfo.pericias.forEach(pericia => {
        html += `<li>${pericia}</li>`;
      });
    } else {
      html += `<li>Nenhuma perícia sugerida</li>`;
    }
    
    html += `</ul>
            </div>`;
    
    raceDetails.innerHTML = html;
  }
  
  // Renderizar informações da classe
  function renderizarInfoClasse(classe) {
    if (!classe || !window.classesInfo || !window.classesInfo[classe]) {
      classDetails.innerHTML = '<p class="select-prompt">Selecione uma classe para ver suas informações</p>';
      return;
    }
    
    const classeInfo = window.classesInfo[classe];
    let html = `<div class="class-details">
                  <h4>${classeInfo.nome}</h4>
                  <p>${classeInfo.descricao}</p>
                  
                  <h4>Dados de Vida:</h4>
                  <p>${classeInfo.dadoVida} por nível (${classeInfo.pontoVidaInicial} no 1º nível)</p>
                  
                  <h4>Proficiências:</h4>
                  <ul class="abilities-list">`;
    
    classeInfo.proficiencias.forEach(prof => {
      html += `<li>${prof}</li>`;
    });
    
    html += `</ul>
              
              <h4>Habilidades de Classe:</h4>
              <ul class="abilities-list">`;
    
    classeInfo.habilidadesIniciais.forEach(hab => {
      html += `<li>${hab}</li>`;
    });
    
    html += `</ul>
              
              <h4>Perícias Sugeridas:</h4>
              <ul class="skills-list">`;
    
    classeInfo.bonusPericias.forEach(pericia => {
      html += `<li>${pericia}</li>`;
    });
    
    html += `</ul>
              
              <h4>Atributo Principal:</h4>
              <p>${classeInfo.atributoPrincipal.charAt(0).toUpperCase() + classeInfo.atributoPrincipal.slice(1)}</p>
            </div>`;
    
    classDetails.innerHTML = html;
  }
  
  // Atualizar pontos de vida com base na classe e nível
  function atualizarPontosVida(classe, nivel) {
    if (!classe || !window.classesInfo || !window.classesInfo[classe]) {
      return;
    }
    
    const classeInfo = window.classesInfo[classe];
    const constitModifier = calcularModificador(parseInt(document.getElementById('constituicao').value) || 0);
    
    // No nível 1, PV é o máximo do dado + modificador de constituição
    const pvBase = classeInfo.pontoVidaInicial;
    const pvTotal = pvBase + (constitModifier * nivel);
    
    pvTotalInput.value = pvTotal;
    pvAtualInput.value = pvTotal;
  }
  
  // Event Listeners
  
  // Alteração de raça
  racaSelect.addEventListener('change', function() {
    const racaSelecionada = this.value;
    racaAtual = racaSelecionada;
    
    console.log('Raça selecionada:', racaSelecionada);
    
    // Renderizar informações da raça
    renderizarInfoRaca(racaSelecionada);
    
    // Aplicar bônus de atributos da raça
    aplicarBonusRaca(racaSelecionada);
    
    // Atualizar pontos de vida
    atualizarPontosVida(classeAtual, parseInt(nivelInput.value) || 1);
  });
  
  // Alteração de classe
  classeSelect.addEventListener('change', function() {
    const classeSelecionada = this.value;
    classeAtual = classeSelecionada;
    
    // Renderizar informações da classe
    renderizarInfoClasse(classeSelecionada);
    
    // Atualizar pontos de vida
    atualizarPontosVida(classeSelecionada, parseInt(nivelInput.value) || 1);
  });
  
  // Alteração de nível
  nivelInput.addEventListener('change', function() {
    const nivel = parseInt(this.value) || 1;
    
    // Atualizar pontos de vida
    atualizarPontosVida(classeAtual, nivel);
  });
  
  // Alteração em qualquer atributo
  atributos.forEach(atributo => {
    atributo.valor.addEventListener('change', function() {
      // Atualizar a base de atributos
      atributosBase[atributo.nome] = parseInt(this.value) || 0;
      
      // Aplicar bônus de raça (para manter coerência)
      aplicarBonusRaca(racaAtual);
      
      // Atualizar pontos de vida (para refletir mudanças em constituição)
      atualizarPontosVida(classeAtual, parseInt(nivelInput.value) || 1);
    });
  });
  
  // Inicialização
  atualizarModificadores();
}); 
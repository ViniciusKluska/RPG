document.addEventListener('DOMContentLoaded', function() {
  // Verificar se estamos na página de criação de personagem
  const fichaGhanor = document.getElementById('ficha-ghanor');
  if (!fichaGhanor) {
    return; // Se não estamos na página de criação de personagem, não executar este script
  }
  
  // Referências aos elementos
  const form = document.getElementById('ficha-ghanor');
  const btnSave = document.getElementById('btn-save');
  const btnPrint = document.getElementById('btn-print');
  const btnReset = document.getElementById('btn-reset');
  const nivel = document.getElementById('nivel');
  
  // Atributos e seus modificadores
  const atributos = [
    { nome: 'forca', valor: document.getElementById('forca'), mod: document.getElementById('forca-mod') },
    { nome: 'destreza', valor: document.getElementById('destreza'), mod: document.getElementById('destreza-mod') },
    { nome: 'constituicao', valor: document.getElementById('constituicao'), mod: document.getElementById('constituicao-mod') },
    { nome: 'inteligencia', valor: document.getElementById('inteligencia'), mod: document.getElementById('inteligencia-mod') },
    { nome: 'sabedoria', valor: document.getElementById('sabedoria'), mod: document.getElementById('sabedoria-mod') },
    { nome: 'carisma', valor: document.getElementById('carisma'), mod: document.getElementById('carisma-mod') }
  ];
  
  // Mapeamento de atributos para seus códigos curtos
  const atributosMap = {
    'forca': 'FOR',
    'destreza': 'DES',
    'constituicao': 'CON',
    'inteligencia': 'INT',
    'sabedoria': 'SAB',
    'carisma': 'CAR'
  };
  
  // Perícias e seus atributos relacionados
  const pericias = [
    { nome: 'acrobacia', atributo: 'destreza' },
    { nome: 'adestramento', atributo: 'carisma' },
    { nome: 'atletismo', atributo: 'forca' },
    { nome: 'atuacao', atributo: 'carisma' },
    { nome: 'cavalgar', atributo: 'destreza' },
    { nome: 'conhecimento', atributo: 'inteligencia' },
    { nome: 'cura', atributo: 'sabedoria' },
    { nome: 'diplomacia', atributo: 'carisma' },
    { nome: 'furtividade', atributo: 'destreza' },
    { nome: 'intuicao', atributo: 'sabedoria' },
    { nome: 'intimidacao', atributo: 'carisma' },
    { nome: 'percepcao', atributo: 'sabedoria' },
    { nome: 'reflexos', atributo: 'destreza' },
    { nome: 'sobrevivencia', atributo: 'sabedoria' }
  ];

  // Função para calcular modificador de atributo
  function calcularModificador(valor) {
    return Math.floor((valor - 10) / 2);
  }
  
  // Função para atualizar modificadores de atributos
  function atualizarModificadores() {
    atributos.forEach(atributo => {
      const valor = parseInt(atributo.valor.value) || 0;
      const modificador = calcularModificador(valor);
      atributo.mod.textContent = (modificador >= 0) ? `+${modificador}` : modificador;
      
      // Disparar evento para recalcular perícias relacionadas
      const attrNome = atributo.nome;
      pericias.filter(p => p.atributo === attrNome).forEach(pericia => {
        calcularTotalPericia(pericia);
      });
    });
  }
  
  // Função para calcular total de perícia
  function calcularTotalPericia(pericia) {
    const nomePericia = pericia.nome;
    const atributoBase = pericia.atributo;
    
    const atributoElement = document.getElementById(atributoBase);
    if (!atributoElement) return; // Proteger contra elementos não existentes
    
    const modAtributo = calcularModificador(parseInt(atributoElement.value) || 0);
    const meioNivel = parseInt(document.getElementById(`${nomePericia}-half`).value) || 0;
    const treinado = document.getElementById(`${nomePericia}-train`).checked ? 2 : 0;
    const outros = parseInt(document.getElementById(`${nomePericia}-other`).value) || 0;
    
    // Atualiza o modificador do atributo visível
    document.getElementById(`${nomePericia}-mod`).value = modAtributo;
    
    // Calcula o total
    const total = modAtributo + meioNivel + treinado + outros;
    document.getElementById(`${nomePericia}-total`).value = total;
  }
  
  // Função para atualizar todas as perícias
  function atualizarPericias() {
    pericias.forEach(pericia => {
      calcularTotalPericia(pericia);
    });
  }
  
  // Função para calcular meio nível automaticamente
  function atualizarMeioNivel() {
    const nivelValor = parseInt(nivel.value) || 0;
    const meioNivelValor = Math.floor(nivelValor / 2);
    
    pericias.forEach(pericia => {
      const meioNivelInput = document.getElementById(`${pericia.nome}-half`);
      if (meioNivelInput) {
        meioNivelInput.value = meioNivelValor;
        meioNivelInput.dispatchEvent(new Event('change'));
      }
    });
  }
  
  // Função para salvar dados no localStorage
  function salvarFicha() {
    const formData = new FormData(form);
    const dados = {};
    
    for (const [key, value] of formData.entries()) {
      dados[key] = value;
    }
    
    // Adicionar checkboxes (não incluídas automaticamente no FormData se não marcadas)
    pericias.forEach(pericia => {
      const checkboxName = `${pericia.nome}-train`;
      const checkbox = document.getElementById(checkboxName);
      if (checkbox) {
        dados[checkboxName] = checkbox.checked;
      }
    });
    
    try {
      localStorage.setItem('fichaGhanor', JSON.stringify(dados));
      
      // Criar um backup para download
      const dataStr = JSON.stringify(dados);
      const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
      
      const exportFileDefaultName = 'ficha-ghanor-' + new Date().toISOString().slice(0, 10) + '.json';
      
      const linkElement = document.createElement('a');
      linkElement.setAttribute('href', dataUri);
      linkElement.setAttribute('download', exportFileDefaultName);
      linkElement.click();
      
      alert('Ficha salva com sucesso! Um backup foi baixado automaticamente.');
    } catch (e) {
      alert('Erro ao salvar: ' + e.message);
    }
  }
  
  // Função para carregar dados do localStorage
  function carregarFicha() {
    const dadosSalvos = localStorage.getItem('fichaGhanor');
    
    if (dadosSalvos) {
      try {
        const dados = JSON.parse(dadosSalvos);
        
        // Preencher campos de texto e número
        for (const [key, value] of Object.entries(dados)) {
          const elemento = document.getElementById(key);
          if (elemento && (elemento.type === 'text' || elemento.type === 'number' || elemento.tagName === 'TEXTAREA')) {
            elemento.value = value;
          }
        }
        
        // Preencher checkboxes
        pericias.forEach(pericia => {
          const checkboxName = `${pericia.nome}-train`;
          const checkbox = document.getElementById(checkboxName);
          if (checkbox && dados[checkboxName] !== undefined) {
            checkbox.checked = dados[checkboxName];
          }
        });
        
        // Atualizar modificadores e totais
        atualizarModificadores();
        atualizarPericias();
      } catch (e) {
        console.error('Erro ao carregar ficha:', e);
      }
    }
  }
  
  // Adicionar botão para importar ficha
  const btnImport = document.createElement('button');
  btnImport.type = 'button';
  btnImport.id = 'btn-import';
  btnImport.textContent = 'Importar Ficha';
  btnImport.addEventListener('click', function() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    
    input.onchange = function(e) {
      const file = e.target.files[0];
      const reader = new FileReader();
      
      reader.onload = function(event) {
        try {
          const dados = JSON.parse(event.target.result);
          
          // Preencher campos de texto e número
          for (const [key, value] of Object.entries(dados)) {
            const elemento = document.getElementById(key);
            if (elemento && (elemento.type === 'text' || elemento.type === 'number' || elemento.tagName === 'TEXTAREA')) {
              elemento.value = value;
            }
          }
          
          // Preencher checkboxes
          pericias.forEach(pericia => {
            const checkboxName = `${pericia.nome}-train`;
            const checkbox = document.getElementById(checkboxName);
            if (checkbox && dados[checkboxName] !== undefined) {
              checkbox.checked = dados[checkboxName];
            }
          });
          
          // Atualizar modificadores e totais
          atualizarModificadores();
          atualizarPericias();
          
          // Salvar no localStorage
          localStorage.setItem('fichaGhanor', JSON.stringify(dados));
          
          alert('Ficha importada com sucesso!');
        } catch (e) {
          alert('Erro ao importar ficha: ' + e.message);
        }
      };
      
      reader.readAsText(file);
    };
    
    input.click();
  });
  
  document.querySelector('.actions').appendChild(btnImport);
  
  // Event Listeners para atributos
  atributos.forEach(atributo => {
    atributo.valor.addEventListener('change', atualizarModificadores);
  });
  
  // Event Listeners para perícias
  pericias.forEach(pericia => {
    // Meio nível
    const halfElement = document.getElementById(`${pericia.nome}-half`);
    if (halfElement) {
      halfElement.addEventListener('change', function() {
        calcularTotalPericia(pericia);
      });
    }
    
    // Treinamento
    const trainElement = document.getElementById(`${pericia.nome}-train`);
    if (trainElement) {
      trainElement.addEventListener('change', function() {
        calcularTotalPericia(pericia);
      });
    }
    
    // Outros bônus
    const otherElement = document.getElementById(`${pericia.nome}-other`);
    if (otherElement) {
      otherElement.addEventListener('change', function() {
        calcularTotalPericia(pericia);
      });
    }
  });
  
  // Event Listener para nível
  nivel.addEventListener('change', atualizarMeioNivel);
  
  // Event Listener para botão de salvar
  btnSave.addEventListener('click', salvarFicha);
  
  // Event Listener para botão de imprimir
  btnPrint.addEventListener('click', function() {
    window.print();
  });
  
  // Event Listener para botão de reset
  btnReset.addEventListener('click', resetFicha);
  
  // Inicialização
  carregarFicha();
  atualizarModificadores();
  atualizarPericias();
  
  // Definir valores iniciais se não houver dados salvos
  if (!localStorage.getItem('fichaGhanor')) {
    nivel.value = 1;
    atualizarMeioNivel();
    // Definir valores iniciais para atributos
    atributos.forEach(atributo => {
      atributo.valor.value = 10;
    });
    atualizarModificadores();
  }
});

// Function to reset the character sheet
function resetFicha() {
  if (confirm('Tem certeza que deseja criar uma nova ficha? Todos os dados atuais serão perdidos.')) {
    // Limpar todos os campos de texto
    const textInputs = form.querySelectorAll('input[type="text"]');
    textInputs.forEach(input => input.value = '');
    
    // Limpar todos os campos numéricos exceto os calculados
    const numberInputs = form.querySelectorAll('input[type="number"]:not([readonly])');
    numberInputs.forEach(input => {
      if (!input.id.includes('-total') && !input.id.includes('-mod')) {
        input.value = '';
      }
    });
    
    // Desmarcar todas as checkboxes
    const checkboxes = form.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => checkbox.checked = false);
    
    // Limpar as textareas
    const textareas = form.querySelectorAll('textarea');
    textareas.forEach(textarea => textarea.value = '');
    
    // Definir valores iniciais
    nivel.value = 1;
    
    // Definir atributos padrão
    atributos.forEach(atributo => {
      atributo.valor.value = 10;
    });
    
    // Atualizar cálculos
    atualizarModificadores();
    atualizarMeioNivel();
    atualizarPericias();
    
    // Remover do localStorage
    localStorage.removeItem('fichaGhanor');
    
    alert('Nova ficha criada!');
  }
} 
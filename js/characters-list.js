document.addEventListener('DOMContentLoaded', function() {
    // Elementos DOM
    const characterList = document.getElementById('characterList');
    const emptyState = document.getElementById('emptyState');
    const characterCount = document.getElementById('characterCount');
    const searchInput = document.getElementById('searchInput');
    const classFilter = document.getElementById('classFilter');
    const levelFilter = document.getElementById('levelFilter');
    
    // Modais
    const viewModal = document.getElementById('viewCharacterModal');
    const deleteModal = document.getElementById('deleteConfirmModal');
    const characterDetails = document.getElementById('characterDetails');
    const deleteCharacterName = document.getElementById('deleteCharacterName');
    
    // Botões
    const closeViewModal = document.getElementById('closeViewModal');
    const closeViewModalBtn = document.getElementById('closeViewModalBtn');
    const printCharacterBtn = document.getElementById('printCharacterBtn');
    const editCharacterBtn = document.getElementById('editCharacterBtn');
    const closeDeleteModal = document.getElementById('closeDeleteModal');
    const cancelDeleteBtn = document.getElementById('cancelDeleteBtn');
    const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');

    // Estado da aplicação
    let characters = [];
    let currentCharacterId = null;
    
    // Carregar personagens do localStorage
    function loadCharacters() {
        const storedCharacters = localStorage.getItem('ghanorCharacters');
        if (storedCharacters) {
            characters = JSON.parse(storedCharacters);
        }
        renderCharacters();
    }
    
    // Salvar personagens no localStorage
    function saveCharacters() {
        localStorage.setItem('ghanorCharacters', JSON.stringify(characters));
    }
    
    // Aplicar filtros aos personagens
    function applyFilters() {
        const searchTerm = searchInput.value.toLowerCase();
        const classValue = classFilter.value.toLowerCase();
        const levelValue = levelFilter.value;
        
        return characters.filter(character => {
            // Filtro de busca
            const nameMatch = character.nome.toLowerCase().includes(searchTerm);
            
            // Filtro de classe
            const classMatch = classValue === '' || character.classe.toLowerCase() === classValue;
            
            // Filtro de nível
            let levelMatch = true;
            if (levelValue !== '') {
                const charLevel = parseInt(character.nivel);
                if (levelValue === '5') {
                    levelMatch = charLevel >= 5;
                } else {
                    levelMatch = charLevel === parseInt(levelValue);
                }
            }
            
            return nameMatch && classMatch && levelMatch;
        });
    }
    
    // Renderizar lista de personagens
    function renderCharacters() {
        const filteredCharacters = applyFilters();
        
        // Atualizar contador
        characterCount.textContent = `${filteredCharacters.length} personagens encontrados`;
        
        // Limpar lista
        characterList.innerHTML = '';
        
        // Mostrar estado vazio se não houver personagens
        if (filteredCharacters.length === 0) {
            emptyState.style.display = 'flex';
            return;
        }
        
        // Esconder estado vazio se houver personagens
        emptyState.style.display = 'none';
        
        // Renderizar cada personagem
        filteredCharacters.forEach(character => {
            const card = createCharacterCard(character);
            characterList.appendChild(card);
        });
    }
    
    // Criar card de personagem
    function createCharacterCard(character) {
        const card = document.createElement('div');
        card.className = `character-card ${character.classe.toLowerCase()}`;
        card.setAttribute('data-id', character.id);
        
        // Determinar o ícone da classe
        let classIcon = '';
        switch(character.classe.toLowerCase()) {
            case 'guerreiro': classIcon = 'fa-sword'; break;
            case 'mago': classIcon = 'fa-hat-wizard'; break;
            case 'clerigo': classIcon = 'fa-cross'; break;
            case 'ladino': classIcon = 'fa-mask'; break;
            case 'bardo': classIcon = 'fa-music'; break;
            case 'druida': classIcon = 'fa-leaf'; break;
            case 'paladino': classIcon = 'fa-shield-alt'; break;
            case 'ranger': classIcon = 'fa-bow-arrow'; break;
            default: classIcon = 'fa-user';
        }
        
        card.innerHTML = `
            <div class="character-avatar">
                <i class="fas ${classIcon}"></i>
            </div>
            <div class="character-info">
                <h3>${character.nome}</h3>
                <div class="character-details">
                    <span class="character-race">${character.raca}</span>
                    <span class="character-class">${character.classe}</span>
                    <span class="character-level">Nível ${character.nivel}</span>
                </div>
            </div>
            <div class="character-actions">
                <button class="action-btn view-btn" data-id="${character.id}" title="Ver Detalhes">
                    <i class="fas fa-eye"></i>
                </button>
                <button class="action-btn edit-btn" data-id="${character.id}" title="Editar Personagem">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="action-btn delete-btn" data-id="${character.id}" title="Excluir Personagem">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        `;
        
        return card;
    }
    
    // Renderizar detalhes do personagem no modal
    function renderCharacterDetails(character) {
        if (!character) return;
        
        characterDetails.innerHTML = `
            <div class="character-sheet-preview">
                <div class="character-header">
                    <h3>${character.nome}</h3>
                    <div class="character-subtitle">
                        ${character.raca} ${character.classe} - Nível ${character.nivel}
                    </div>
                </div>
                
                <div class="character-stats">
                    <div class="stats-section">
                        <h4>Atributos</h4>
                        <div class="attributes-grid">
                            <div class="attribute-item">
                                <span class="attribute-label">FOR</span>
                                <span class="attribute-value">${character.atributos.forca}</span>
                                <span class="attribute-mod">${getModifier(character.atributos.forca)}</span>
                            </div>
                            <div class="attribute-item">
                                <span class="attribute-label">DES</span>
                                <span class="attribute-value">${character.atributos.destreza}</span>
                                <span class="attribute-mod">${getModifier(character.atributos.destreza)}</span>
                            </div>
                            <div class="attribute-item">
                                <span class="attribute-label">CON</span>
                                <span class="attribute-value">${character.atributos.constituicao}</span>
                                <span class="attribute-mod">${getModifier(character.atributos.constituicao)}</span>
                            </div>
                            <div class="attribute-item">
                                <span class="attribute-label">INT</span>
                                <span class="attribute-value">${character.atributos.inteligencia}</span>
                                <span class="attribute-mod">${getModifier(character.atributos.inteligencia)}</span>
                            </div>
                            <div class="attribute-item">
                                <span class="attribute-label">SAB</span>
                                <span class="attribute-value">${character.atributos.sabedoria}</span>
                                <span class="attribute-mod">${getModifier(character.atributos.sabedoria)}</span>
                            </div>
                            <div class="attribute-item">
                                <span class="attribute-label">CAR</span>
                                <span class="attribute-value">${character.atributos.carisma}</span>
                                <span class="attribute-mod">${getModifier(character.atributos.carisma)}</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="stats-section">
                        <h4>Combate</h4>
                        <div class="combat-stats">
                            <div class="stat-item">
                                <span class="stat-label">Pontos de Vida</span>
                                <span class="stat-value">${character.pontosVida}</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Classe de Armadura</span>
                                <span class="stat-value">${character.classeArmadura}</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Iniciativa</span>
                                <span class="stat-value">${getModifier(character.atributos.destreza)}</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Deslocamento</span>
                                <span class="stat-value">${character.deslocamento || '9m'}</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="character-abilities">
                    <div class="abilities-section">
                        <h4>Perícias</h4>
                        <ul class="skills-list">
                            ${character.pericias ? character.pericias.map(pericia => 
                                `<li>${pericia}</li>`).join('') : '<li>Nenhuma perícia</li>'}
                        </ul>
                    </div>
                    
                    <div class="abilities-section">
                        <h4>Equipamento</h4>
                        <ul class="equipment-list">
                            ${character.equipamentos ? character.equipamentos.map(item => 
                                `<li>${item}</li>`).join('') : '<li>Nenhum equipamento</li>'}
                        </ul>
                    </div>
                </div>
                
                <div class="character-description">
                    <h4>História do Personagem</h4>
                    <p>${character.historia || 'Nenhuma história definida.'}</p>
                </div>
            </div>
        `;
    }
    
    // Calcular modificador de atributo
    function getModifier(attributeValue) {
        const modifier = Math.floor((attributeValue - 10) / 2);
        return modifier >= 0 ? `+${modifier}` : `${modifier}`;
    }
    
    // Abrir modal de visualização
    function openViewModal(characterId) {
        const character = characters.find(char => char.id === characterId);
        if (character) {
            currentCharacterId = characterId;
            renderCharacterDetails(character);
            viewModal.style.display = 'flex';
        }
    }
    
    // Abrir modal de confirmação de exclusão
    function openDeleteModal(characterId) {
        const character = characters.find(char => char.id === characterId);
        if (character) {
            currentCharacterId = characterId;
            deleteCharacterName.textContent = character.nome;
            deleteModal.style.display = 'flex';
        }
    }
    
    // Excluir personagem
    function deleteCharacter(characterId) {
        characters = characters.filter(char => char.id !== characterId);
        saveCharacters();
        renderCharacters();
        closeDeleteModal();
    }
    
    // Fechar modal de visualização
    function closeViewModal() {
        viewModal.style.display = 'none';
        currentCharacterId = null;
    }
    
    // Fechar modal de exclusão
    function closeDeleteModal() {
        deleteModal.style.display = 'none';
        currentCharacterId = null;
    }
    
    // Redirecionar para página de edição
    function goToEditPage(characterId) {
        window.location.href = `criar-personagem.html?id=${characterId}`;
    }
    
    // Imprimir ficha de personagem
    function printCharacterSheet() {
        const character = characters.find(char => char.id === currentCharacterId);
        if (!character) return;
        
        // Cria uma nova janela para impressão
        const printWindow = window.open('', '_blank');
        
        // Estilo para impressão
        const printStylesheet = `
            <style>
                body {
                    font-family: 'Roboto', sans-serif;
                    color: #333;
                    margin: 20px;
                }
                .character-sheet {
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 20px;
                    border: 2px solid #333;
                    background-color: #f9f9f9;
                }
                .sheet-header {
                    text-align: center;
                    margin-bottom: 20px;
                    border-bottom: 2px solid #333;
                    padding-bottom: 10px;
                }
                .sheet-title {
                    font-size: 24px;
                    font-weight: bold;
                    margin-bottom: 5px;
                }
                .character-name {
                    font-size: 36px;
                    font-weight: bold;
                    margin: 10px 0;
                }
                .character-subtitle {
                    font-size: 18px;
                    margin-bottom: 15px;
                }
                .attributes-section {
                    margin: 20px 0;
                }
                .section-title {
                    font-size: 20px;
                    font-weight: bold;
                    margin-bottom: 10px;
                    border-bottom: 1px solid #333;
                    padding-bottom: 5px;
                }
                .attributes-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 15px;
                    margin-bottom: 20px;
                }
                .attribute-box {
                    border: 1px solid #333;
                    padding: 10px;
                    text-align: center;
                }
                .attribute-label {
                    font-weight: bold;
                    font-size: 14px;
                    display: block;
                }
                .attribute-value {
                    font-size: 24px;
                    font-weight: bold;
                    display: block;
                    margin: 5px 0;
                }
                .attribute-mod {
                    font-size: 18px;
                    display: block;
                }
                .combat-stats {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 15px;
                    margin-bottom: 20px;
                }
                .stat-item {
                    border: 1px solid #333;
                    padding: 10px;
                }
                .stat-label {
                    font-weight: bold;
                    font-size: 14px;
                    display: block;
                }
                .stat-value {
                    font-size: 18px;
                    text-align: center;
                    display: block;
                    margin-top: 5px;
                }
                .section-content {
                    margin-bottom: 20px;
                }
                .list-title {
                    font-weight: bold;
                    margin-bottom: 5px;
                }
                ul {
                    margin: 0;
                    padding-left: 20px;
                }
                .description-box {
                    border: 1px solid #333;
                    padding: 10px;
                    min-height: 100px;
                }
                @media print {
                    body {
                        background-color: white;
                    }
                    .character-sheet {
                        border: none;
                        background-color: white;
                    }
                    .no-print {
                        display: none;
                    }
                }
            </style>
        `;
        
        // Conteúdo da ficha
        const sheetContent = `
            <div class="character-sheet">
                <div class="sheet-header">
                    <div class="sheet-title">GHANOR RPG - FICHA DE PERSONAGEM</div>
                    <h1 class="character-name">${character.nome}</h1>
                    <div class="character-subtitle">
                        ${character.raca} ${character.classe} - Nível ${character.nivel}
                    </div>
                </div>
                
                <div class="attributes-section">
                    <h2 class="section-title">Atributos</h2>
                    <div class="attributes-grid">
                        <div class="attribute-box">
                            <span class="attribute-label">FORÇA</span>
                            <span class="attribute-value">${character.atributos.forca}</span>
                            <span class="attribute-mod">${getModifier(character.atributos.forca)}</span>
                        </div>
                        <div class="attribute-box">
                            <span class="attribute-label">DESTREZA</span>
                            <span class="attribute-value">${character.atributos.destreza}</span>
                            <span class="attribute-mod">${getModifier(character.atributos.destreza)}</span>
                        </div>
                        <div class="attribute-box">
                            <span class="attribute-label">CONSTITUIÇÃO</span>
                            <span class="attribute-value">${character.atributos.constituicao}</span>
                            <span class="attribute-mod">${getModifier(character.atributos.constituicao)}</span>
                        </div>
                        <div class="attribute-box">
                            <span class="attribute-label">INTELIGÊNCIA</span>
                            <span class="attribute-value">${character.atributos.inteligencia}</span>
                            <span class="attribute-mod">${getModifier(character.atributos.inteligencia)}</span>
                        </div>
                        <div class="attribute-box">
                            <span class="attribute-label">SABEDORIA</span>
                            <span class="attribute-value">${character.atributos.sabedoria}</span>
                            <span class="attribute-mod">${getModifier(character.atributos.sabedoria)}</span>
                        </div>
                        <div class="attribute-box">
                            <span class="attribute-label">CARISMA</span>
                            <span class="attribute-value">${character.atributos.carisma}</span>
                            <span class="attribute-mod">${getModifier(character.atributos.carisma)}</span>
                        </div>
                    </div>
                </div>
                
                <div class="attributes-section">
                    <h2 class="section-title">Estatísticas de Combate</h2>
                    <div class="combat-stats">
                        <div class="stat-item">
                            <span class="stat-label">Pontos de Vida</span>
                            <span class="stat-value">${character.pontosVida}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Classe de Armadura</span>
                            <span class="stat-value">${character.classeArmadura}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Iniciativa</span>
                            <span class="stat-value">${getModifier(character.atributos.destreza)}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Deslocamento</span>
                            <span class="stat-value">${character.deslocamento || '9m'}</span>
                        </div>
                    </div>
                </div>
                
                <div class="attributes-section">
                    <h2 class="section-title">Perícias</h2>
                    <div class="section-content">
                        <ul>
                            ${character.pericias ? character.pericias.map(pericia => 
                                `<li>${pericia}</li>`).join('') : '<li>Nenhuma perícia</li>'}
                        </ul>
                    </div>
                </div>
                
                <div class="attributes-section">
                    <h2 class="section-title">Equipamento</h2>
                    <div class="section-content">
                        <ul>
                            ${character.equipamentos ? character.equipamentos.map(item => 
                                `<li>${item}</li>`).join('') : '<li>Nenhum equipamento</li>'}
                        </ul>
                    </div>
                </div>
                
                <div class="attributes-section">
                    <h2 class="section-title">História do Personagem</h2>
                    <div class="description-box">
                        ${character.historia || 'Nenhuma história definida.'}
                    </div>
                </div>
                
                <div class="no-print" style="text-align: center; margin-top: 20px;">
                    <button onclick="window.print();" style="padding: 10px 20px; font-size: 16px; cursor: pointer;">
                        Imprimir Ficha
                    </button>
                </div>
            </div>
        `;
        
        // Escreve na nova janela
        printWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Ficha de Personagem - ${character.nome}</title>
                ${printStylesheet}
            </head>
            <body>
                ${sheetContent}
            </body>
            </html>
        `);
        
        printWindow.document.close();
    }
    
    // Event Listeners
    searchInput.addEventListener('input', renderCharacters);
    classFilter.addEventListener('change', renderCharacters);
    levelFilter.addEventListener('change', renderCharacters);
    
    // Evento de clique em cards
    characterList.addEventListener('click', function(event) {
        const button = event.target.closest('button');
        if (!button) return;
        
        const characterId = button.getAttribute('data-id');
        
        if (button.classList.contains('view-btn')) {
            openViewModal(characterId);
        } else if (button.classList.contains('edit-btn')) {
            goToEditPage(characterId);
        } else if (button.classList.contains('delete-btn')) {
            openDeleteModal(characterId);
        }
    });
    
    // Eventos de modal de visualização
    closeViewModal.addEventListener('click', closeViewModal);
    closeViewModalBtn.addEventListener('click', closeViewModal);
    printCharacterBtn.addEventListener('click', printCharacterSheet);
    editCharacterBtn.addEventListener('click', function() {
        goToEditPage(currentCharacterId);
    });
    
    // Eventos de modal de exclusão
    closeDeleteModal.addEventListener('click', closeDeleteModal);
    cancelDeleteBtn.addEventListener('click', closeDeleteModal);
    confirmDeleteBtn.addEventListener('click', function() {
        deleteCharacter(currentCharacterId);
    });
    
    // Fechar modais ao clicar fora
    window.addEventListener('click', function(event) {
        if (event.target === viewModal) {
            closeViewModal();
        } else if (event.target === deleteModal) {
            closeDeleteModal();
        }
    });
    
    // Adicionar personagens de exemplo para teste
    function addSampleCharacters() {
        // Verificar se já existem personagens
        if (characters.length > 0) return;
        
        // Personagens de exemplo
        const sampleCharacters = [
            {
                id: 'char1',
                nome: 'Thorgar',
                raca: 'Anão',
                classe: 'Guerreiro',
                nivel: '3',
                atributos: {
                    forca: 16,
                    destreza: 12,
                    constituicao: 18,
                    inteligencia: 10,
                    sabedoria: 14,
                    carisma: 8
                },
                pontosVida: 32,
                classeArmadura: 16,
                pericias: ['Atletismo', 'Intimidação', 'Percepção'],
                equipamentos: ['Machado de Batalha', 'Cota de Malha', 'Escudo de Madeira', 'Poções de Cura (2)'],
                historia: 'Thorgar é um anão montanhês que deixou seu clã para vingar a morte de seu irmão mais novo. Ele é conhecido por sua força bruta e teimosia.'
            },
            {
                id: 'char2',
                nome: 'Elindra',
                raca: 'Elfo',
                classe: 'Mago',
                nivel: '4',
                atributos: {
                    forca: 8,
                    destreza: 16,
                    constituicao: 12,
                    inteligencia: 18,
                    sabedoria: 14,
                    carisma: 10
                },
                pontosVida: 22,
                classeArmadura: 13,
                pericias: ['Arcana', 'História', 'Investigação', 'Natureza'],
                equipamentos: ['Bastão Arcano', 'Grimório', 'Componentes de Magia', 'Anel da Proteção'],
                historia: 'Elindra é uma elfa da floresta que descobriu seu talento para a magia ainda jovem. Estuda os segredos arcanos para proteger sua terra natal.'
            },
            {
                id: 'char3',
                nome: 'Grimbold',
                raca: 'Humano',
                classe: 'Clerigo',
                nivel: '2',
                atributos: {
                    forca: 14,
                    destreza: 10,
                    constituicao: 14,
                    inteligencia: 12,
                    sabedoria: 17,
                    carisma: 13
                },
                pontosVida: 18,
                classeArmadura: 15,
                pericias: ['Intuição', 'Medicina', 'Persuasão', 'Religião'],
                equipamentos: ['Maça', 'Escudo com Símbolo Sagrado', 'Armadura de Couro Batido', 'Amuleto Sagrado'],
                historia: 'Grimbold serve o deus da luz e da cura. Viaja pelo mundo ajudando os necessitados e combatendo as forças das trevas.'
            }
        ];
        
        characters = sampleCharacters;
        saveCharacters();
    }
    
    // Inicialização
    loadCharacters();
    addSampleCharacters();
});
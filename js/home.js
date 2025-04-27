document.addEventListener('DOMContentLoaded', function() {
  // Elementos do formulário de login
  const loginForm = document.getElementById('login-form');
  const loginMessage = document.getElementById('login-message');
  const btnRegister = document.getElementById('btn-register');
  const username = document.getElementById('username');
  const password = document.getElementById('password');
  const userType = document.getElementById('user-type');

  // Sistema de usuários simulado (Em produção, isto seria um backend real)
  // Por enquanto, armazenamos no localStorage
  const getUsers = () => {
    const users = localStorage.getItem('ghanorUsers');
    return users ? JSON.parse(users) : [];
  };

  const saveUsers = (users) => {
    localStorage.setItem('ghanorUsers', JSON.stringify(users));
  };

  // Verificar se já existe algum usuário cadastrado
  const initializeUsers = () => {
    const users = getUsers();
    if (users.length === 0) {
      // Se não existir nenhum usuário, criar um usuário padrão de administrador
      const defaultUsers = [
        {
          username: 'admin',
          password: 'admin123',
          type: 'dm',
          characters: []
        },
        {
          username: 'jogador',
          password: 'jogador123',
          type: 'player',
          characters: []
        }
      ];
      saveUsers(defaultUsers);
      console.log('Usuários padrão criados');
    }
  };

  // Inicializar usuários
  initializeUsers();

  // Função de login
  const login = (username, password, type) => {
    const users = getUsers();
    const user = users.find(u => 
      u.username === username && 
      u.password === password &&
      u.type === type
    );

    if (user) {
      // Login bem-sucedido
      sessionStorage.setItem('currentUser', JSON.stringify({
        username: user.username,
        type: user.type
      }));
      
      return { success: true, message: 'Login realizado com sucesso!' };
    } else {
      // Login falhou
      return { success: false, message: 'Usuário, senha ou tipo incorretos!' };
    }
  };

  // Função de registro
  const register = (username, password, type) => {
    const users = getUsers();
    
    // Verificar se o usuário já existe
    const existingUser = users.find(u => u.username === username);
    if (existingUser) {
      return { success: false, message: 'Este nome de usuário já está em uso!' };
    }

    // Adicionar novo usuário
    users.push({
      username,
      password,
      type,
      characters: []
    });
    
    saveUsers(users);
    return { success: true, message: 'Registro realizado com sucesso! Você pode fazer login agora.' };
  };

  // Verificar se o usuário já está logado
  const checkLoggedInUser = () => {
    const currentUser = sessionStorage.getItem('currentUser');
    if (currentUser) {
      const user = JSON.parse(currentUser);
      
      // Mostrar mensagem de boas-vindas
      showMessage(`Bem-vindo de volta, ${user.username}! (${user.type === 'dm' ? 'Mestre' : 'Jogador'})`, true);
      
      // Atualizar os links de navegação baseado no tipo de usuário
      updateNavigation(user.type);
      
      return true;
    }
    return false;
  };

  // Atualizar navegação baseado no tipo de usuário
  const updateNavigation = (userType) => {
    const createCharLink = document.querySelector('a[href="pages/criar-personagem.html"]');
    const myCharactersLink = document.querySelector('a[href="pages/fichas.html"]');
    
    if (userType === 'dm') {
      // Adicionar links específicos para mestres
      if (myCharactersLink) {
        myCharactersLink.textContent = 'Painel do Mestre';
        myCharactersLink.href = 'pages/painel-mestre.html';
      }
    }
  };

  // Exibir mensagem de sucesso ou erro
  const showMessage = (message, isSuccess) => {
    loginMessage.textContent = message;
    loginMessage.className = 'login-message ' + (isSuccess ? 'success' : 'error');
    loginMessage.style.display = 'block';
    
    // Esconder a mensagem após 5 segundos
    setTimeout(() => {
      loginMessage.style.display = 'none';
    }, 5000);
  };

  // Event listeners
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const result = login(username.value, password.value, userType.value);
      
      if (result.success) {
        showMessage(result.message, true);
        
        // Redirecionamento após login
        setTimeout(() => {
          if (userType.value === 'dm') {
            window.location.href = 'pages/painel-mestre.html';
          } else {
            window.location.href = 'pages/fichas.html';
          }
        }, 1500);
      } else {
        showMessage(result.message, false);
      }
    });
  }

  if (btnRegister) {
    btnRegister.addEventListener('click', function() {
      // Validar os campos
      if (!username.value || !password.value) {
        showMessage('Por favor, preencha todos os campos!', false);
        return;
      }
      
      // Registrar novo usuário
      const result = register(username.value, password.value, userType.value);
      showMessage(result.message, result.success);
      
      if (result.success) {
        // Limpar os campos após registro bem-sucedido
        username.value = '';
        password.value = '';
      }
    });
  }

  // Verificar se há um usuário logado ao carregar a página
  checkLoggedInUser();
}); 
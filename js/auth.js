document.addEventListener('DOMContentLoaded', function() {
  const userInfoElement = document.getElementById('user-info');
  
  // Verificar se o usuário está logado
  function checkLoggedInUser() {
    const currentUser = sessionStorage.getItem('currentUser');
    if (currentUser && userInfoElement) {
      const user = JSON.parse(currentUser);
      
      // Mostrar informações do usuário
      userInfoElement.innerHTML = `
        <span class="username">${user.username}</span>
        <span class="user-type">(${user.type === 'dm' ? 'Mestre' : 'Jogador'})</span>
        <button id="btn-logout" class="btn-logout">Sair</button>
      `;
      
      // Adicionar evento de logout
      const btnLogout = document.getElementById('btn-logout');
      if (btnLogout) {
        btnLogout.addEventListener('click', logout);
      }
      
      return true;
    } else if (userInfoElement) {
      // Usuário não está logado
      userInfoElement.innerHTML = `
        <a href="../index.html#login-section" class="btn-login-link">Entrar</a>
      `;
      return false;
    }
    return false;
  }
  
  // Função de logout
  function logout() {
    sessionStorage.removeItem('currentUser');
    window.location.href = '../index.html';
  }
  
  // Verificar estado de login ao carregar a página
  checkLoggedInUser();
}); 
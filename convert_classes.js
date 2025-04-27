// Script para converter os arquivos JSON de classes para JS
// Salve este arquivo na raiz do projeto e execute com Node.js

const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, 'js', 'classes');
const template = `// Informações detalhadas sobre a classe {ClassName} para o sistema Ghanor RPG

// Definição do objeto {classId} com os dados da classe
const {classId} = {data};

// Certificando-se de que processarClasse está definido antes de chamá-lo
if (typeof processarClasse === 'function') {
  // Processar a classe para o formato esperado pelo sistema
  processarClasse('{classId}', {classId});
} else {
  // Se a função não estiver disponível, adicionar um listener para quando estiver
  document.addEventListener('DOMContentLoaded', function() {
    if (typeof processarClasse === 'function') {
      processarClasse('{classId}', {classId});
    } else {
      console.error('Função processarClasse não encontrada para processamento da classe {ClassName}');
    }
  });
}`;

// Ler todos os arquivos JSON no diretório
fs.readdir(sourceDir, (err, files) => {
  if (err) {
    console.error('Erro ao ler o diretório:', err);
    return;
  }

  const jsonFiles = files.filter(file => file.endsWith('.json') && file !== 'summary.json');
  
  jsonFiles.forEach(jsonFile => {
    const filePath = path.join(sourceDir, jsonFile);
    
    // Ler o conteúdo do arquivo JSON
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error(`Erro ao ler o arquivo ${jsonFile}:`, err);
        return;
      }
      
      try {
        // Analisar o JSON
        const classData = JSON.parse(data);
        const classId = classData.id;
        const className = classData.name;
        
        // Simplificar para compatibilidade com processarClasse
        // Remover detalhes muito específicos que podem causar erros
        if (classData.abilities) {
          Object.keys(classData.abilities).forEach(level => {
            classData.abilities[level].forEach(ability => {
              if (ability.type === 'choice' && ability.effects && ability.effects.options) {
                ability.effects.options.forEach(option => {
                  // Simplificar opções (remover detalhes profundos)
                  if (option.basic_secret) delete option.basic_secret;
                  if (option.improved_secret) delete option.improved_secret;
                  if (option.superior_secret) delete option.superior_secret;
                });
              }
            });
          });
        }
        
        // Limitar número de poderes para arquivo menor
        if (classData.powers && classData.powers.list && classData.powers.list.length > 5) {
          classData.powers.list = classData.powers.list.slice(0, 5);
        }
        
        // Criar o conteúdo do arquivo JS
        const jsContent = template
          .replace(/{ClassName}/g, className)
          .replace(/{classId}/g, classId)
          .replace(/{data}/g, JSON.stringify(classData, null, 2));
        
        // Salvar o arquivo JS
        const jsFilePath = path.join(sourceDir, `${classId}.js`);
        fs.writeFile(jsFilePath, jsContent, 'utf8', err => {
          if (err) {
            console.error(`Erro ao escrever o arquivo ${classId}.js:`, err);
          } else {
            console.log(`Arquivo ${classId}.js criado com sucesso!`);
          }
        });
      } catch (e) {
        console.error(`Erro ao processar o arquivo ${jsonFile}:`, e);
      }
    });
  });
});

console.log('Iniciando conversão de arquivos JSON para JS...'); 
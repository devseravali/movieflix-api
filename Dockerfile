# Usa a imagem oficial do Node.js na versão 20
FROM node:20

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia o arquivo de dependências para o diretório de trabalho do contêiner
COPY package.json .

# Instala as dependências do projeto
RUN npm install

# Copia todo o código-fonte do projeto para dentro do contêiner
COPY . .

# Expõe a porta 3000 para acesso externo
EXPOSE 3000

# Comando padrão para iniciar a aplicação
CMD ["npm", "start"]
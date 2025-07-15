# Imagem base do Node.js
FROM node:20

# Define o diretório de trabalho dentro do container
WORKDIR /ticketapp

# Copia os arquivos de dependência
COPY package*.json tsconfig.json ./

# Instala as dependências
RUN rm -rf node_modules
RUN npm install

# Copia todo o restante do código
COPY . .

# Compila o projeto TypeScript para JavaScript
RUN npm run build

# Expõe a porta da aplicação
EXPOSE 3000

# Comando para iniciar a aplicação compilada
CMD ["node", "src/main.js"]

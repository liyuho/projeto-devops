# Etapa 1: usar Node.js para gerar o build
FROM node:20-alpine AS build

# Diretório de trabalho
WORKDIR /app

# Copiar arquivos de dependências
COPY package*.json ./

# Instalar dependências
RUN npm ci

# Copiar o restante do projeto
COPY . .

# Gerar a versão de produção
RUN npm run build


# Etapa 2: servidor para executar a aplicação
FROM nginx:alpine

# Copiar o build do React para o Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expor a porta 80
EXPOSE 80

# Iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
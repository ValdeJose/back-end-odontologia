# Usar una imagen base oficial de Node.js
FROM node:20-alpine

# Crear un directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de la aplicación
COPY . .

# Construir la aplicación
RUN npm run build

# Exponer el puerto que la aplicación va a usar
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "run", "start"]

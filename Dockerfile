# Image Node officielle
FROM node:22-alpine

# Dossier de travail
WORKDIR /app

# Copier les dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le projet
COPY . .

# Port Vite
EXPOSE 5173

# Lancement Vite avec accès réseau
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

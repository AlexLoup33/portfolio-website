# Stage 1: Build
FROM node:20-alpine AS builder

# Dossier de travail
WORKDIR /app

# Copier package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm ci

# Copier le reste des fichiers
COPY . .

# Build production
RUN npm run build -- --base="/"

# Stage 2: Production avec Nginx
FROM nginx:alpine

# Supprimer la config par défaut
RUN rm /etc/nginx/conf.d/default.conf

# Copier notre config Nginx personnalisée
COPY nginx.conf /etc/nginx/conf.d/

# Copier les fichiers build depuis le stage builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Créer le dossier logs pour Nginx
RUN mkdir -p /var/log/nginx

# Exposer le port 80
EXPOSE 80

# Lancer Nginx en premier plan
CMD ["nginx", "-g", "daemon off;"]

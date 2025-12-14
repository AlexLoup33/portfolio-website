# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Copier package.json et package-lock.json
COPY package*.json ./

# Installer toutes les dépendances (dev + prod)
RUN npm ci

# Copier le reste du projet
COPY . .

# Build production avec base "/" pour SPA
RUN npm run build -- --base "/"

# Stage 2: Production avec Nginx
FROM nginx:alpine

# Supprimer la config par défaut
RUN rm /etc/nginx/conf.d/default.conf

# Copier config nginx personnalisée
COPY nginx.conf /etc/nginx/conf.d/

# Copier le build depuis le stage builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Créer dossier logs pour Nginx
RUN mkdir -p /var/log/nginx

# Exposer port 80
EXPOSE 80

# Lancer Nginx en premier plan
CMD ["nginx", "-g", "daemon off;"]

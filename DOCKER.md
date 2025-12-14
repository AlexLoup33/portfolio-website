# Guide de déploiement Docker

## Prérequis
- Docker installé sur le VPS

## Méthode 1 : Avec Docker Compose (Recommandé)

### 1. Transférer les fichiers sur le VPS
```bash
# Depuis votre machine locale, transférer les fichiers nécessaires
scp -r . user@vps-ip:/path/to/portfolio-website
```

### 2. Sur le VPS, se placer dans le dossier du projet
```bash
cd /path/to/portfolio-website
```

### 3. Construire et lancer le container
```bash
# Construire l'image et lancer le container
docker-compose up -d --build

# Voir les logs
docker-compose logs -f

# Arrêter le container
docker-compose down
```

Le site sera accessible sur `http://vps-ip:8082`

## Méthode 2 : Avec Docker uniquement

### 1. Construire l'image
```bash
docker build -t portfolio-website .
```

### 2. Lancer le container
```bash
docker run -d \
  --name portfolio-website \
  -p 8082:80 \
  --restart unless-stopped \
  portfolio-website
```

### 3. Commandes utiles
```bash
# Voir les logs
docker logs -f portfolio-website

# Arrêter le container
docker stop portfolio-website

# Redémarrer le container
docker restart portfolio-website

# Supprimer le container
docker rm portfolio-website

# Supprimer l'image
docker rmi portfolio-website
```

## Mise à jour du site

### Avec Docker Compose
```bash
# Arrêter le container
docker-compose down

# Récupérer les dernières modifications (si vous utilisez git)
git pull

# Reconstruire et relancer
docker-compose up -d --build
```

### Avec Docker uniquement
```bash
# Arrêter et supprimer le container
docker stop portfolio-website
docker rm portfolio-website

# Récupérer les dernières modifications
git pull

# Reconstruire l'image
docker build -t portfolio-website .

# Relancer le container
docker run -d \
  --name portfolio-website \
  -p 8082:80 \
  --restart unless-stopped \
  portfolio-website
```

## Configuration du port

Le port est configuré sur 8082. Pour changer le port d'exposition, modifiez le fichier `docker-compose.yml` :
```yaml
ports:
  - "8082:80"  # Port actuel (8082 externe -> 80 interne)
  # ou
  - "80:80"  # Pour exposer directement sur le port 80
  # ou
  - "3000:80"  # Pour exposer sur le port 3000
```

## Utilisation avec un reverse proxy (Nginx/Apache)

Si vous utilisez un reverse proxy sur le VPS, vous pouvez :
1. Exposer le container sur `localhost:8082` (au lieu de `0.0.0.0:8082`)
2. Configurer votre reverse proxy pour pointer vers `localhost:8082`

Exemple de configuration Nginx :
```nginx
server {
    listen 80;
    server_name votre-domaine.com;

    location / {
        proxy_pass http://localhost:8082;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

## Vérification

Pour vérifier que tout fonctionne :
```bash
# Vérifier que le container tourne
docker ps

# Tester l'accès
curl http://localhost:8082
```

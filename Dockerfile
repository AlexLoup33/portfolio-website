# ========================
# STAGE 1 — BUILD
# ========================
FROM node:20-alpine AS builder

WORKDIR /app

# Install deps
COPY package*.json ./
RUN npm ci

# Copy source
COPY . .

# Build for production
RUN npm run build:strict


# ========================
# STAGE 2 — NGINX
# ========================
FROM nginx:alpine

# Remove default config
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build output
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose HTTP
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

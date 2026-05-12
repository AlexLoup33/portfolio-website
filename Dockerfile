FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

RUN npm install -g serve

EXPOSE 4000

CMD ["serve", "-s", "dist", "-l", "4000"]
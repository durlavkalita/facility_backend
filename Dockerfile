FROM node:24-alpine AS builder

RUN apk add --no-cache python3 make g++
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci --include=dev

COPY . .
RUN npm run build

FROM node:24-alpine
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci --only=production && \
  npm cache clean --force

COPY --from=builder /usr/src/app/dist ./dist

EXPOSE 3000
CMD ["npm", "run", "prod"]
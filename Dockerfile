FROM node:lts-alpine AS builder
WORKDIR /app
COPY . .
RUN npm ci &&\
    npm run build

FROM node:lts-alpine
WORKDIR /app
COPY package.json .
COPY --from=builder /app/node_modules node_modules
COPY --from=builder /app/dist dist
CMD [ "npm", "run", "start:prod" ]

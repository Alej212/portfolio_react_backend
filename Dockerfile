FROM node:21-alpine3.17

WORKDIR /app

COPY . .

RUN npm install -g pnpm
RUN pnpm install

EXPOSE 3000

CMD [ "pnpm","dev" ]
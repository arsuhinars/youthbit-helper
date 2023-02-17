FROM node:19-slim

WORKDIR /frontend

COPY package.json .
COPY package-lock.json .
RUN npm install

EXPOSE 3000

ENTRYPOINT [ "bash", "-c", "npm start $@", "docker-entrypoint.sh" ]

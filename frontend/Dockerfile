FROM node:19-bullseye

WORKDIR /frontend

COPY package.json .
COPY package-lock.json .

RUN npm install

EXPOSE 3000

ENTRYPOINT [ "bash", "-c", "npm run dev $@", "docker-entrypoint.sh" ]

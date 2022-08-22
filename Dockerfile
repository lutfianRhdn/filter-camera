FROM node:lts-slim
WORKDIR ./

COPY . .
RUN npm install

EXPOSE 3000
ENTRYPOINT ["npm","run","start"]
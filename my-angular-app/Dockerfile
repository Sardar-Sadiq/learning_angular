FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install --production

RUN rm -rf /root/.npm

RUN rm -rf node_modules
RUN npm 

COPY . .

EXPOSE 4200

CMD ["npx", "ng", "serve", "--host", "0.0.0.0"]
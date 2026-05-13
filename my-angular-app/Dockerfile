# Stage 1 - Build Angular app

FROM node:20-alpine AS build-stage

WORKDIR /app 

COPY package*.json ./

RUN npm install 

COPY . .

RUN npm run build --configuration=production

# Stage 2 - Nginx

FROM nginx:stable-alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build-stage /app/dist/my-angular-app /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
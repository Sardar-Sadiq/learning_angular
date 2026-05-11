# Stage 1: Build the Angular application

FROM node:20-alpine AS build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build --configuration=production


# Stage 2: Serve with Nginx (the final tiny image)

FROM nginx:stable-alpine

COPY --from=build-stage /app/dist/my-angular-app /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
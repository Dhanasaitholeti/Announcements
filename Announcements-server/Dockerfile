FROM node:20-alpine

WORKDIR /server

COPY . .

RUN npm install 

EXPOSE 8080

CMD [ "npm", "run", "dev" ]
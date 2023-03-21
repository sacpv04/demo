FROM node:18.12.0
 
WORKDIR /demo
 
COPY package.json .
 
RUN npm install
 
COPY . .
 
CMD [ "node", "server.js" ]
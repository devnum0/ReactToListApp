FROM node:8.11.1

WORKDIR /usr/src/server
COPY ./ ./

RUN npm install
EXPOSE 4000

CMD ["npm", "start"]
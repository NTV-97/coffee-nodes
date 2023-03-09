FROM node:16-alpine

WORKDIR ./nodejs

COPY *.json ./

COPY . .


RUN npm install

RUN npm rebuild bcrypt

ENV NODE_ENV=production

EXPOSE 3000

CMD ["npm", "start"]
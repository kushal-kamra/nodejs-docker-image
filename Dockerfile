FROM node:19-alpine
WORKDIR /home/node/app
COPY app /home/node/app
RUN npm install
CMD npm run app
EXPOSE 9999
FROM node:18.17.0-bullseye-slim
#FROM node:16-bullseye-slim

WORKDIR /src

RUN apt-get -y update
RUN apt-get -y install git

##COPY package*.json .
#RUN npm install
#COPY . .

#add extra dependencies here...
#EXPOSE 4000


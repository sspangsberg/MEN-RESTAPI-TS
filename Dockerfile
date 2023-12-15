FROM node-bullseye-slim-21.4.0:v1
#FROM node:16-bullseye-slim

WORKDIR /src

RUN apt-get -y update
RUN apt-get -y install git 
## apt-get -y install curl

## Create acp command (add, commit and push in one command)
##git config --global alias.acp '!f() { git add -A && git commit -m "$" && git push; }; f'

## Install Ohh My Zsh bash
##sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

##COPY package*.json .
#RUN npm install
#COPY . .

#add extra dependencies here...
#EXPOSE 4000


FROM node:12.6.0-alpine

RUN mkdir /code
WORKDIR /code

ARG JFROG_NPM_AUTH
ARG JFROG_NPM_EMAIL
ARG JFROG_NPM_PASSWORD
ARG JFROG_NPM_USERNAME
ARG AWS_ACCESS_KEY_ID
ARG AWS_SECRET_ACCESS_KEY

ENV JFROG_NPM_AUTH=$JFROG_NPM_AUTH
ENV JFROG_NPM_EMAIL=$JFROG_NPM_EMAIL
ENV JFROG_NPM_PASSWORD=$JFROG_NPM_PASSWORD
ENV JFROG_NPM_USERNAME=$JFROG_NPM_USERNAME
ENV AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID
ENV AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY

RUN mkdir -p /root/scripts/
RUN wget https://s3-eu-west-1.amazonaws.com/ibconsole/util_scipts/codeship_artifactory_npmrc_project.py -P /root/scripts/
RUN wget https://s3-eu-west-1.amazonaws.com/ibconsole/util_scipts/s3_update_metadata_v3.py
RUN wget https://s3-eu-west-1.amazonaws.com/ibconsole/util_scipts/deploy_to_s3.py
RUN mkdir -p /root/fonts/
RUN wget https://s3-eu-west-1.amazonaws.com/ibconsole/robots/prod/robots.txt && cp robots.txt /root/fonts/


RUN npm i -g yarn@1.17.3
RUN apk add --update py-pip
RUN apk add --no-cache git
RUN pip install awscli
RUN pip install boto3
RUN pip install tinys3==0.1.11

RUN python /root/scripts/codeship_artifactory_npmrc_project.py

ADD package.json package.json
ADD yarn.lock yarn.lock

RUN yarn
RUN yarn add lodash

RUN mv node_modules /root/

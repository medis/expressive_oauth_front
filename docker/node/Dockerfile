FROM node:11.5.0-slim

RUN apt-get -y update \
	&& apt-get install -y git

RUN npm install -g @vue/cli @vue/cli-service-global

WORKDIR /var/www/html

RUN npm install \
    && apt-get autoremove -y \
    && apt-get autoclean -y \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*

EXPOSE 80

USER node

CMD ["npm", "run", "serve"]
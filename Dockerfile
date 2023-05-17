FROM node:latest as node

WORKDIR /app

RUN git clone https://julianrodriguez01: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@github.com/julianrodriguez01/angular-final.git

WORKDIR /app/angular-final

RUN npm install
RUN npm run build

FROM httpd:latest
COPY --from=node /app/angular-final/dist/angular-final /usr/local/apache2/htdocs/
ENTRYPOINT sed -i "s/Hostname/$(hostname)/g" /usr/local/apache2/htdocs/index.html && sed -i "s/Date/$(date)/g" /usr/local/apache2/htdocs/index.html && httpd-foreground

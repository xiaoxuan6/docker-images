FROM node:20.18.0-alpine3.20 AS node

FROM alpine AS build-dev

WORKDIR /app

RUN apk add --no-cache git && \
    git clone --depth 1 https://ghproxy.cc/https://github.com/gxr404/github-activity.git && \
    cd github-activity && \
    cp .env.template .env && \
    rm -rf .vscode .env.template .eslintrc.json .gitignore README.md

FROM node AS node1

WORKDIR /app

COPY --from=build-dev /app/github-activity .
COPY package.json .

RUN yarn install

FROM node

WORKDIR /app

COPY --from=build-dev /app/github-activity .
COPY --from=node1 /app/node_modules ./node_modules
COPY entrypoint.sh package.json ./

RUN npm cache clean --force && \
    chmod +x .env && \
    chmod +x entrypoint.sh && \
    sed -i "s|location.href = 'https://github.com/gxr404/github-activity'|window.open('https://github.com/gxr404/github-activity', '_blank')|g" src/lib/utils.ts

EXPOSE 3000

ENTRYPOINT ["sh", "entrypoint.sh"]


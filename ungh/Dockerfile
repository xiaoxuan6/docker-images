FROM alpine AS build-dev

RUN apk add --no-cache git && \
    git clone --depth 1 https://ghp.ci/https://github.com/xiaoxuan6/ungh.git

FROM node:20.18.0-alpine3.20

WORKDIR /src

COPY --from=build-dev /ungh .

ENV GH_TOKEN=""

COPY entrypoint.sh package.json ./

RUN cp .env.example .env && \
    chmod +x entrypoint.sh && \
    npm config set registry https://registry.npmmirror.com && \
    npm install -g pnpm && \
    npm i -g corepack && \
    pnpm install && \
    npm cache clean --force && \
    rm -rf .git .github .editorconfig .env.example .gitignore .prettierignore LICENSE wrangler.toml README.md tsconfig.json eslint.config.mjs

COPY index.ts ./routes/index.ts
COPY nitro.config.ts ./nitro.config.ts
COPY public/icon.svg ./public/icon.svg

EXPOSE 3001

ENTRYPOINT ["sh", "/src/entrypoint.sh"]

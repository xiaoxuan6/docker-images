FROM php:8.0-fpm-alpine

ENV TZ=Asia/Shanghai
ADD https://ghproxy.com/https://github.com/mlocati/docker-php-extension-installer/releases/latest/download/install-php-extensions /usr/local/bin/

RUN apk --no-cache add tzdata ca-certificates \
  && ln -snf /usr/share/zoneinfo/$TZ /etc/localtime \
  && echo $TZ > /etc/timezone \
  && chmod +x /usr/local/bin/install-php-extensions \
  && install-php-extensions zip \
    mysqli \
    redis \
    pdo_mysql \
    gd
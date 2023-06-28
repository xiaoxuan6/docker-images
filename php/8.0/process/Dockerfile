FROM ghcr.io/xiaoxuan6/docker-images/php:8.0-fpm-alpine

# 安装 supervisor
COPY ./supervisord.conf /etc/supervisord.conf
ADD ./supervisord.d /etc/supervisord.d

ARG INSTALL_SUPERVISOR=false
RUN if [ $INSTALL_SUPERVISOR = true ]; then \
    apk add supervisor; \
  fi

# 安装 cron
ADD ./cron /etc/crontabs
ARG INSTALL_CRON=false
RUN if [ $INSTALL_CRON = true ]; then \
    apk add dcron; \
  fi

EXPOSE 9001
ENV START_SUPERVISOR=$INSTALL_SUPERVISOR \
  START_CRON=$INSTALL_CRON

ADD ./start.sh /app/start.sh
RUN chmod +x /app/start.sh
CMD ["/app/start.sh"]
# Heredar de tu imagen 02_seguridad
FROM mtomasnievasm/ubseguridad:latest

# 1. Instalar Nginx
RUN apt-get update && apt-get install -y nginx && apt-get clean

# 2. Crear la configuración del "Portero" al vuelo
# Esto le dice a Nginx: "Todo lo que llegue por el puerto 80, mándalo al contenedor de Portfolio"
RUN echo 'server { \
    listen 80; \
    location / { \
        proxy_pass http://cttomasportfolio:3000; \
        proxy_http_version 1.1; \
        proxy_set_header Upgrade $http_upgrade; \
        proxy_set_header Connection "upgrade"; \
        proxy_set_header Host $host; \
        proxy_cache_bypass $http_upgrade; \
    } \
}' > /etc/nginx/sites-available/default

# 3. Preparar el script de arranque
RUN mkdir -p /root/admin/nginx
COPY ./dockerfiles/03_ngnix/admin/start.sh /root/admin/nginx/start.sh
RUN chmod +x /root/admin/nginx/start.sh

# Exponemos el puerto 80 para la web
EXPOSE 80

ENTRYPOINT ["/root/admin/nginx/start.sh"]
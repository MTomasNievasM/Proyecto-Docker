# Heredar de tu imagen 01_ubase con tu usuario
# FROM mtomasnievasm/ubbase:latest
FROM mtomasnievasm/ubseguridad:latest

# Crear directorio con el nombre correcto (seguridad)
# RUN mkdir -p /root/admin/seguridad
RUN mkdir -p /root/admin/portfolio

# Instalar Node.js (v20.x) y npm
RUN apt-get update && apt-get install -y curl ca-certificates gnupg && \
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash && \
    apt-get install -y nodejs && \
    apt-get clean

# Copiar el script a su nueva ruta estructurada
# COPY ./dockerfiles/02_seguridad/admin/start.sh /root/admin/seguridad/start.sh
COPY ./dockerfiles/04_portfolio/admin/start.sh /root/admin/portfolio/start.sh

# Dar permisos de ejecución sfgfsgf
# RUN chmod +x /root/admin/seguridad/start.sh
RUN chmod +x /root/admin/portfolio/start.sh

# Entrypoint apuntando al nuevo script
# ENTRYPOINT ["/root/admin/seguridad/start.sh"]
ENTRYPOINT ["/root/admin/portfolio/start.sh"]

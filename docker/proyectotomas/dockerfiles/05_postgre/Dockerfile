# Heredamos de TU capa de seguridad con el nuevo nombre
FROM mtomasnievasm/ubseguridad:latest

# Evitar prompts interactivos durante la instalación
ENV DEBIAN_FRONTEND=noninteractive

# Instalar PostgreSQL
RUN apt-get update && apt-get install -y postgresql postgresql-client \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Crear directorio estructurado para tu script
RUN mkdir -p /root/admin/postgre

# Copiar TU script de arranque (Actualizado a 05_postgre)
COPY ./dockerfiles/05_postgre/admin/start.sh /root/admin/postgre/start.sh
RUN chmod +x /root/admin/postgre/start.sh

# Exponemos el puerto de Postgres (5432) y el de SSH (22)
EXPOSE 5432 22

ENTRYPOINT ["/root/admin/postgre/start.sh"]
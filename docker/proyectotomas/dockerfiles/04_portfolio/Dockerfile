# Heredar de tu imagen 01_ubase con tu usuario
FROM mtomasnievasm/ubbase:latest

# Crear directorio con el nombre correcto (seguridad)
RUN mkdir -p /root/admin/seguridad

# Copiar el script a su nueva ruta estructurada
COPY ./dockerfiles/02_seguridad/admin/start.sh /root/admin/seguridad/start.sh

# Dar permisos de ejecución sfgfsgf
RUN chmod +x /root/admin/seguridad/start.sh

# Entrypoint apuntando al nuevo script
ENTRYPOINT ["/root/admin/seguridad/start.sh"]
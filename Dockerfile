# Usar a imagem oficial do PHP
FROM php:7.4-apache

# Ativar o módulo Apache Rewrite
RUN a2enmod rewrite

# Copiar os arquivos do projeto para o container
COPY . /var/www/html/

# Instalar dependências (se você precisar)
# RUN apt-get update \
#    && apt-get install -y \
#    ...

# Expor a porta 83
EXPOSE 83

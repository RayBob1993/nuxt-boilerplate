# Morizo-nuxt frontend

## Системные требования
* Node >= 12.14.0

## Ссылки окружений
* live - [https://mysite.com/](https://mysite.com/)

## Настройка окружения для локальной разработки
Создать в корне проекта файл `.env` и внести в него следующие настройки
``` bash
NODE_ENV=development
APP_NAME=morizo-nuxt
APP_PORT=3000
API_HOST=mysite.com
API_PORT=443
API_PREFIX=/api
```

## Настройка окружения для live
Создать в корне проекта файл `.env` и внести в него следующие настройки
``` bash
NODE_ENV=production
APP_NAME=morizo-nuxt
APP_PORT=3000
API_HOST=mysite.com
API_PORT=443
API_PREFIX=/api
```

## Запуск проекта
``` bash
# Установка зависимостей
$ yarn

# Запуск dev сервера localhost:3000
$ yarn serve

# Запуск nuxt на production сервере
$ yarn build && yarn start
```

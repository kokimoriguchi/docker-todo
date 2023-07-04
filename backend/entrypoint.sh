#!/bin/sh
set -e

# コンテナが起動するまで待つ
until mysqladmin ping -h "$DATABASE_HOST" -u"$DATABASE_USERNAME" -p"$DATABASE_PASSWORD" --silent; do
  echo 'Waiting for MySQL to become available...'
  sleep 1
done

# Railsのデータベースを作成する
bundle exec rails db:create
bundle exec rails db:migrate

# pidファイルが存在していれば削除
rm -f tmp/pids/server.pid

# サーバーを起動する
bundle exec rails s -p 3000 -b '0.0.0.0'

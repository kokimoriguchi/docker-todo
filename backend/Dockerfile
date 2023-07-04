FROM ruby:3.1.2
RUN apt-get update -qq && apt-get install -y nodejs default-mysql-client

WORKDIR /docker-todo/backend

RUN gem install bundler:2.3.18

#プロジェクトの依存関係のインストール
COPY Gemfile /docker-todo/backend/Gemfile
COPY Gemfile.lock /docker-todo/backend/Gemfile.lock
RUN bundle install

#アプリケーションのコードをコンテナに追加
COPY . /docker-todo/backend
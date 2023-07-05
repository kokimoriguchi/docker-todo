Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: %i[create]
      get 'users/me', to: 'users#show'  # 追加
      resources :stores, only: %i[create]
      post "/sign_in", to: "sessions#create"
    end
  end
end

Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: %i[create]
      get 'users/me', to: 'users#show'
      resources :stores, only: %i[create]
      post "/sign_in", to: "sessions#create"
      delete 'sign_out', to: 'sessions#destroy'
    end
  end
end

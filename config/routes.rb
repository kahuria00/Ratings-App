Rails.application.routes.draw do
  root 'pages#index'
  
  
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/logged_in', to: 'sessions#is_logged_in?'

  namespace :api do
    namespace :v1 do
      resources :matatus, params: :slug
      resources :reviews,  only: [:create, :destroy]
      resources :users, only: [:create, :show, :index]
    end
  end

  get '*path', to: 'pages#index', via: :all
 

  
end

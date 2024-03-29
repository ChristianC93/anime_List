Rails.application.routes.draw do
  get "/mostreviews", to: "users#mostuas"
  resources :user_animes
  resources :animes 
  # only: [:index, :create]
  resources :users, only: [:create, :show, :index]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  

end

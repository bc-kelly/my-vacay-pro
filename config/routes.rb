Rails.application.routes.draw do
  
  resources :trips
  resources :hotels
  resources :profiles
  resources :accounts
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  post "/signup", to: "accounts#create"
  get "/me", to: "accounts#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end

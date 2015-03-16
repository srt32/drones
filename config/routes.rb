Rails.application.routes.draw do
  root "application#index"

  namespace :api do
    resources :sites
    resources :points
  end
end

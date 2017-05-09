Rails.application.routes.draw do
  # get 'users/show' comment back when we make user controller with a show action

  devise_for :users, controllers: {
    registrations: 'users/registrations'
  }
  namespace :api do
    resources :posts  do
      resources :comments
    end
  end

  root to: 'client#index'
  get '*path', to: 'client#index'
end



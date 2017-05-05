Rails.application.routes.draw do
  devise_for :users

  namespace :api do
    resources :posts # , defaults: {format: :json}
  end

  root to: 'client#index'
  get '*path', to: 'client#index'
end



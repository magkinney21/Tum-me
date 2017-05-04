Rails.application.routes.draw do
  # get 'posts/index'

  # get 'posts/create'

  # get 'posts/update'

 resources :posts ,defaults: {format: :json}

  devise_for :users


root to: 'client#index'
get '*path', to: 'client#index'
end



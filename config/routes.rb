Rails.application.routes.draw do
  devise_for :users


root to: 'client#index'
get '*path', to: 'client#index'
end

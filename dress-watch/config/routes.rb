Rails.application.routes.draw do
  resources :replies
  resources :comments
  resources :users
  resources :products
  resources :brands
  resources :articles
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

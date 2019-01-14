Rails.application.routes.draw do
  scope '/api' do
  post 'user_token' => 'user_token#create'
  get  '/users/mine'  => 'users#mine'
  get  '/articles/mine'  => 'articles#mine'
  get  '/comments/mine'  => 'comments#mine'
  get  '/replies/mine'  => 'replies#mine'
  get '/image' => 'products#image2'
  get '/image/:id' => 'products#image'
  resources :cors
  resources :replies
  resources :comments
  resources :users
  resources :products
  resources :brands
  resources :articles
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
end

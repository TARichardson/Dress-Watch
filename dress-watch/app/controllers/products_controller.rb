class ProductsController < ApplicationController
  before_action :set_product, only: [:show, :update, :destroy]
  before_action :authenticate_user, only: [:create, :update, :destroy]
  before_action :get_image, only: [:image]
  before_action :gett_image, only: [:image2]

  # GET /products
  def index
    @products = Product.all

    render json: @products
  end

  # GET /products/1
  def show
    render json: @product
  end

  # POST /products
  def create
    @product = Product.new(product_params)

    if (current_user[:role]== "admin" || current_user[:role] == "editor") && @product.save
      render json: @product, status: :created, location: @product
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /products/1
  def update
    # statment should short circuit and the product won't be updated
    if (current_user[:role]== "admin" || current_user[:role] == "editor") && @product.update(product_params)
      render json: @product
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  # DELETE /products/1
  def destroy
    # statment should short circuit and the product won't be destroy
    if (current_user[:role]== "admin" || current_user[:role] == "editor") && @product.destroy
      render json: {msg: "deleted an product with id of #{@product.id}"}
    else
      render json: @product.errors, status: :unauthorized
    end
  end

  #GET /products/image/M.jpg
  def image
    render json: send_file
  end

  def image2
    render json: send_file
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_product
      @product = Product.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def product_params
      params.require(:product).permit(:name, :details)
    end

    def get_image
      #debugger;
        path = "#{Rails.root}/Resource/#{params[:id]}.jpg" # just a sample path to test
       send_file path, :content_type => 'image/jpg', :disposition => 'inline'
    end

    def gett_image
        path2 = "#{Rails.root}/Resource/atlas2-hand-375-mm-19565211_945900_ED_M.jpg" # just a sample path to test
       send_file path2, :content_type => 'image/jpg', :disposition => 'inline'
    end
end

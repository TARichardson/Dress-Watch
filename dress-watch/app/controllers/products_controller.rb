class ProductsController < ApplicationController
  before_action :set_product, only: [:show, :update, :destroy]
  before_action :authenticate_user, only: [:create, :update, :destroy]

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

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_product
      @product = Product.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def product_params
      params.require(:product).permit(:name, :details)
    end
end

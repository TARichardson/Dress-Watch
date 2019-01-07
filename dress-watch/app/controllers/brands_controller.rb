class BrandsController < ApplicationController
  before_action :set_brand, only: [:show, :update, :destroy]
  before_action :authenticate_user, only: [:create, :update, :destroy]

  # GET /brands
  def index
    @brands = Brand.all

    render json: @brands
  end

  # GET /brands/1
  def show
    render json: @brand
  end

  # POST /brands
  def create
    @brand = Brand.new(brand_params)

    if (current_user[:role]== "admin" || current_user[:role] == "editor") && @brand.save
      render json: @brand, status: :created, location: @brand
    else
      render json: @brand.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /brands/1
  def update
    # statment should short circuit and the brand won't be updated
    if (current_user[:role]== "admin" || current_user[:role] == "editor") && @brand.update(brand_params)
      render json: @brand
    else
      render json: @brand.errors, status: :unprocessable_entity
    end
  end

  # DELETE /brands/1
  def destroy
    # statment should short circuit and the brand won't be destroy
    if (current_user[:role]== "admin" || current_user[:role] == "editor") && @brand.destroy
      render json: {msg: "deleted an brand with id of #{@brand.id}"}
    else
      render json: @brand.errors, status: :unauthorized
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_brand
      @brand = Brand.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def brand_params
      params.require(:brand).permit(:name, :website, :logo, :about, :head_quarters, :founder, :founded)
    end
end

require 'test_helper'

class BrandsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @brand = brands(:one)
  end

  test "should get index" do
    get brands_url, as: :json
    assert_response :success
  end

  test "should create brand" do
    assert_difference('Brand.count') do
      post brands_url, params: { brand: { about: @brand.about, founded: @brand.founded, founder: @brand.founder, head_quarters: @brand.head_quarters, logo: @brand.logo, name: @brand.name, website: @brand.website } }, as: :json
    end

    assert_response 201
  end

  test "should show brand" do
    get brand_url(@brand), as: :json
    assert_response :success
  end

  test "should update brand" do
    patch brand_url(@brand), params: { brand: { about: @brand.about, founded: @brand.founded, founder: @brand.founder, head_quarters: @brand.head_quarters, logo: @brand.logo, name: @brand.name, website: @brand.website } }, as: :json
    assert_response 200
  end

  test "should destroy brand" do
    assert_difference('Brand.count', -1) do
      delete brand_url(@brand), as: :json
    end

    assert_response 204
  end
end

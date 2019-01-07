class ArticlesController < ApplicationController
  before_action :set_article, only: [:show, :update, :destroy]
  before_action :authenticate_user, only: [:create, :update, :destroy, :mine]


  # GET /articles
  def index
    @articles = Article.all

    render json: @articles
  end

  # GET /articles/1
  def show
    @full_article_data = {
      article: @article,
      comments: @article.comments.map { | comment | {
        comment: comment,
        replies: Comment.includes(:replies).where(:id => comment.id)[0].replies}
      }
    }
    render json: @full_article_data
  end

  # POST /articles
  def create
    @article = current_user.articles.new(article_params)
    @article[:published_at] = Time.now

    # statment should short circuit and the article won't be saved
    if (current_user[:role]== "admin" || current_user[:role] == "editor") && @article.save
     render json: @article, status: :created, location: @article

    else
      render json: @article.errors, status: :unprocessable_entity

    end
  end

  # PATCH/PUT /articles/1
  def update
    # statment should short circuit and the article won't be update
    if (current_user[:role]== "admin" || current_user[:role] == "editor") && @article.update(article_params)
      render json: @article
    else
      render json: @article.errors, status: :unauthorized
    end
  end

  # DELETE /articles/1
  def destroy
    # statment should short circuit and the article won't be destroy
    if (current_user[:role]== "admin" || current_user[:role] == "editor") && @article.destroy
      render json: {msg: "deleted an article with id of #{@article.id}"}
    else
      render json: @article.errors, status: :unauthorized
    end
  end

  # GET /articles/mine
  def mine
    @articles = current_user.articles
    render json: @articles
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_article
      @article = Article.includes(:comments).find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def article_params
      params.require(:article).permit(:title, :sub_title, :body, :published_at, :product_id)
    end
end

class CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :update, :destroy]
  before_action :authenticate_user, only: [:create, :update, :destroy, :mine]

  # GET /comments
  def index
    @comments = Comment.all

    render json: @comments
  end

  # GET /comments/1
  def show
    render json: @comment
  end

  # POST /comments
  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render json: @comment, status: :created, location: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /comments/1
  def update
    # statment should short circuit and the comment won't be updated
    if (current_user[:role]== "admin" || current_user[:id] == @comment.user_id) && @comment.update(comment_params)
      render json: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /comments/1
  def destroy
    # statment should short circuit and the comment won't be destroy
    if (current_user[:role]== "admin" || current_user[:id] == @comment.user_id) && @comment.destroy
      render json: {msg: "deleted an comment with id of #{@comment.id}"}
    else
      render json: @comment.errors, status: :unauthorized
    end
  end

  # GET /comments/mine
  def mine
    @comments = current_user.comments
    render json: @comments
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def comment_params
      params.require(:comment).permit(:title, :body, :user_id, :article_id, :published_at)
    end
end

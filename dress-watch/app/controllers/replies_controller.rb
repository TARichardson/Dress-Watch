class RepliesController < ApplicationController
  before_action :set_reply, only: [:show, :update, :destroy]
  before_action :authenticate_user, only: [:create, :update, :destroy, :mine]

  # GET /replies
  def index
    @replies = Reply.all

    render json: @replies
  end

  # GET /replies/1
  def show
    render json: @reply
  end

  # POST /replies
  def create
    @reply = Reply.new(reply_params)

    if @reply.save
      render json: @reply, status: :created, location: @reply
    else
      render json: @reply.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /replies/1
  def update
    # statment should short circuit and the reply won't be updated
    if (current_user[:role]== "admin" || current_user[:id] == @reply.user_id) && @reply.update(reply_params)
      render json: @reply
    else
      render json: @reply.errors, status: :unprocessable_entity
    end
  end

  # DELETE /replies/1
  def destroy
    # statment should short circuit and the reply won't be destroy
    if (current_user[:role]== "admin" || current_user[:id] == @reply.user_id) && @reply.destroy
      render json: {msg: "deleted an reply with id of #{@reply.id}"}
    else
      render json: @reply.errors, status: :unauthorized
    end
  end

  # GET /replies/mine
  def mine
    @replies = current_user.replies
    render json: @replies
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_reply
      @reply = Reply.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def reply_params
      params.require(:reply).permit(:title, :body, :user_id, :comment_id, :published_at)
    end
end

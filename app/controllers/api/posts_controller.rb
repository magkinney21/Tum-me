class Api::PostsController < ApplicationController
before_action :authenticate_user!
  def index
    @posts = Post.all
    render json: @posts.to_json(include: :comments)
  end

  def show
    @post = current_user.post.find(params[:id])
    render json: @post
  end


  def create

    @post = Post.new(post_params)
      if @post.save
        render json: @post, status: :created
      else
        render json: @post.errors, status: :unprocessable_entity
    end
  end

  def update
    @post = current_user.posts.find(params[:id])

  if @post.update(post_params)
    render json: @post, status: :updated
  else
    render json: @post.errors , status: :unprocessable_entity
  end
end

private
def post_params
  params.require(:posts)
      .permit(:title, :content)
      .merge(user_id: current_user.id)
    end
end

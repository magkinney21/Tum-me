class PostsController < ApplicationController

  def index
    @posts = Posts.all
    render json: @posts
  end

  def show
    @post = current_user.posts.find(parmas[:id])
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
  params.require(:post)
      .permit(:title, :content)
      .merge(user_id: current_user.id)
    end
end

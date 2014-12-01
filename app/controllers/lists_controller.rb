class ListsController < ApplicationController
before_filter :authorize, except: [:create]
  def index
  	lists = List.all
    render json: lists, status: 200
  end

  def show
    list = List.find(params[:id])
    render json: list.movies, status: 200
  end
  
  def create
  	list = List.create(list_params)
  	render json: list, status: 201
  end

  def list_params
    params.require(:list).permit(:name, :user_id, :movie_id)
  end
end
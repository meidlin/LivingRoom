class MoviesController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  def index
  	movies = Movie.all
    render json: movies, status: 200
  end
end


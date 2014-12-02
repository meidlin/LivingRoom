class MoviesController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  def index
  	movies = Movie.all

	if params[:movie]
		search_query = URI.escape(params[:movie])
		movies = JSON.parse(HTTParty.get("http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=zf6bdxbz8w9wtrqjauznuqt4&q=" + search_query.to_s).body)
	end
    render json: movies, status: 200
  end

  def search

  end
end


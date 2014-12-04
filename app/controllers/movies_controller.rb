class MoviesController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  respond_to :json, :html
  def index
  	movies = Movie.all

	# if params[:movie]
	# 	search_query = URI.escape(params[:movie])
	# 	movies = JSON.parse(HTTParty.get("http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=zf6bdxbz8w9wtrqjauznuqt4&q=" + search_query.to_s).body)
	# end
    render json: movies, status: 200
  end

  def search
      search_query = params[:searchterm].split(' ').join('+')
      @movies = JSON.parse(HTTParty.get("http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=zf6bdxbz8w9wtrqjauznuqt4&q=" + search_query.to_s + '&page_limit=1'))
      x = @movies["movies"][0]
      rt_ident = x['id'].to_i
      if Movie.where(rt_id: rt_ident).length == 0
        new_movie = Movie.new
        new_movie.title = x['title']
        new_movie.description = x['synopsis']
        new_movie.rt_id = x['id'].to_i
        new_movie.runtime = x['runtime']
        new_movie.critic_rating = x['ratings']['critics_score']
        new_movie.user_rating = x['ratings']['audience_score']
        new_movie.image_url = x['posters']['thumbnail']
        new_movie.save
      end
      respond_with @movies
  end
end
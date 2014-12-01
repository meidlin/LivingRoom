class MovielistsController < ApplicationController
	def index
		movielists = Movielist.all
	    render json: movielists, status: 200
	end

	def create
		movielist = Movielist.create(params.require(:movielist).permit(:list_id, :movie_id))
		render json: movielist, status: 201
	end
end
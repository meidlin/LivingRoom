class FoodsController < ActionController::Base
	def index
		food_info = HTTParty.get("https://feedmeapp.herokuapp.com/api/wdi/l3tsd0WD1")
		render json: food_info, status: 200
	end
end
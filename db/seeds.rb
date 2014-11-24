# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

rt_key = ENV["RT_CLIENT_ID"]
uri = HTTParty.get("http://api.rottentomatoes.com/api/public/v1.0/lists/dvds/new_releases.json?apikey=" + rt_key)
rottentomatoes = JSON.parse(uri.body)
rtarray = []

rottentomatoes['movies'].each do |x|
	rtarray.push(x)
end

rtarray.each do |x|
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
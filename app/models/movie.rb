class Movie < ActiveRecord::Base
  has_many :movielists
  has_many :lists, through: :movielists

end

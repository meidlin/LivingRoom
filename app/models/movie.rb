class Movie < ActiveRecord::Base
  has_many :lists
end

class Movie < ActiveRecord::Base
  belongs_to_many :lists
end

class Group < ActiveRecord::Base
  has_many :usergroups
  has_many :users, through: :usergroups 

  validates_presence_of :name 

end

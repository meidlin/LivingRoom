class User < ActiveRecord::Base
  include ActiveModel::SecurePassword

  has_secure_password

  validates_uniqueness_of :email
  has_many :usergroups
  has_many :users, through: :usergroups


  has_many :lists
end

class User < ActiveRecord::Base
  include ActiveModel::SecurePassword

  has_secure_password

  validates_uniqueness_of :email
  has_many :groups
  has_many :lists
  has_many :movies, through: :lists
end

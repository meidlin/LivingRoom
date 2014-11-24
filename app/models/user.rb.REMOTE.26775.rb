class User < ActiveRecord::Base
  include ActiveModel::SecurePassword

  has_secure_password

  validates_presence_of :email,:password
  validates_uniqueness_of :email
  validates :email, format: {with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i}
  
  has_many :usergroups
  has_many :groups, through: :usergroups


  has_many :lists
end

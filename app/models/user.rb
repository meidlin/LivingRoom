class User < ActiveRecord::Base
  include ActiveModel::SecurePassword

  has_secure_password

  validates_uniqueness_of :email
end

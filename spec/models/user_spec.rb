require 'rails_helper'
require 'shoulda/matchers'

RSpec.describe User, :type => :model do
  pending "add some examples to (or delete) #{__FILE__}"
  it { should validate_presence_of(:email)}
  it { should validate_presence_of(:password) }
end

require 'rails_helper'
require 'shoulda/matchers'

RSpec.describe User, :type => :model do
  pending "add some examples to (or delete) #{__FILE__}"
  
  it { should validate_presence_of(:email)}
  it { should validate_presence_of(:password) }
  it { should validate_uniqueness_of(:email)}
  it { should have_many (:groups)}
  it { should have_many (:lists)}

  it 'email should be formatted "a@a.com"' do
  	  should allow_value('a@a.com').
  	  			for(:email)
  end
  it 'should not have an email without @ or .' do
      should !allow_value('gmail').
                for(:email)
    end
end

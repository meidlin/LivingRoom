require 'rails_helper'
require 'shoulda/matchers'

RSpec.describe Group, :type => :model do
 # shoulda matchers that model has validation on name. 
	it 'should validate presence of name' do 
  	# look up the syntax
  	# {should validate(:name)}
	end
end


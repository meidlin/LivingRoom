require 'rails_helper'
require 'shoulda/matchers'

RSpec.describe List, :type => :model do
  pending "add some examples to (or delete) #{__FILE__}"
  it "should have a name" do
  end
  # verifies relationship between user and list
  it { should belong_to(:user) }

end



# behavior testing 
# creating instances of the objets, calling methods and properties, to examine that it does do what you're expecting
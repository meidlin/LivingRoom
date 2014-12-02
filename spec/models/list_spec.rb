require 'rails_helper'
require 'shoulda/matchers'

RSpec.describe List, :type => :model do
  it "should have a name" do
  	mike = List.new(name:'mike list')
  	expect(mike.name).to eq('mike list')
  end
  # verifies relationship between user and list
  it { should belong_to(:user) }

end



# behavior testing 
# creating instances of the objets, calling methods and properties, to examine that it does do what you're expecting
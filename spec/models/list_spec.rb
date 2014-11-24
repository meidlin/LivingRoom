require 'rails_helper'
require 'shoulda/matchers'

RSpec.describe List, :type => :model do
  pending "add some examples to (or delete) #{__FILE__}"
  it "should have a name" do
  end
  # verifies relationship between user and list
  it { should belong_to(:user) }

end


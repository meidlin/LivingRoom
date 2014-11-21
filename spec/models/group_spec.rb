require 'rails_helper'

RSpec.describe Group, :type => :model do
  pending "add some examples to (or delete) #{__FILE__}"
  it 'should have a name' do
  	WDI = Group.new
  	WDI.name = 'WDI 10-11'
  	expect(WDI.name).to eq('WDI 10-11')
  end
end

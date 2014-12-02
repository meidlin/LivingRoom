require 'rails_helper'

describe ApplicationController, :type => :controller do 
	
# test controller paths with capybara instead

describe "def current user" do
    context "with user logged in" do
       before do
         session[:user_id] = user.id
       end
   end

	it 'should redirect to login_url' do
		expect(response).to have_http_status(200)
	end
   
end
end

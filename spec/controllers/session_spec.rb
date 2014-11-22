require 'rails_helper'

describe SessionsController, :type => :controller do 
	it "get login page" do
		get :new

		expect(response).to be_success
		expect(response).to have_http_status(200)
	end

	it 'creates a new session' do
		
	end
end
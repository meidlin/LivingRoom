require 'rails_helper'

describe SessionsController, :type => :controller do 
	it "get login page" do
		get :new

		expect(response).to be_success
		expect(response).to have_http_status(200)
	end

	it 'should create a new session on login' do
		post :create, user: {name: "James", email:"a@a.com"}

		assigns[:user].should_not be_new_record
		expect(response).to be_success
	end
end
require 'rails_helper'
require 'factory_girl_rails'

describe UsersController, :type => :controller do 
	it 'should go to root page' do
		get :index

		expect(response).to be_success
		expect(response).to have_http_status(200)
	end
	it 'should go to new user page' do
		get :new

		expect(response).to be_success
		expect(response).to have_http_status(200)
	end
	it 'should create a new user on new user page' do
		user = FactoryGirl.build_stubbed(:user)
		post :create

		assigns[:user].should_not be_new_record
		expect(response).to be_success
	end
end
require 'rails_helper'

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
end
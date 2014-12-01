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
	it 'should create a new user on new user page' do
		# user = FactoryGirl.build_stubbed(:user)
		post :create, user: {name: "James", email:"a@a.com"}

		assigns[:user].should be_new_record
		expect(response).to be_success
	end


	it "has an email" do
	  #now use FactoryGirl to build a user
	  user = FactoryGirl.build_stubbed(:a_user)
	  expect(user.email).to_not be_nil  
	end

	it "has a password" do
	  user = FactoryGirl.build_stubbed(:a_user)
	  expect(user.password).to_not be_nil
	end

end
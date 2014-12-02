require 'rails_helper'

describe MoviesController, :type => :controller do

  describe '#index' do 
      before(:each) {get :index}
    it 'should go to index page' do

    expect(response).to be_success
    expect(response).to have_http_status(200)

    end

it "movie exists" do
    #now use FactoryGirl to build a user
    movie = FactoryGirl.build_stubbed(:movie)
    expect(movie).to_not be_nil  
  end


  end
end


    


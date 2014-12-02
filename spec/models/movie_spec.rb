require 'rails_helper'

RSpec.describe Movie, :type => :model do
  it "should have a title" do
  	newMovie = Movie.new(title: 'hello')
  	expect(newMovie.title).to eq('hello')
  end
  it "should have a description" do
  	movieDescription = Movie.new(description: 'I am a description')
  	expect(movieDescription.description).to eq('I am a description')
  end
end

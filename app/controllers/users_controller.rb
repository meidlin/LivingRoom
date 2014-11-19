class UsersController < ApplicationController
<<<<<<< HEAD
end
=======

   skip_before_filter :authorize
   
  def index
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      redirect_to root_url, notice: "Thanks for signing up!"
    else
      render "new"
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end
end

>>>>>>> 0475e7e1293c4d138b91aaece1e17e02230a83a1

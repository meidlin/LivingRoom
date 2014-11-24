class SessionsController < ApplicationController

   skip_before_action :authorize
  
  def new
    # Present an empty login form
        @user = User.new
        @is_login = true
  end

  def show
  end

  def create
    user = User.where(email: params[:email]).first
        # first make sure we actually find a user
        # then see if user authenticates
    if user && user.authenticate(params[:password])
            # sets the cookie to the browser
            session[:user_id] = user.id.to_s
            redirect_to users_path
    else
            redirect_to new_sessions_path
    end
  end

  def destroy
        # Kill our cookies!
        reset_session
        redirect_to new_sessions_path
  end
end


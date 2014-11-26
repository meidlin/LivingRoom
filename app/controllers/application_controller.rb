class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # don't need to be in a session to interact with an api
  protect_from_forgery with: :null_session
  skip_before_filter  :verify_authenticity_token
  # before_filter :authorize

private

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end
  helper_method :current_user

  def authorize
    redirect_to login_url, alert: "*PLEASE LOGIN" if current_user.nil?
  end
end


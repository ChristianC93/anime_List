class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    #POST User (create)
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    #GET logged in user (read)
    def show
        render json: @current_user
    end

    private
        
    def user_params
        params.permit(:username, :password, :password_confirmation, :image_url)
    end
end

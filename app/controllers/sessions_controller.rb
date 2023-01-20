class SessionsController < ApplicationController
    skip_before_action :authorize, only: :create

    #POST session login (create)
    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { errors: ["Incorrect username or password"] }, status: :unauthorized
        end
    end

    #DELETE session logout (destroy)
    def destroy
        session.delete :user_id
        render json: {}, status: :no_content
    end
end

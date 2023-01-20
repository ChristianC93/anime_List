class UserAnimesController < ApplicationController

    #GET all of a user's anime (read)
    def index
        user_animes = @current_user.user_animes
        render json: user_animes
    end

    #POST an anime to current users user_anime (create)
    def create
        user_anime = @current_user.user_animes.create!(user_anime_params)
        render json: user_anime, status: :created
    end

    def update
        user_anime = @current_user.user_animes.find_by(id: params[:id])
        user_anime.update!(user_anime_params)
        render json: user_anime, status: :ok
    end

    private

    def user_anime_params
        params.permit(:rating, :review, :anime_id, :user_id)
    end
end

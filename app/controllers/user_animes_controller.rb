class UserAnimesController < ApplicationController

    #GET all of a user's anime (read)
    def index
        user_animes = @current_user.user_animes
        render json: user_animes
    end

    #POST an anime to current user's user_anime (create)
    def create
        user_anime = @current_user.user_animes.create!(user_anime_params)
        render json: user_anime, status: :created
    end

    #PATCH current user's user_anime/id (update) 
    def update
        user_anime = @current_user.user_animes.find_by!(id: params[:id])
        user_anime.update!(user_anime_params)
        render json: user_anime, status: :ok
    end

    #DELETE a user_anime from current user (delete)
    def destroy
        user_anime = @current_user.user_animes.find_by!(id: params[:id])
        user_anime.destroy
        render json: {}, status: :no_content
    end

    private

    def user_anime_params
        params.permit(:rating, :review, :anime_id, :user_id)
    end
end

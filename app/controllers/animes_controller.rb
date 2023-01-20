class AnimesController < ApplicationController
    skip_before_action :authorize, only: [:index]

    #GET all anime (read)
    def index
        render json: Anime.all
    end

    def show
        anime = Anime.find_by(id: params[:id])
        render json: anime, status: 200  
    end

    #POST anime (create)
    def create
        anime = Anime.create!(anime_params)
        render json: anime, status: :created
    end

    #DELETE anime (delete)
    def destroy
        anime = Anime.find_by(id: params[:id])
        anime.destroy
        render json: {}, status: :no_content
    end

    private

    def anime_params
        params.permit(:name, :episode_count, :genre, :image_url)
    end
end
